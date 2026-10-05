# EST-PB01 — Estimation cho website Từ điển IT

**Phiên bản:** 1.1 · **Ngày cập nhật:** 05/10/2026 · **Owner:** PM

## 1. Phạm vi được estimate

Website hiện có gồm `VN/glossary/index.html`, `styles.css`, `app.js` và dashboard developer. Estimate này tính effort để hoàn thiện và kiểm thử MVP:

- tra cứu, tìm kiếm, sort, filter và domain count;
- thêm/sửa/xóa term, detail dialog và trạng thái học;
- flashcard ôn tập;
- import/export JSON/CSV và lưu `localStorage`;
- dashboard status, telemetry và quality gate;
- SIT/UAT, accessibility cơ bản và polish responsive.

Không estimate backend, login, đồng bộ cloud, audio pronunciation hoặc GPT automation.

## 2. Estimate 3-point

Đơn vị: **giờ người**. Công thức PERT: `(O + 4M + P) / 6`.

| WBS | Work package | O | M | P | PERT |
|---|---|---:|---:|---:|---:|
| 1 | Scope, spec và acceptance criteria | 2.0 | 3.0 | 4.5 | 3.08 |
| 2 | Data model, module map và architecture | 1.5 | 2.5 | 4.0 | 2.58 |
| 3 | Library: list, search, sort, filter | 2.5 | 4.0 | 6.0 | 4.08 |
| 4 | CRUD: form, detail, edit, delete, status | 2.0 | 3.5 | 5.0 | 3.50 |
| 5 | Review: flashcard, shuffle, mastered | 1.5 | 2.5 | 4.0 | 2.58 |
| 6 | Import/export JSON/CSV + validation | 1.5 | 2.5 | 4.5 | 2.67 |
| 7 | Developer dashboard + KPI telemetry | 2.0 | 3.0 | 5.0 | 3.17 |
| 8 | SIT/UAT, accessibility và responsive polish | 2.0 | 3.0 | 5.0 | 3.17 |
| 9 | PM review, quyết định và cập nhật log | 1.0 | 2.0 | 3.0 | 2.00 |
| **Tổng base** |  | **15.0** | **26.0** | **41.0** | **26.83** |

## 3. Planning estimate

| Thành phần | Giờ |
|---|---:|
| PERT base | 26.83 |
| Contingency 15% cho encoding, dữ liệu bẩn, browser khác nhau | 4.02 |
| **Budget nên dùng để lập kế hoạch** | **30.85 giờ ≈ 31 giờ** |

Với lịch 2 giờ/ngày, budget tương đương khoảng **16 phiên làm việc**. Mốc nên dùng:

| Wave | Nội dung | Budget |
|---|---|---:|
| Wave 1 — Foundation | scope/spec/architecture | 6h |
| Wave 2 — Core build | library/CRUD/review/I/O | 15h |
| Wave 3 — Quality | dashboard, SIT/UAT, PM review | 6h |
| Buffer | lỗi phát sinh và rework | 4h |
| **Tổng** |  | **31h** |

## 4. Phân bổ effort PM và AI

| Loại effort | Dự kiến | Nội dung |
|---|---:|---|
| AI draft/implementation | 15.0h | tạo artefact, code, test draft, dashboard |
| PM review/decision/edit | 7.0h | chốt scope, bắt lỗi, sửa output, duyệt gate |
| Browser verification/UAT | 4.8h | chạy flow thật, accessibility, responsive |
| Buffer rework | 4.2h | encoding, import edge cases, polish |
| **Tổng kế hoạch** | **31.0h** |  |

PM-edit không bị xem là effort “ngoài kế hoạch”; nó là một work package bắt buộc để chứng minh output AI đã được phán xử.

## 5. Quy tắc cập nhật PM-edit — bắt buộc

Mỗi lần PM sửa output AI, phải ghi **ngay trong artefact vừa sửa** theo mẫu:

```text
PM-edit #N · YYYY-MM-DD HH:mm
- File/section: <đường dẫn và heading hoặc dòng>
- Loại sửa: <scope | số liệu | logic | wording | UI | test>
- Lý do: <vì sao output AI chưa đạt>
- Ảnh hưởng estimate: <+/- giờ hoặc 0>
- Người thực hiện: PM
```

### PM-edit log của artefact này

| # | Thời điểm | File/section | Loại sửa | Lý do | Ảnh hưởng |
|---:|---|---|---|---|---:|
| 0 | 05/10/2026 | `06-EST-PB01.md` baseline | — | AI tạo bản baseline; PM chưa sửa | 0h |

**Quy ước từ đây:** khi Codex chỉnh artefact theo yêu cầu của PM, Codex phải tăng số `PM-edit`, ghi file/section, lý do và ảnh hưởng estimate trong cùng lượt chỉnh sửa. Không ghi PM-edit = artefact chưa hoàn tất.

Lưu ý kỹ thuật: Codex không thể tự nhìn thấy các chỉnh sửa bạn tự gõ trong VS Code khi không có lượt làm việc mới. Nếu bạn muốn tự động bắt cả các chỉnh sửa đó, bước tiếp theo cần thêm Git/VS Code hook để ghi diff vào log.

## 6. Công thức KPI

- **Nén năng suất** = giờ truyền thống ước tính / giờ người thật.
- **Variance** = giờ thật − giờ kế hoạch.
- **Rework rate** = số vòng rework / tổng vòng lặp.
- **PM-edit rate** = số artefact có PM-edit / tổng artefact.
- **Estimate accuracy** = `1 − |actual − estimate| / estimate`.

Không điền “giờ thật” hoặc “nén năng suất” cho đến khi có log thực tế; dashboard phải phân biệt estimate với actual.

## Telemetry

Tool: Codex · Token(est): chưa đo tự động · Thời gian người thật: 0.5h · Vòng lặp: 1 · Rework: 1 · PM-edit: 0 · Estimate base: 26.83h · Planning budget: 31h.
