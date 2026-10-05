# DEVBOOK-PB01 — Decision log và AI review

## Decision log

| Ngày | Quyết định | Lý do | Hệ quả |
|---|---|---|---|
| 2026-10-05 | Giữ MVP static | dễ chạy offline, không cần setup | chưa sync đa thiết bị |
| 2026-10-05 | Gộp artefact Risk+Delegation | đúng quota 10 file | vẫn giữ hai section độc lập |
| 2026-10-05 | Dashboard tách khỏi user UI | tránh làm người dùng rối | developer mở link riêng |

## AI output đã review

- AI đề xuất dùng chart library; PM chọn SVG thuần để giảm dependency.
- AI đề xuất backend đồng bộ; PM giữ out-of-scope cho MVP.
- AI đề xuất hard-code KPI; PM yêu cầu ô nhập telemetry, công thức và nguồn dữ liệu.

## Known gaps

1. Chưa có automated test runner; hiện dùng smoke test browser.
2. Dữ liệu mặc định phụ thuộc app.js hiện có; cần export backup trước khi thử import lớn.
3. Dashboard chưa đọc tự động git history; status hiện là dữ liệu project do PM cập nhật.

## Telemetry

Tool: Codex · Thời gian người thật: 0.5h · Vòng lặp: 2 · Rework: 1 · PM-edit: 4.
