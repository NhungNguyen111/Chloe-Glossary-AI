# RISK + DELEGATION-MAP-PB01 — Risk register và leash

## Risk register

| ID | Rủi ro | XS | TĐ | Mức | Mitigation | Owner |
|---|---|---:|---:|---:|---|---|
| R1 | Encoding tiếng Việt bị mojibake | 3 | 3 | Cao | lưu UTF-8; kiểm tra browser | Dev |
| R2 | Mất dữ liệu localStorage | 2 | 4 | Cao | export định kỳ; test reload | PM |
| R3 | Import file bẩn/record trùng | 3 | 3 | Cao | validate + skip + toast | Dev |
| R4 | Dashboard hiển thị số bịa | 2 | 4 | Cao | nguồn + công thức + editable telemetry | PM |
| R5 | Scope creep sang backend/sync | 3 | 3 | Cao | hard-stop tại out-of-scope | PM |

## Delegation map (L0–L5)

| Việc | Level | Leash | Cổng kiểm soát |
|---|---|---|---|
| Sinh draft artefact | L3 | A | PM review nội dung |
| Chỉnh HTML/CSS/JS | L4 | A+ | diff + smoke test |
| Sửa dữ liệu người dùng | L2 | A | confirm trước xóa; không overwrite import |
| Đổi scope/NFR | L1 | A | PM quyết định rõ ràng |
| Xóa file/đổi cấu trúc lớn | L0 | A+ | cần phê duyệt trực tiếp |

## Fail-closed gates

Không merge khi: file không mở được, test P0 fail, dữ liệu import làm mất dữ liệu cũ, hoặc telemetry không có nguồn/công thức.

## Telemetry

Tool: Codex · Thời gian người thật: 0.6h · Vòng lặp: 2 · Rework: 1 · PM-edit: 3.
