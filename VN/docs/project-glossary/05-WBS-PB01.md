# WBS-PB01 — Work Breakdown Structure & Rolling Wave

**Phiên bản:** 1.1 · **Owner:** PM · **Trạng thái:** PM Reviewed

## WBS cấp 1 — Chloe's Glossary AI

Mỗi work package có đầu ra kiểm chứng được và chỉ chuyển trạng thái khi dependency trước đó đã hoàn tất.

### Wave 1 — Foundation

| ID | Work package | Deliverable | Dependency |
|---|---|---|---|
| 1.1 | Scope | Project Scope đã chốt | — |
| 1.2 | Specification | User story, NFR, acceptance criteria | 1.1 |
| 1.3 | Module Map | Module, backlog slice và boundary | 1.1, 1.2 |
| 1.4 | Architecture | Static-first runtime và data contract | 1.2, 1.3 |

### Wave 2 — Product Build

| ID | Work package | Deliverable | Dependency |
|---|---|---|---|
| 2.1 | Library | Search, filter, topic và term list | 1.4 |
| 2.2 | Term CRUD | Add, edit, delete, detail và validation | 2.1 |
| 2.3 | Review & Test | Flashcard, test question và test result | 2.2 |
| 2.4 | Data I/O | Import/export JSON/CSV và persistence | 2.2 |
| 2.5 | Preferences | Settings, theme và localStorage state | 2.1, 2.2 |

### Wave 3 — Operate & Quality

| ID | Work package | Deliverable | Dependency |
|---|---|---|---|
| 3.1 | Developer Dashboard | KPI, 10 artefacts, detail và PM edit sync | 1.1, 1.2, 2.1–2.5 |
| 3.2 | Estimate & Risk | Estimate, trade-off và risk register | 1.3, 2.1–2.5 |
| 3.3 | SIT/UAT Gate | Scenario test, evidence và release decision | 3.1, 3.2 |
| 3.4 | Telemetry | Compression, rework, AI adoption và PM edits | 3.1, 3.3 |

## Acceptance checklist

- Mỗi package có output cụ thể và trace được về artefact tương ứng.
- Package chỉ được đánh dấu Done khi dependency trước đó đã hoàn tất.
- Luồng tối thiểu chạy được: tìm term → xem detail → cập nhật trạng thái → refresh vẫn giữ dữ liệu.
- Luồng test chạy được: mở Ôn tập → Bắt đầu Test → nộp bài → xem kết quả từng câu.
- Release gate có SIT/UAT evidence và Dashboard phản ánh đúng trạng thái.

## Milestone

| Mốc | Exit criteria |
|---|---|
| M1 Foundation Ready | 1.1–1.4 hoàn tất |
| M2 MVP Usable | 2.1–2.5 chạy end-to-end |
| M3 Release Ready | 3.1–3.4 có evidence, không còn P0/P1 chưa xử lý |

## PM-edit log

| # | File/section | Loại sửa | Lý do | Ảnh hưởng estimate |
|---:|---|---|---|---:|
| 1 | WBS toàn tài liệu | Structure | Tách work package theo wave, dependency và acceptance | +1.5h |

## Telemetry

Tool: Codex · Thời gian người thật: 0.5h · Vòng lặp: 2 · Rework: 1 · PM-edit: 3.
