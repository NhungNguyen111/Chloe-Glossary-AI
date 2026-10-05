# EST-PB01 — Estimate Baseline

**Phiên bản:** 1.2 · **Ngày cập nhật:** 05/10/2026 · **Owner:** PM · **Trạng thái:** Done

## Baseline hiện hành

Estimate được đồng bộ với WBS-PB01 phiên bản 1.2. Quy ước tính là **1 Man-Month = 160 giờ** và `MM = Hours ÷ 160`.

| Work Package | Hours | MM |
|---|---:|---:|
| Scope & Spec | 5h | 0.031 |
| Data Model & Architecture | 5h | 0.031 |
| Library / Asset Setup | 4h | 0.025 |
| CRUD Features | 8h | 0.050 |
| Dashboard & Analytics | 8h | 0.050 |
| Import / Export | 5h | 0.031 |
| Review & Refactoring | 4h | 0.025 |
| SIT / UAT | 6h | 0.038 |
| PM / Documentation / Logs | 6h | 0.038 |
| Git / Deploy / Environment Setup | 8h | 0.050 |
| Learning & Research Buffer | 10h | 0.063 |
| Rework Buffer | 7h | 0.044 |
| **TOTAL** | **76h** | **0.475 MM** |

## Phân bổ theo wave

| Wave | Phạm vi | Hours |
|---|---|---:|
| Wave 1 — Foundation | Scope & Spec; Data Model & Architecture; Library / Asset Setup | 14h |
| Wave 2 — Product Build | CRUD; Dashboard; Import / Export; Review & Refactoring | 25h |
| Wave 3 — Quality & Delivery | SIT / UAT; PM / Documentation / Logs; Git / Deploy / Environment Setup | 20h |
| Buffer | Learning & Research; Rework | 17h |
| **TOTAL** |  | **76h** |

## Phân biệt estimate và actual

76h/0.475 MM là baseline kế hoạch, không phải số giờ thực tế. Dashboard chỉ hiển thị số thực tế khi có telemetry được ghi nhận; không tự suy ra actual từ estimate. Rework Buffer là phần dự phòng kế hoạch, không đồng nghĩa với số vòng rework đã xảy ra.

## PM-edit log

| # | Thời điểm | File/section | Loại sửa | Lý do | Ảnh hưởng |
|---:|---|---|---|---|---:|
| 0 | 05/10/2026 | `06-EST-PB01.md` baseline | — | AI tạo baseline ban đầu | 0h |
| 1 | 05/10/2026 | Baseline estimate | Structure + số liệu | Đồng bộ theo bảng PM cung cấp và WBS 12 package | +49.17h |

## Telemetry

Tool: Codex · Thời gian người thật: chưa có log đầy đủ · Vòng lặp: chưa dùng để suy ra rework · Rework: chưa có log riêng · PM-edit: theo GitHub Edit Log.
