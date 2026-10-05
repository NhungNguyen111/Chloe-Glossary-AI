# MODULEMAP-PB01 — Bản đồ module và backlog

## Module map

| Module | Trách nhiệm | Phụ thuộc |
|---|---|---|
| M1 Shell/UI | topbar, sidebar, responsive layout | styles.css |
| M2 Library | list, search, sort, filter, counts | M1, data model |
| M3 Term CRUD | form, detail dialog, validation | M2, localStorage |
| M4 Review | flashcard, queue, mastered | M2, M3 |
| M5 Data I/O | import JSON/CSV, export JSON/CSV | M3 |
| M6 Preferences | theme, settings | M1, localStorage |
| M7 Developer dashboard | Check Detail, chỉnh status, metrics, telemetry | artefact markdown, localStorage |

## Backlog slice MVP

1. Baseline UI + data model.
2. Search/filter/sort và domain counts.
3. Dialog thêm/sửa/xóa + trạng thái.
4. Review flow + persistence.
5. Import/export + error states.
6. Dashboard developer + links artefact.

## Mối nối ẩn cần chốt

- Mỗi `term` cần `id` ổn định để favorite/edit/delete không phụ thuộc vị trí.
- `updated_at` dùng cho sort “Mới cập nhật”.
- Import không overwrite dữ liệu cũ trong MVP; trùng term sẽ skip.
- Dashboard là công cụ nội bộ, không đưa vào navigation người dùng.
- PM có thể chỉnh trạng thái từng artifact trong `Check Detail`; thay đổi được lưu local và phản ánh lại danh sách, progress, filter và chart.

## Cập nhật hiện tại

- M4 Review mở rộng từ flashcard sang lịch sử học tập, phân tích năng lực, bài test và thống kê kết quả.
- M2 Library quản lý thêm 15 term Automotive và đồng bộ pool term cho M4.

## Telemetry

Tool: Codex · Thời gian người thật: 0.4h · Vòng lặp: 1 · Rework: 0 · PM-edit: 1.
