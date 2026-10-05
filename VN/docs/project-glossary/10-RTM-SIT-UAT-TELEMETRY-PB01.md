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
| Traditional hours | 40 | estimate nếu không có AI | EST-PB01 |
| Actual hours | 12 | giờ người thật | weekly log |
| Productivity compression | 3.33× | 40 / 12 | dashboard |
| AI adoption | 78% | task có AI hỗ trợ / tổng task | dev log |
| Rework rate | 25% | vòng rework / tổng vòng | dev log |
| PM-edit rate | 30% | PM-edit / artefact | artefact telemetry |

> Đây là snapshot minh họa để dashboard có thể chạy ngay; PM nên thay bằng số thực tế trước khi nộp.

## 4. Weekly next actions

- Chạy lại SIT trên Chrome và Edge.
- Export backup trước khi test import file lớn.
- Ghi actual hours, token(est), vòng lặp và PM-edit mỗi lần cập nhật artefact.
- Đóng gap automated regression test nếu MVP được mở rộng.

## Telemetry

## PM-edit log

| # | File/section | Loại sửa | Lý do | Ảnh hưởng estimate |
|---:|---|---|---|---:|
| 1 | Requirements Traceability / SIT-UAT | Traceability | Bổ sung test, kết quả và thống kê học tập | +1.0h |

## Telemetry

Tool: Codex · Thời gian người thật: 0.8h · Vòng lặp: 2 · Rework: 1 · PM-edit: 4.
