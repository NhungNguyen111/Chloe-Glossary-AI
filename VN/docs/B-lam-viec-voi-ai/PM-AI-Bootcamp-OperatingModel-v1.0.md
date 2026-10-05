# AI-Native PM — Operating Model (1 trang phát tay)

> **Dùng khi nào:** dán cạnh màn hình, mở ra mỗi khi giao việc cho AI. Trả lời đúng 1 câu: *"Việc này AI được tự làm tới đâu, ai gỡ chốt, cổng nào gác?"*
> Nguồn: PM-AI-Bootcamp Program v2.0 · FPT CASAN Bible §6 (thang ủy quyền) + §20.3 (anti-pattern). Ngôn ngữ: con người **giữ mục tiêu & trách nhiệm**, AI là **lực thực thi được ủy quyền** — không phải chủ thể thay người.
> **Thuật ngữ:** tra cứu đầy đủ + mapping sang ngành quốc tế tại `docs/GLOSSARY.md`.

---

## ① Thang ủy quyền AI — L0→L5 *(AI được tự làm tới đâu)*

| Mức | Tên | AI được làm | Ai quyết |
|---|---|---|---|
| **L0** | Observe | Quan sát / tóm tắt, **không đổi gì** *(ngành: Autonomy Level 0)* | — |
| **L1** | Draft | Nháp, **người duyệt 100%** | Người |
| **L2** | Recommend | Đề xuất phương án, người chọn | Người |
| **L3** | Execute (bounded, low-risk) | Tự thực thi tác vụ **rủi ro thấp** trong giới hạn | AI chạy · người **spot-check** |
| **L4** | Operate workflow | Vận hành **cả luồng** có hàng rào + audit + xử lý ngoại lệ | AI tự đóng phần "xanh" · người duyệt **ngoại lệ / hazard** |
| **L5** | Restricted / high-risk | Tự chủ cao ở vùng phức tạp | **Cố ý CHƯA cấp** — luôn chờ người |

**Quy tắc gán mức:** việc chỉ-đọc → L0–L2 thoải mái; việc **có quyền ghi / đổi hệ thống / chạm dữ liệu nhạy cảm** → tối đa L3, hazard phải lên L4 *có kiểm soát*. Không bao giờ nhảy lên L5.

---

## ② Dây cương tự hành — Autonomy Leash *(ai gỡ chốt, dừng ở đâu)*

> **Leash A/A+ = 2 nấc vận hành hằng ngày cắt ra từ thang L0–L5 ở khối ① — KHÔNG phải khung mới.** Hằng ngày chỉ cần nhớ 2 nấc này.

| Leash | = mức | Khi nào | AI được tới đâu | Tự đóng (Done)? |
|---|---|---|---|---|
| **A** *(= Standard autonomy)* | **≈ L3** | Việc trong vùng an toàn, **không hazard** | Code + test + verify → **bản nháp / PR dry-run** | ✅ Khi cổng verify **xanh** |
| **A+** *(= Elevated autonomy)* | **≈ L4** | Việc **chạm rủi ro cao** (dữ liệu nhạy cảm, phân quyền, release) | Như A **+ bắt buộc** cổng bảo mật thật + cờ cho phép hazard | ✅ Chỉ khi cổng bảo mật **xanh** |
| **(L5)** | L5 | Vùng phức tạp / rủi ro rất cao | **Không cấp** | ❌ Luôn chờ người |

### 🔒 3 luật cứng — giữ nguyên mọi lúc, dạy như phản xạ
1. 🚫 AI **không tự push / merge / release** — mọi thứ dừng ở bản nháp **chờ duyệt**.
2. 🚫 AI **không đụng bí mật/khoá** (`.env`, credential, IP, dữ liệu khách vào prompt).
3. 🚫 Khi **đang hard-stop / chờ duyệt** → AI **không tự đánh dấu Done**.

---

## ③ Ba cơ chế Governance *(biến khẩu hiệu thành quy trình kiểm được)*

| Cơ chế | Nguyên tắc | PM áp dụng |
|---|---|---|
| **Cổng fail-closed** *(chuẩn security engineering)* | Output AI chỉ dùng khi cổng kiểm tự động **XANH**. *Không xác minh được = CHẶN* (mặc định đóng), **không** "tạm cho qua". | Định nghĩa cổng tối thiểu cho artefact quan trọng (truy vết được + có người review). Thiếu bằng chứng ⇒ **chưa được dùng**. |
| **BUILT-flagged — chờ duyệt** *(= Gated Release)* | AI **làm xong nhưng KHÔNG tự release**. Việc rủi ro cao dừng ở "đã build, cổng xanh, **chờ người duyệt**". | Tách rõ *"AI làm xong" ≠ "được phát hành"*. Người **đích thân duyệt** phần hazard; phần an toàn AI tự đóng. |
| **Hard-stop khi mâu thuẫn** *(chuẩn safety engineering)* | Spec **mâu thuẫn / mơ hồ** → AI **DỪNG & phơi bày**, tuyệt đối **không tự đoán** cho trôi việc. | Coi *"AI dừng và hỏi"* là **tín hiệu tốt**, không phải lỗi. PM phân xử xong mới mở chốt. |

**Truy vết (traceability):** mỗi yêu cầu quan trọng phải truy được **yêu cầu ↔ việc ↔ kiểm thử**. Đụng requirement là rà lại mạch — đứt mạch phải báo to.

---

## 🧭 Phản xạ giao việc cho AI — hỏi 4 câu trước khi bấm "chạy"

> **1.** Việc này quyền tác động tới đâu? *(chỉ-đọc hay có-quyền-ghi/đổi hệ thống?)*
> **2.** ⇒ Gán **mức L0–L5** nào? · Leash **A hay A+**?
> **3.** **Cổng fail-closed** nào gác output này?
> **4.** Phần hazard ai **đích thân duyệt** trước khi release? *(đừng rubber-stamp — chấm phán đoán của người, không phải "AI trả lời hay")*

---

> ⚠️ **Đừng nhầm Leash với Harness.** *Leash / L0–L5* = **độ tự chủ** (AI được tự chạy xa tới đâu — PM chỉnh hằng ngày). *Harness* = **bộ đồ nghề kỹ thuật** lắp quanh model (ngữ cảnh·công cụ·kiểm định·bảo mật·quản trị·AgentOps·điều phối — tầng kỹ sư, PM không thao tác). Ẩn dụ ngựa kéo xe: **Harness = bộ yên cương** (trang bị) · **Leash = sợi dây dắt** (đi xa bao nhiêu). Hai trục khác nhau.

---
*PM-AI-Bootcamp v2.0 — Operating Model 1-page · 2026-08-24 · Phát kèm Phase 2 (M5 + M6).*
