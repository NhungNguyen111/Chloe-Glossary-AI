# PM AI Bootcamp — Bảng thuật ngữ thống nhất (Glossary)

> **Mục đích:** 1 nơi duy nhất tra cứu thuật ngữ xuyên suốt chương trình.
> Cột **"Ngành gọi là"** giúp PM giao tiếp với đối tác quốc tế / tài liệu ngoài FPT.
> Mọi tài liệu khác trỏ về đây thay vì có glossary riêng.
> **Quy ước:** lần đầu dùng thuật ngữ nội bộ trong tài liệu, viết dạng **"Nén (= Productivity Ratio ngành)"** — lần sau chỉ ghi "Nén".

---

## Governance & Tự chủ AI

| Thuật ngữ chương trình | Ngành gọi là | Định nghĩa |
|---|---|---|
| **L0–L5** (Thang ủy quyền AI) | Autonomy Levels (tương tự SAE J3016 trong automotive) | 6 nấc tự chủ AI: L0 Observe → L1 Draft → L2 Recommend → L3 Execute (bounded) → L4 Operate workflow → L5 Restricted. Nguồn: FPT CASAN Bible §6. |
| **Leash A / A+** | Standard / Elevated autonomy | 2 nấc vận hành hàng ngày cắt từ L0–L5: **A ≈ L3** (vùng an toàn, AI tới bản nháp); **A+ ≈ L4** (vùng rủi ro, bắt buộc người duyệt). Không phải khung riêng — cùng trục với L0–L5. |
| **Fail-closed gate** | Fail-closed ✓ (chuẩn security / safety engineering) | Cổng kiểm mặc định **đóng**: không xác minh được → chặn, không "tạm cho qua". |
| **BUILT-flagged — chờ duyệt** | Gated release / Approval gate | AI làm xong nhưng **không tự release**. Việc rủi ro dừng ở "đã build, chờ người duyệt". |
| **Hard-stop** | Hard-stop ✓ (chuẩn safety engineering) | Dừng khẩn khi spec mâu thuẫn / mơ hồ / vi phạm ràng buộc. AI dừng & hỏi = tốt, không phải lỗi. |
| **Rubber-stamping** | Rubber-stamping ✓ (audit / governance) | Duyệt bừa output AI mà không thực sự kiểm — failure mode nguy nhất của PM AI-native. |
| **Human-in-the-loop (HITL)** | Human-in-the-loop ✓ | Cơ chế người xen giữa vòng lặp AI để phán xử / duyệt / chặn. |
| **Harness** | AI Toolchain / Agent Infrastructure | Bộ đồ nghề kỹ thuật lắp quanh model (context · tool · kiểm định · bảo mật · điều phối). Tầng kỹ sư, PM không thao tác. ⚠️ Ngành dùng "harness" phổ biến cho **test harness** (khung chạy test) — khác nghĩa. |

## Quy trình & Phương pháp

| Thuật ngữ | Ngành gọi là | Định nghĩa |
|---|---|---|
| **SDLC** | Software Development Life Cycle ✓ | Vòng đời phát triển phần mềm. |
| **WBS** | Work Breakdown Structure ✓ (PMBOK) | Cây phân rã công việc thành đơn vị nhỏ quản lý được. |
| **Rolling-Wave Planning** | Rolling-Wave ✓ (PMBOK) | Lập kế hoạch cuốn chiếu: việc gần bẻ sâu, việc xa để thô — bẻ dần khi tới. |
| **Walking Skeleton** | Walking Skeleton ✓ (Alistair Cockburn, Crystal Clear) | Lát cắt dọc mỏng nhất chạy end-to-end xuyên mọi tầng hệ thống. |
| **DoR** | Definition of Ready ✓ (Scrum / Agile) | Điều kiện đủ để một việc được vào build. |
| **Grain** (task / feature / epic) | Work Item hierarchy ✓ | Độ mịn: task (nhỏ, ~0.5–2 ngày) → feature → epic (lớn). |
| **Module Map / Layer 0** | Component Diagram + Foundation Layer | Bản đồ module hệ thống; Layer 0 = móng nền tảng dùng chung (auth, data model, phân quyền, gateway). |
| **Móng ẩn / bề mặt** | Foundation vs Feature layer | Phần nền không nhìn thấy (auth, schema, gateway) phải làm trước; phần người dùng thấy làm sau. |
| **Vòng 7 nhịp** | Plan-Do-Check-Act mở rộng cho AI delegation | Context → Plan → Delegate → Execute → Gate → Log → Iterate — vòng lặp orchestrator chuẩn. |

## Artifacts & Tài liệu

| Thuật ngữ | Ngành gọi là | Định nghĩa |
|---|---|---|
| **SRS / SW Spec** | Software Requirements Specification ✓ (IEEE 830) | Tài liệu đặc tả yêu cầu phần mềm chi tiết. |
| **NFR** | Non-Functional Requirement ✓ | Yêu cầu phi chức năng: hiệu năng, bảo mật, khả dụng, responsive… |
| **AC** | Acceptance Criteria ✓ | Tiêu chí chấp nhận, thường viết Given/When/Then (Gherkin). |
| **ERD** | Entity–Relationship Diagram ✓ | Sơ đồ thực thể–quan hệ (data model). |
| **API contract** | API Contract / API Specification ✓ | Giao ước API: endpoint, HTTP method, input/output, mã lỗi. |
| **RTM** | Requirements Traceability Matrix ✓ (PMBOK / CMMI) | Ma trận truy vết: requirement ↔ thiết kế ↔ code ↔ test. |
| **Dev Book** | Decision Log / ADR (Architecture Decision Records — Michael Nygard) | Nhật ký "AI-sai → người-sửa" + mức L + lý do + cổng chặn — bằng chứng người HIỂU, không rubber-stamp. |

## Kiểm thử

| Thuật ngữ | Ngành gọi là | Định nghĩa |
|---|---|---|
| **SIT** | System Integration Testing ✓ | Kiểm thử tích hợp hệ thống. |
| **UAT** | User Acceptance Testing ✓ | Kiểm thử nghiệm thu người dùng. |

## Metrics & Telemetry

| Thuật ngữ | Ngành gọi là | Định nghĩa |
|---|---|---|
| **Telemetry** | Telemetry / Observability Metrics ✓ | Số liệu đo việc làm: giờ thật, lần sửa AI, token, cost. |
| **Nén (Compression)** | Productivity Ratio / Effort Multiplier (benchmarking) | (Giờ truyền thống ước cho cùng khối lượng) ÷ (Giờ người thật) — chỉ số đòn bẩy AI quan trọng nhất. |
| **Hiệu quả token** | Token Efficiency / Cost Efficiency | (MD quy đổi giao được) ÷ (Token tiêu thụ, triệu). |
| **est → reconcile** | Estimate-then-Reconcile (time tracking practice) | Ghi token/effort dạng ước tính trước, cuối kỳ đối soát với số thật. |
| **AI Adoption** | AI Adoption Rate ✓ | (Số task có dùng AI ÷ tổng task) × 100%. |
| **Rework Rate** | Rework Rate ✓ | (Artefact phải làm lại ÷ tổng) × 100%. |

## Khái niệm chương trình (nội bộ FPT)

| Thuật ngữ | Ngành gọi là | Định nghĩa |
|---|---|---|
| **CASAN (Cấp 1–5)** | AI Maturity Model (tương tự Gartner 5-level AI Maturity) | Khung trưởng thành AI nội bộ FPT: Cấp 1 Curious → Cấp 2 Augmented → Cấp 3 Standard → Cấp 4 Automated → Cấp 5 Native. Nguồn: CASAN Bible §1. |
| **Customer Zero** | Dogfooding (Microsoft/Google: "eat your own dog food") | Tự build + tự dùng sản phẩm mình tạo trước khi triển khai cho người khác. ⚠️ Ngành SaaS đôi khi dùng "Customer Zero" cho khách hàng đầu tiên bên ngoài — FPT dùng theo nghĩa tự dùng nội bộ. |
| **Orchestrator** | AI Coding Agent / AI IDE Agent | Dùng AI tool không như chatbot hỏi–đáp mà như bộ điều phối: giao mục tiêu → nó tự phân rã, đọc/ghi file, chạy lệnh, kiểm tra — người chỉ huy + phán xử. Áp dụng được cho Claude Code, Codex, Cursor, hay bất kỳ AI coding agent nào. |
| **Cổng hiểu** | Comprehension Gate (chương trình tự đặt) | Checkpoint ở mỗi bước Capstone: buộc giải thích lại bằng lời + bắt ≥1 lỗi AI — chống rubber-stamp. |

---

> **Bảo trì:** khi thêm thuật ngữ mới vào bất kỳ tài liệu nào, thêm luôn vào đây. Nếu thuật ngữ có tương đương ngành — ghi, để PM không bị "khoá" trong từ vựng nội bộ.
