# WBS-PB01 — Work Breakdown Structure & Rolling Wave

**Phiên bản:** 1.2 · **Owner:** PM · **Trạng thái:** Done · **Ngày cập nhật:** 05/10/2026

## WBS cấp 1 — Chloe's Glossary AI

WBS hiện gồm 12 work package. Effort được lấy từ bảng estimate mới: **76 giờ = 0.475 Man-Month**, theo quy ước **160 giờ = 1 Man-Month**.

| ID | Work Package | Deliverable | Hours | MM |
|---|---|---|---:|---:|
| 1 | Scope & Spec | SCOPE, SPEC và acceptance criteria | 5h | 0.031 |
| 2 | Data Model & Architecture | MODULEMAP, ARCH và data contract | 5h | 0.031 |
| 3 | Library / Asset Setup | Library UI, topic và 15 term Automotive | 4h | 0.025 |
| 4 | CRUD Features | Add, edit, delete, detail và validation | 8h | 0.050 |
| 5 | Dashboard & Analytics | Dashboard, KPI, GitHub edit log và analytics | 8h | 0.050 |
| 6 | Import / Export | JSON/CSV, validation và persistence | 5h | 0.031 |
| 7 | Review & Refactoring | Flashcard, test flow, result và UI refactor | 4h | 0.025 |
| 8 | SIT / UAT | Scenario test, evidence và release gate | 6h | 0.038 |
| 9 | PM / Documentation / Logs | PM review, Markdown artifacts và telemetry logs | 6h | 0.038 |
| 10 | Git / Deploy / Environment Setup | GitHub sync, local server và environment setup | 8h | 0.050 |
| 11 | Learning & Research Buffer | Research, clarification và learning time | 10h | 0.063 |
| 12 | Rework Buffer | Dự phòng các vòng sửa lại đã được ghi nhận | 7h | 0.044 |
| **TOTAL** |  |  | **76h** | **0.475 MM** |

## Rolling wave

- **Wave 1 — Foundation:** package 1–3, chốt scope, architecture và thư viện.
- **Wave 2 — Product Build:** package 4–7, hoàn thiện CRUD, dashboard, I/O và Ôn tập.
- **Wave 3 — Quality & Delivery:** package 8–10, kiểm thử, tài liệu, Git và deploy.
- **Buffer:** package 11–12, dùng cho learning và rework có evidence.

## Acceptance checklist

- Mỗi package có output, Hours, MM và deliverable cụ thể.
- Luồng tối thiểu chạy được: tìm term → xem detail → cập nhật trạng thái → refresh vẫn giữ dữ liệu.
- Luồng test chạy được: mở Ôn tập → Bắt đầu Test → nộp bài → xem kết quả từng câu.
- Dashboard hiển thị đúng 10 artifact, PM Edit theo commit và trạng thái Done.
- SIT/UAT có evidence; Git/Deploy mở được đúng local project.

## Milestone

| Mốc | Exit criteria |
|---|---|
| M1 Foundation Ready | Package 1–3 hoàn tất |
| M2 MVP Usable | Package 4–7 chạy end-to-end |
| M3 Release Ready | Package 8–10 có evidence và WBS được đánh dấu Done |
| M4 Buffer Closed | Learning/Rework được ghi log, không còn P0/P1 |

## PM-edit log

| # | File/section | Loại sửa | Lý do | Ảnh hưởng estimate |
|---:|---|---|---|---:|
| 1 | WBS toàn tài liệu | Structure + Estimate | Cập nhật từ 8/10 package sang 12 package và 76h/0.475 MM | +45.15h |

## Telemetry

Tool: Codex · Thời gian người thật: 0.5h · Vòng lặp: 2 · Rework: 1 · PM-edit: 4 · Total WBS: 76h · Man-Month: 0.475.
