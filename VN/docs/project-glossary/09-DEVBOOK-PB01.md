# DEVBOOK-PB01 — Decision log và AI review

## Decision log

| Ngày | Quyết định | Lý do | Hệ quả |
|---|---|---|---|
| 2026-10-05 | Giữ MVP static | dễ chạy offline, không cần setup | chưa sync đa thiết bị |
| 2026-10-05 | Gộp artefact Risk+Delegation | đúng quota 10 file | vẫn giữ hai section độc lập |
| 2026-10-05 | Dashboard tách khỏi user UI | tránh làm người dùng rối | developer mở link riêng |
| 2026-10-05 | Trace PM edit theo artifact | phân loại thay đổi feature về SCOPE/SPEC và đồng bộ Dashboard | mỗi commit có artifact mapping |
| 2026-10-05 | Đồng bộ Dashboard và Markdown | nội dung nộp bài không được lệch giữa hai nơi | cập nhật artifact MD cùng lượt chỉnh sửa |

## AI output đã review

- AI đề xuất dùng chart library; PM chọn SVG thuần để giảm dependency.
- AI đề xuất backend đồng bộ; PM giữ out-of-scope cho MVP.
- AI đề xuất hard-code KPI; PM yêu cầu ô nhập telemetry, công thức và nguồn dữ liệu.

## Known gaps

1. Chưa có automated test runner; hiện dùng smoke test browser.
2. Dữ liệu mặc định phụ thuộc app.js hiện có; cần export backup trước khi thử import lớn.
3. GitHub API có thể không truy cập được từ localhost; Dashboard có fallback local commit gần nhất.

## PM-edit log

| # | File/section | Loại sửa | Lý do | Ảnh hưởng estimate |
|---:|---|---|---|---:|
| 1 | Decision log / Traceability | Process | Bổ sung quy tắc map commit vào artifact | +0.5h |
| 2 | Known gaps | Telemetry | Ghi rõ fallback khi GitHub API không truy cập được | +0.25h |

## Telemetry

Tool: Codex · Thời gian người thật: 0.5h · Vòng lặp: 2 · Rework: 1 · PM-edit: 6.
