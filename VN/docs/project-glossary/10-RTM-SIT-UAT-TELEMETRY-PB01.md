# RTM + SIT/UAT + TELEMETRY-PB01

## 1. Requirements Traceability Matrix

| Req | Module | Artefact | Test |
|---|---|---|---|
| US-01 | M2 Library | SPEC, ARCH | SIT-01 |
| US-02 | M2 Library | SPEC | SIT-02 |
| US-03/04 | M3 CRUD | SPEC, DOR | SIT-03/04 |
| US-05 | M4 Review | SPEC, WBS | SIT-05 |
| US-06/07 | M5 I/O | SPEC, RISK | SIT-06/07 |
| US-08 | M7 Dashboard | SCOPE, EST | SIT-08 |
| US-09/10 | M4 Review & Test | SPEC, WBS | SIT-09/10 |
| US-11 | M7 Dashboard | SPEC, EST | SIT-11 |

## 2. SIT / UAT records

| ID | Scenario | Expected | Evidence/status |
|---|---|---|---|
| SIT-01 | Gõ từ khóa trong search | list lọc tức thì | PASS |
| SIT-02 | Click Learning | chỉ hiện term learning | PASS |
| SIT-03 | Thêm term thiếu meaning | form báo lỗi | PASS |
| SIT-04 | Đổi status rồi reload | status được giữ | PASS |
| SIT-12 | Mở `Check Detail`, chuyển TODO → Review → Done | status, KPI, progress, filter và chart cập nhật đúng | PASS |
| SIT-13 | Reload Dashboard sau khi chỉnh status | status artifact vẫn được giữ từ localStorage | PASS |
| SIT-14 | Bấm Reset Dashboard | status đã lưu bị xóa và trở về baseline | PASS |
| SIT-05 | Lật/chuyển/nhớ flashcard | queue cập nhật | PASS |
| SIT-06 | Export JSON/CSV | file tải hợp lệ | PASS |
| SIT-07 | Import record trùng | skip, không overwrite | PASS |
| SIT-08 | Mở dashboard, đổi filter | KPI/chart cập nhật | PASS |
| SIT-09 | Mở Ôn tập và bắt đầu Test | đề 10–15 câu lấy từ kho Thư viện | PASS |
| SIT-10 | Nộp bài test | đúng/tổng và đáp án từng câu hiển thị, sai đỏ/đúng xanh | PASS |
| SIT-11 | Xem lịch sử, phân tích và thống kê | ngày giờ, thời lượng, xu hướng sai và biểu đồ điểm được lưu | PASS |

**UAT gate:** người dùng có thể hoàn thành flow “tìm → hiểu → đánh dấu → ôn” mà không cần hướng dẫn trực tiếp. Kết quả baseline: PASS có điều kiện, cần tiếp tục theo dõi accessibility và backup.

## 3. Telemetry snapshot

| Metric | Giá trị mẫu | Công thức | Nguồn |
|---|---:|---|---|
| Traditional hours | — | Chưa có log telemetry thực tế | Chưa ghi nhận |
| Actual hours | — | Chưa có weekly log | Chưa ghi nhận |
| Productivity compression | — | Chỉ tính khi có traditional và actual hours | Chưa ghi nhận |
| AI adoption | — | Chưa có task log đầy đủ | Chưa ghi nhận |
| Rework rate | — | Chưa có log vòng lặp/rework | Chưa ghi nhận |
| PM-edit rate | — | Chưa có tracker artifact độc lập; PM Edit tổng lấy từ commit | GitHub commit log |
| Tổng vòng lặp đã ghi nhận | 16 | Tổng các dòng Vòng lặp trong 10 artifact Markdown | SCOPE, SPEC, MODULEMAP, ARCH, WBS, EST, RISK, DOR, DEVBOOK, RTM |

> Chưa có đủ telemetry thực tế để tính các chỉ số trên. Dashboard phải hiển thị `—` cho đến khi PM ghi nhận log có nguồn.

## 4. Weekly next actions

- Chạy lại SIT trên Chrome và Edge.
- Export backup trước khi test import file lớn.
- Ghi actual hours, token(est), vòng lặp và PM-edit mỗi lần cập nhật artefact.
- Đóng gap automated regression test nếu MVP được mở rộng.

## PM-edit log

| # | File/section | Loại sửa | Lý do | Ảnh hưởng estimate |
|---:|---|---|---|---:|
| 1 | Requirements Traceability / SIT-UAT | Traceability | Bổ sung test, kết quả và thống kê học tập | +1.0h |

## Telemetry

Tool: Codex · Thời gian người thật: 0.8h · Vòng lặp: 2 · Rework: 1 · PM-edit: 4.
