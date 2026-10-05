# AIX FA 2026 — Trụ C: AI for People (Kế hoạch sơ bộ)

> **Vị trí trong khung AIX:** Trụ C = **AI for People (Enable)** — nền móng của 3 trụ. Đây là phần **đã build & đang chạy** (bộ PM-AI-Bootcamp), khác với Trụ A (AI for Delivery → margin) và Trụ B (AI for Customer → win rate) còn ở dạng khung.
> **Nguồn chi tiết:** `PM-AI-Bootcamp-Program-v1.0.md`, `-OperatingModel-v1.0.md`, `-ProjectBriefs-v1.0.md`, `-ClaudeCode-Orchestrator-Guide-v1.0.md`, 4 workbook (Common/BA/SA/Dev).
> **Trạng thái số liệu:** phần thưởng/ngân sách là *minh hoạ, chờ HR/BOD duyệt*. Lịch tuyệt đối (start date) chưa chốt.
> Bản: v1.0 · 2026-07-02

---

## 0. Vì sao Trụ C là nền cho Trụ A & B

Baseline tài chính FA 2026 (từ Financial Lookback) cho thấy điểm đau mà **chỉ con người được "AI-enable" mới gỡ được**:

- **Đòn bẩy Jr:Sr sập 0.79 → 0.44**, unit cost/MM **+10.7%** → cần junior làm được việc senior *nhờ AI*, không phải tuyển thêm senior.
- **COD chiếm 68.2% doanh thu** → muốn kéo xuống phải có lực lượng biết lái AI trong delivery thật, có đo đạc.
- FA đã tuyên ngôn **"price outcomes, not headcount"** và mục tiêu **Digital Worker (85% test-case tự động)** — nhưng đó là giả định *chưa có người vận hành & telemetry để biến thành margin thật*.

→ **Trụ C tạo ra lực lượng vận hành cho Trụ A/B.** KPI cốt lõi của Trụ C ("Nén" giờ, adoption, rework) chính là **leading indicator** của margin (Trụ A) và tốc độ/chất lượng đề xuất (Trụ B).

---

## 1. Mục tiêu & định vị

**Đào tạo lực lượng AI-Native Delivery** — chuyển PM/BA/SA/Dev từ người dùng AI lẻ tẻ thành **cặp chỉ huy (người + AI)** biết: lái AI build hệ thống thật, quản đội Human+AI, quản trị governance (human-in-the-loop), đo AI-productivity bằng telemetry, ra quyết định theo AI-economics.

**Đích maturity (thang CASAN 5 cấp của FPT):** đưa **toàn bộ học viên lên Cấp 2 (Augmented)** vững; nhóm nòng cốt chạm **Cấp 3–4**.

---

## 2. Đối tượng & quy mô

| Hạng mục | Con số |
|---|---|
| Đối tượng đợt đầu | **300 Project Manager** FPT Automotive |
| Track | **4 track:** PM · BA · SA · Dev (chung 60–70% core, swap workbook + deliverable theo nghề) |
| Điều kiện | Không cần biết code trước; bắt buộc **tự tay làm & chấp nhận vấp** |
| Triển khai | **4 wave × ~75 PM**, cách nhau ~2 tuần (để 1 Coach kịp giữ chuẩn) |

---

## 3. Cấu trúc chương trình — ~9 tuần, 3 phase

| Phase | Tên | Thời lượng | Format | Định nghĩa "Done" |
|---|---|---|---|---|
| **1** | AI Mindset | **1 ngày** | Workshop tập trung (~30 học viên/lớp) | CASAN self-assessment + chọn dự án pilot + viết AI commitment |
| **2** | Hands-on | **4 tuần** | Learning-by-doing, blended 30–40% vào việc thật; 2 buổi live/tuần | 10 assignment (T1–T10) **có telemetry** |
| **3** | Capstone "Build your Customer Zero" | **4 tuần** | Cặp (PM + AI) build 1 lát cắt dọc chạy được trên dự án thật (hoặc 1 trong 6 đề mẫu) | Hệ thống chạy + Dev Book + qua viva |

**Phase 2 — 8 module / 4 tuần:** W1 AI Foundation + Toolchain → W2 Project Workflow + Prompting → W3 Delegation + Governance → W4 Telemetry + Economics. Mỗi tuần gắn assignment trên dự án thật + showcase.

---

## 4. Nội dung lõi & năng lực (rubric 0–4)

**6 trụ năng lực** (chuẩn tốt nghiệp): C1 AI Literacy · C2 AI Delegation · C3 Workflow Design · C4 Governance & Risk · C5 Telemetry & Economics · C6 Outcome Leadership.

**Common core cho cả 4 track:** tư duy CASAN + thang uỷ quyền **L0–L5** + **Leash A/A+** + Delegation Matrix (Rủi ro × AI-doable) + Capstone.

**Khác biệt theo track (swap workbook):**
- **PM/Common:** WBS, Estimation, Risk, Test Strategy, Weekly Report, Dashboard.
- **BA:** Requirement + Story + Prototype + Backlog + Process Map → Delegation Map.
- **SA:** ADR + Tech Stack + NFR + Threat Model + Vertical Slice → Delegation Map.
- **Dev:** Code + Test + Harness/Agent → Delegation Map.

**Công cụ xuyên suốt:** Claude Code như **"Super Orchestrator"** — vòng lặp 7 bước: Context → Plan → Delegate → Execute → Gate/Verify → Log → Iterate.

---

## 5. Operating model & Governance

| Hạng mục | Cấu hình |
|---|---|
| Coach | 1 Coach giữ chuẩn ở 3 cổng tốt nghiệp; AI reviewer + peer-mentor là mentor mặc định |
| Hạ tầng | Tài khoản Claude Code đủ 300 PM + template repo dựng sẵn |
| Môi trường an toàn | 6 đề mẫu PB-01→PB-06 hoặc dự án thật (có tiêu chí bảo mật) |

**3 luật cứng (dạy như phản xạ):** ① AI không tự push/merge/release · ② AI không đụng bí mật/khoá (.env, credential, dữ liệu KH) · ③ Đang hard-stop/chờ duyệt → AI không tự đánh Done.

**3 cơ chế kiểm soát (quy trình, không khẩu hiệu):** Cổng **fail-closed** (mặc định đóng) · **BUILT-flagged** chờ người duyệt · **Hard-stop** khi spec mâu thuẫn.

---

## 6. Project-based learning — 6 đề mẫu

PB-01 Web bán hàng (★★) · PB-02 App đặt lịch phòng khám (★★) · PB-03 Quản lý kho nội bộ (★ dễ nhất) · PB-04 Dashboard BI (★★) · PB-05 App tích điểm (★★) · PB-06 AI tóm tắt/trích xuất hợp đồng (★★★ sát chủ đề). Mỗi đề có bối cảnh, MVP scope, NFR, tech stack, và 1–2 điểm mơ hồ cố ý để luyện **hard-stop**.

---

## 7. Tốt nghiệp & chứng chỉ

**3 cổng cứng (thiếu 1 = trượt, dù tài liệu đẹp):** ① Điểm 6 trụ trung bình ≥ 2.5, không trụ nào = 0 · ② **Hệ thống chạy được** (demo trực tiếp) · ③ **Qua viva** (hỏi khó, không rubber-stamp).

**4 cấp chứng chỉ** *(phần thưởng minh hoạ — chờ HR/BOD)*: Certified → Distinction → Champion (dạy lại được) → Advocate (nhân rộng 1 luồng hoàn chỉnh).

---

## 8. KPI Trụ C → nối vào business outcome AIX

| KPI Trụ C (leading) | Nối tới outcome (lagging) |
|---|---|
| **Nén** = giờ truyền thống ÷ giờ thật (KPI đắt giá nhất) | → COD↓ → **Margin↑ (Trụ A)** |
| **AI Adoption** (% người gắn AI vào quy trình chuẩn) | → năng lực delivery & tốc độ đề xuất → **Trụ A + B** |
| **Rework rate** / **Bug rate** | → chất lượng giao hàng → giảm rò rỉ margin |
| **MD / 1M-token**, **Cost/ROI** | → AI Economics → quyết định đầu tư Trụ A/B |
| **Viva pass rate**, **Telemetry-on-time** | → độ tin của mọi số attribution phía sau |

> Đây là mắt xích quan trọng: **không có Trụ C thì các claim "AI tăng X% margin/win rate" của Trụ A/B không có người tạo ra số, cũng không có ai đọc được số.**

---

## 9. Còn thiếu / cần chốt (để hoàn tất 6 Rõ)

- **Rõ ngân sách:** tổng chi phí chương trình + chi phí license Claude Code (tổng) — chưa có trong file, chờ BOD.
- **Rõ thời hạn:** ngày bắt đầu Wave 1 + mốc 4 wave theo lịch tuyệt đối 2026.
- **Rõ kết quả:** target định lượng cho "Nén" và "Adoption" sau 300 PM (VD: Nén ≥ ?x, Adoption ≥ ?%).
- **Rõ người phụ trách:** ai là owner Trụ C ở cấp AIX (Coach + HRBP + owner nghiệp vụ).
- Mở rộng ngoài 300 PM: lộ trình phủ tiếp BA/SA/Dev diện rộng.
