param(
  [switch]$Seed,
  [switch]$Watch
)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
$artifactDir = Join-Path $root 'docs\project-glossary'
$telemetryFile = Join-Path $root 'project-telemetry.js'
$stateFile = Join-Path $root '.pm-edit-state.json'
$aiMarker = Join-Path $root '.ai-editing'
$tracked = Get-ChildItem $artifactDir -Filter '*.md' -File | Where-Object { $_.Name -match '^(01|02|03|04|05|06|07|08|09|10)-' }

function Get-Snapshot {
  $snapshot = @{}
  foreach ($file in $tracked) {
    $snapshot[$file.Name] = @{ LastWriteUtc = $file.LastWriteTimeUtc.ToString('o'); Hash = (Get-FileHash -LiteralPath $file.FullName -Algorithm SHA256).Hash }
  }
  return $snapshot
}

function Get-InitialTelemetry {
  $items = [ordered]@{}
  foreach ($file in $tracked) { $items[$file.Name] = [ordered]@{ pmEdits = 0; lastEditedBy = 'AI baseline'; lastChange = $null } }
  return [ordered]@{ version = 1; updatedAt = (Get-Date).ToString('o'); artifacts = $items }
}

function Write-Telemetry($telemetry) {
  $json = $telemetry | ConvertTo-Json -Depth 8
  $js = "window.PB01_TELEMETRY = $json;`r`n"
  Set-Content -LiteralPath $telemetryFile -Value $js -Encoding utf8
}

if ($Seed -or -not (Test-Path $stateFile)) {
  (Get-Snapshot | ConvertTo-Json -Depth 8) | Set-Content -LiteralPath $stateFile -Encoding utf8
  Write-Telemetry (Get-InitialTelemetry)
  Write-Host "Seeded AI baseline. PM-edit counters = 0."
  if (-not $Watch) { exit 0 }
}

if (-not $Watch) { Write-Host "Use -Watch to monitor saved Markdown artefacts."; exit 0 }

$previousObject = Get-Content -Raw $stateFile | ConvertFrom-Json
$previous = @{}
foreach ($property in $previousObject.PSObject.Properties) { $previous[$property.Name] = $property.Value }
$telemetry = Get-Content -Raw $telemetryFile -ErrorAction SilentlyContinue
if ($telemetry) { $null = $telemetry } # telemetry file remains the browser-readable source

Write-Host "Watching $artifactDir. Every saved tracked .md change increments PM-edit by 1. Press Ctrl+C to stop."
while ($true) {
  Start-Sleep -Milliseconds 900
  $current = Get-Snapshot
  $changed = @($current.Keys | Where-Object { -not $previous.ContainsKey($_) -or $current[$_].Hash -ne $previous[$_].Hash })
  if ($changed.Count -gt 0) {
    if (Test-Path $aiMarker) {
      ($current | ConvertTo-Json -Depth 8) | Set-Content -LiteralPath $stateFile -Encoding utf8
      $previous = $current
      continue
    }
    $data = Get-InitialTelemetry
    if (Test-Path $telemetryFile) {
      $raw = Get-Content -Raw $telemetryFile
      foreach ($name in $current.Keys) {
        $pattern = '"' + [regex]::Escape($name) + '"\s*:\s*\{\s*"pmEdits"\s*:\s*(\d+)'
        $match = [regex]::Match($raw, $pattern)
        if ($match.Success) { $data.artifacts[$name].pmEdits = [int]$match.Groups[1].Value }
      }
    }
    foreach ($name in $changed) {
      $data.artifacts[$name].pmEdits = [int]$data.artifacts[$name].pmEdits + 1
      $data.artifacts[$name].lastEditedBy = 'PM'
      $data.artifacts[$name].lastChange = (Get-Date).ToString('o')
      Write-Host "PM-edit +1: $name => $($data.artifacts[$name].pmEdits)"
    }
    $data.updatedAt = (Get-Date).ToString('o')
    Write-Telemetry $data
    ($current | ConvertTo-Json -Depth 8) | Set-Content -LiteralPath $stateFile -Encoding utf8
    $previous = $current
  }
}
