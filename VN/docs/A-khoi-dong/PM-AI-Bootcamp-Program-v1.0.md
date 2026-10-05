# PM AI Bootcamp v2.0 — Chương trình AI PM Transformation chi tiết

> **Đối tượng:** 200-300 Project Manager của FPT Automotive
> **Mục tiêu:** Đào tạo thế hệ **AI-Native Project Manager** — không phải "PM biết dùng ChatGPT".
> **Phiên bản:** v2.0 · **Ngày:** 2026-08-24
> **Triết lý xuyên suốt:** *Human-led, AI-first, Outcome-first.*

---

## 0. Tóm tắt chương trình (đọc 1 phút)

**Một câu:** biến PM từ người *quản lý công việc* thành người *chỉ huy cặp (PM + AI)* — tự tay lái AI build & vận hành hệ thống thật, không chỉ biết ra lệnh cho ChatGPT.

### 🎓 Học gì — 5 tuần (kick-off → tự làm → clinic → capstone)
| Giai đoạn | Thời lượng | Nội dung cốt lõi |
|---|---|---|
| **Kick-off** | 1 giờ (tuần 1) | Giới thiệu khoá: tư duy *Human-led, AI-first*; khung năng lực **CASAN** *(tương tự AI Maturity Model của Gartner)* **(Cấp 1→5)**; thang ủy quyền **L0–L5** + **Leash A/A+**; nhận đề. |
| **Bài tập EX-01→EX-06** | Tuần 1–3 (tự làm) | 6 bài tập xuyên SDLC (Requirement → WBS → Estimation → Risk → Delegation Map → Report/Dashboard); **Governance** (cổng fail-closed · hard-stop khi mâu thuẫn); **AI Economics/ROI**. |
| **Capstone "Build your Customer Zero"** *(= dogfooding ngành)* | Tuần 4–5 | **Tự tay lái AI coding agent build 1 lát cắt dọc CHẠY ĐƯỢC** + tự vận hành (Customer Zero); ghi **Dev Book**; **viva** bảo vệ. *Không có hệ thống chạy + qua viva = không tốt nghiệp.* |
| **Clinic** | 2h/tuần (xuyên suốt) | Xung phong trình bày bài đã làm, học từ người xung quanh. Không có bài giảng riêng — học bằng tay làm. |

### 📥 Input — PM mang theo gì khi vào khoá
- **01 dự án thật** đang chạy để áp dụng (hoặc chọn 1 trong **6 đề mẫu** `Project Briefs` nếu chưa có).
- **Cam kết thời gian** 5 tuần (làm ngay trên việc thật, không tạo việc thừa) + cam kết từ quản lý tuyến.
- **Tài khoản Claude Code** + môi trường an toàn dữ liệu (template repo dựng sẵn). *Claude Code là **"super orchestrator"** dùng xuyên suốt mọi bước — xem guide sơ bộ `Orchestrator Guide`.*
- **Không cần biết code trước** — nhưng phải sẵn sàng **tự tay làm & vấp**, không đứng ngoài chỉ đạo.

### 📤 Output mong muốn — ra khỏi khoá PM có gì
- **Năng lực:** đạt **CASAN Cấp 2 (Augmented)**; nhóm nòng cốt → Cấp 3–4. Biết **lái AI build + vận hành + quản trị governance + đo ROI**, và **không rubber-stamp**.
- **Sản phẩm:** 1 **hệ thống lát cắt chạy được** (Customer Zero) + **Dev Book** (= Decision Log ngành; AI-sai/PM-sửa) + **telemetry tay-làm** + **case study before/after** + **AI Workflow + Delegation Map + Dashboard** vận hành được.
- **Chứng chỉ:** *AI-Native PM — Certified* / *Distinction* ([§9](#9-đánh-giá-cuối-khoá--chứng-chỉ)).

> 📌 **3 cổng tốt nghiệp cứng:** ① đủ điểm 6 trụ · ② **hệ thống chạy được** (demo trực tiếp) · ③ **qua viva**. Thiếu 1 trong 3 = chưa tốt nghiệp, dù tài liệu đẹp.

---

## Mục lục
1. [Vision & Định vị chương trình](#1-vision--định-vị-chương-trình)
2. [Triết lý đào tạo](#2-triết-lý-đào-tạo)
3. [Khung năng lực AI-Native PM & Learning Objectives](#3-khung-năng-lực-ai-native-pm--learning-objectives)
4. [Cấu trúc tổng thể & timeline](#4-cấu-trúc-tổng-thể--timeline)
5. [Kick-off (1 giờ, tuần 1)](#5-kick-off-1-giờ-tuần-1)
6. [Bài tập EX-01→EX-06 (tuần 1–3)](#6-bài-tập-ex-01ex-06-tuần-13)
7. [Hands-on Assignments + Rubric](#7-hands-on-assignments--rubric)
8. [Capstone (tuần 4–5) · Build your Customer Zero](#8-capstone-tuần-45--build-your-customer-zero)
9. [Đánh giá cuối khoá & Chứng chỉ](#9-đánh-giá-cuối-khoá--chứng-chỉ)
10. [KPI & Telemetry Framework](#10-kpi--telemetry-framework)
11. [Roadmap triển khai 300 PM (4 Wave)](#11-roadmap-triển-khai-300-pm-4-wave)
12. [Vận hành: nguồn lực, hạ tầng, ngân sách AI](#12-vận-hành-nguồn-lực-hạ-tầng-ngân-sách-ai)
13. [Quản trị rủi ro chương trình](#13-quản-trị-rủi-ro-chương-trình)
14. [Áp dụng cho SA / BA / Dev](#14-áp-dụng-cho-sa--ba--dev--dùng-chung-common-core--track-nghề)
15. [Phụ lục — Glossary](#15-phụ-lục--glossary)

---

## 1. Vision & Định vị chương trình

### 1.1. Tuyên bố mục tiêu
Chương trình **không** đào tạo:
- PM biết "dùng ChatGPT".
- Prompt Engineering thuần tuý.

Chương trình **đào tạo**: một thế hệ **AI-Native Project Manager** có khả năng:
- Điều hành dự án **AI-first** (AI là lực lượng sản xuất mặc định, người làm điều phối + kiểm soát).
- Quản lý **Human + AI Workforce** như một đội hỗn hợp.
- Quản trị **AI Governance** (an toàn, tuân thủ, IP, human-in-the-loop) — đặc biệt trong bối cảnh Automotive.
- Đo **AI Productivity** bằng **Telemetry**, không bằng cảm giác.
- Ra quyết định dựa trên **AI Economics** (token → cost → velocity → margin → ROI).

### 1.2. Hành trình chuyển đổi
```
Traditional PM  →  Digital PM  →  AI-Native PM
(quản lý người)   (quản lý số liệu)  (quản lý Human + AI + Workflow + Telemetry + Outcome)
```

### 1.3. Định vị trong chiến lược FPT Automotive
Chương trình là **bước nền** để Automotive chuyển từ *Traditional Delivery* → *AI-Native Delivery*, đồng thời tạo **lực lượng nòng cốt** triển khai **CASAN Cấp 2 (Augmented)** trên diện rộng, tiến tới mô hình **AI Engineering** và **Human-led, AI-first** toàn tổ chức.

### 1.4. Đơn vị vận hành: cặp `(PM + AI agent)` — và pilot là "Customer Zero"
*(Bài học từ RevenueOS — một hệ thống được dựng AI-native ở quy mô một-người-một-Agent, dùng làm chứng minh "Customer Zero" trước khi nhân rộng.)*
- **Đơn vị nhân bản không phải một PM trần, mà là cặp `(PM + AI agent)`.** AI phủ **chiều rộng** (giữ context, biết nhiều mảng); PM phủ **chiều sâu phán đoán + chịu trách nhiệm**. Chương trình đào tạo PM để vận hành tốt *cái cặp này*, không phải để "biết dùng tool".
- **Mô hình này KHÔNG scale tuyến tính bằng cách thêm người.** Cái khó không phải tay code (AI gánh) mà là giữ context toàn cục + quyết định + governance. Chiến lược đúng: **đầu tư vào "lan can" (quy trình/telemetry/gate) để hạ yêu cầu skill của từng người**, chứ không tìm "siêu nhân toàn diện".
- **Pilot của mỗi PM = "Customer Zero" của chính họ:** tự chứng minh năng lực AI-native *trên dự án thật của mình* trước khi lan ra cả đội. Không có Customer Zero → không tốt nghiệp ([§8](#8-phase-3--pilot-project-4-tuần--capstone-build-your-customer-zero)).

---

## 2. Triết lý đào tạo

### 2.1. "Không học AI — mà học làm PM trong thời đại AI"
PM **vẫn** chịu trách nhiệm cuối cùng về: **Delivery · Cost · Quality · Schedule · Customer**. AI chỉ là công cụ; **cách đạt** các mục tiêu này thay đổi hoàn toàn.

### 2.2. Vòng lặp Human-led, AI-first
```
AI thực hiện  →  Human review  →  Human quyết định  →  AI tiếp tục thực hiện
        ↑________________________________________________________↓
```
PM **không** còn quản lý từng engineer. PM quản lý: **AI · Human · Workflow · Telemetry · Outcome**.

### 2.3. Nguyên tắc sư phạm
| Nguyên tắc | Diễn giải |
|---|---|
| **Learning by Doing** | Phase 2 không lecture/demo thuần; PM **phải làm** mới được tính hoàn thành. |
| **Evidence-based** | Mọi đánh giá có telemetry + số liệu + outcome, không chấm theo cảm tính. |
| **No pilot, no graduation** | Không có dự án pilot thật → không tốt nghiệp. |
| **Customer Zero by building** | PM phải **tự tay build + tự dùng** một lát hệ thống chạy được (không chỉ lập plan); hiểu sâu đến từ *tay làm + vấp*, không từ tài liệu AI sinh. Không có hệ thống chạy + Dev Book → không tốt nghiệp ([§8](#8-phase-3--pilot-project-4-tuần--capstone-build-your-customer-zero)). |
| **No rubber-stamping** | Nộp output AI mà **không có dấu vết PM-sửa/quyết định** (Dev Book trống, 0 lần override) → trượt, dù nội dung đẹp. Đây là failure mode nguy hơn cả thiếu người. |
| **Đủ để làm việc** | Phần AI Foundation học "đủ để vận hành", không đào sâu thuật toán. |
| **Tool-fit over tool-mastery** | Không học hết mọi tool; học "việc gì → tool nào". |

---

## 3. Khung năng lực AI-Native PM & Learning Objectives

### 3.1. Learning Objectives (kết quả học tập)
Sau khoá học, PM có thể:
1. Giải thích AI thay đổi SDLC như thế nào ở từng pha.
2. Giao việc cho AI đúng cách (AI Delegation).
3. Thiết kế AI workflow end-to-end cho một dự án.
4. Điều hành dự án AI-native trên dự án thật.
5. Quản trị AI Risk & Governance (hallucination, security, IP, human-in-the-loop, audit).
6. Đo AI Productivity bằng telemetry.
7. Đánh giá ROI của AI và ra quyết định kinh tế.

### 3.2. Khung năng lực 6 trụ (dùng cho rubric & đánh giá)
| # | Trụ năng lực | Mô tả hành vi "đạt" |
|---|---|---|
| C1 | **AI Literacy** | Hiểu LLM/Context/Agent/RAG đủ để thiết kế cách dùng, không nhầm khả năng AI. |
| C2 | **AI Delegation** | Phân loại đúng task: AI-do / Human-do / AI-review / Human-review / AI-không-nên. |
| C3 | **Workflow Design** | Thiết kế quy trình AI-first cho cả SDLC, có điểm checkpoint của người. |
| C4 | **Governance & Risk** | Thiết lập human-in-the-loop, approval, audit; kiểm soát hallucination/security/IP. |
| C5 | **Telemetry & Economics** | Đọc dashboard, tính cost/ROI, ra quyết định tối ưu chi phí AI. |
| C6 | **Outcome Leadership** | Dẫn dắt đội Human+AI đạt outcome (delivery/quality/margin), không sa đà công cụ. |

> Mỗi trụ chấm thang **0–4** (0 = chưa có, 4 = dẫn dắt được người khác). Tốt nghiệp yêu cầu **trung bình ≥ 2.5** và **không trụ nào = 0**.

---

## 4. Cấu trúc tổng thể & timeline

| Giai đoạn | Thời lượng | Hình thức | Kết quả đóng (Definition of Done) |
|---|---|---|---|
| **Kick-off** | **1 giờ** (tuần 1) | Giới thiệu tập trung | Tự định vị trên CASAN; nhận đề; cam kết pilot. |
| **Bài tập** | **Tuần 1–3** | Tự làm + 2h clinic/tuần | Hoàn thành EX-01→EX-06 có telemetry. |
| **Capstone** | **Tuần 4–5** | Tự làm + 2h clinic/tuần | Hệ thống chạy + Dev Book + viva. |

**Tổng thời lượng:** 5 tuần. Sau buổi kick-off 1h, học viên **tự làm việc** với AI coding agent. Mỗi tuần 2h clinic: xung phong trình bày, học từ nhau.

### 4.1. Sơ đồ luồng
```
[Kick-off 1h] → [Tuần 1–3: Bài tập EX-01→EX-06, tự làm]
       → [Tuần 4–5: Capstone] → [Viva] → [Chứng chỉ AI-Native PM]
       Xuyên suốt: 2h clinic/tuần
```

---

## 5. Kick-off (1 giờ, tuần 1)

**Mục tiêu:** giới thiệu khoá học, thay đổi tư duy, tự định vị, nhận đề. **Hình thức:** 1 buổi tập trung 1 giờ.
**Đầu ra bắt buộc:** mỗi PM có mã đề + nhóm + AI coding agent đã cài.

### Nội dung kick-off (1 giờ)
| Phút | Nội dung | Hoạt động |
|---|---|---|
| 0–10 | Khai mạc, kỳ vọng | Lãnh đạo phát biểu; "tại sao là bây giờ". |
| 10–30 | **AI Mindset** — AI-first là gì, CASAN 5 cấp, thang L0–L5, Leash A/A+ | Giới thiệu nhanh + tự định vị trên CASAN. |
| 30–45 | **Demo + hướng dẫn cài tool** | Demo AI sinh WBS; hướng dẫn trỏ AI tới thư mục giáo trình. |
| 45–55 | Nhận đề, lập nhóm | Chọn 1 trong 6 đề mẫu hoặc dự án thật. |
| 55–60 | Tổng kết, phát learning pack | Phát tài liệu + hướng dẫn tự học. |

> 💡 **Sau kick-off, bạn tự làm việc.** AI coding agent là coach — trỏ nó tới thư mục giáo trình để AI hướng dẫn. Mỗi tuần 2h clinic: xung phong trình bày, học từ nhau.

### Nội dung tham khảo (tự học)
- **AI Mindset:** phân biệt *AI / AI Agent / Agentic AI / AI Engineering*; AI thay đổi vai trò engineer & PM ra sao; vì sao PM là "nút thắt giá trị" trong mô hình mới.
- **Dịch chuyển tư duy:** từ quản lý nguồn lực người → điều phối Human+AI → tối ưu outcome.
- **CASAN AI Maturity (khung 5 cấp của FPT):** thang đo dùng đúng tên chuẩn **C-A-S-A-N** *(Curious – Augmented – Standard – Automated – Native)*.

| Cấp | Tên (CASAN) | Đặc trưng PM/dự án |
|---|---|---|
| **1** | **Curious** | Tò mò, dùng AI lẻ tẻ cá nhân, không đo, không quy trình. |
| **2** | **Augmented** | AI **tăng cường** việc PM, gắn vào quy trình chuẩn, có telemetry cơ bản. *(mục tiêu nòng cốt — toàn bộ 300 PM)* |
| **3** | **Standard** | AI-first **chuẩn hoá** toàn đội, có Delegation Map + Governance + human-in-the-loop. |
| **4** | **Automated** | Agent **vận hành workflow có kiểm soát** (cổng gác, audit, người chỉ duyệt ngoại lệ/rủi ro cao). |
| **5** | **Native** | AI-native toàn vòng đời ở quy mô lớn; đội Human+AI vận hành tự nhiên, đa workflow. |

> Chương trình đưa **toàn bộ 300 PM lên Cấp 2 (Augmented) vững**, tạo nhóm nòng cốt chạm **Cấp 3–4**. *(Tham chiếu: RevenueOS đạt cơ chế Cấp-4 trên **một** luồng giao hàng ở quy mô một-người-một-Agent — bằng chứng Cấp-4 chạy được, còn lên Cấp-4 thật là vấn đề **bề rộng**: đa workflow, đa người, khách thật.)*

- **Thang ủy quyền AI — L0→L5** *(khác với 5 cấp trưởng thành ở trên; đây là "AI được tự làm tới đâu", FPT CASAN Bible §6 "Sáu cấp ủy quyền cho Agent" — học sâu ở [M5](#module-5--ai-delegation-module-quan-trọng-nhất)):*

| Mức | Tên | AI được làm | Ai quyết |
|---|---|---|---|
| **L0** | Observe | Quan sát/tóm tắt, không đổi gì | — |
| **L1** | Draft | Nháp, **người duyệt 100%** | Người |
| **L2** | Recommend | Đề xuất phương án | Người |
| **L3** | Execute (bounded) | Thực thi tác vụ **rủi ro thấp** trong giới hạn | AI tự chạy, người spot-check |
| **L4** | Operate workflow | Vận hành **cả luồng** có hàng rào + audit + xử lý ngoại lệ | AI tự đóng phần "xanh", người duyệt ngoại lệ/hazard |
| **L5** | Restricted/high-risk | Tự chủ cao vùng phức tạp | **Cố ý chưa cấp** — luôn chờ người |

### 🎻 Công cụ xuyên suốt: **Claude Code = "Super Orchestrator"**

> **Nguyên tắc nền:** ở **mọi bước** của khoá (requirement → kiến trúc → code → test → report → telemetry), học viên **không dùng AI như chatbot hỏi–đáp**, mà dùng **Claude Code như một *nhạc trưởng điều phối*** đứng ra **làm trọn từng bước**: tự đọc bối cảnh → tự lập kế hoạch → tự gọi công cụ/chạy lệnh → tự sinh subagent chạy song song → tự kiểm → tự ghi log. **Học viên chỉ huy + phán xử + chịu trách nhiệm**, không gõ từng thao tác nhỏ.

**Vòng lặp orchestrator chuẩn — lặp cho mọi task:** `Context → Plan → Delegate (Leash A/A+) → Execute → Gate (fail-closed) → Log (Dev Book + telemetry) → lặp`.

- Đây là lý do khoá **dạy lái Claude Code**, không dạy prompt lẻ: một câu **mục tiêu** thay cho mười thao tác.
- Leash **A/A+** ở trên chính là "dây cương" để cắm ranh giới cho orchestrator; cổng **fail-closed** + **hard-stop** ([M6](#module-6--ai-governance)) là lan can bắt buộc khi để nó tự chạy nhiều bước.
- **Guide sơ bộ cho học viên:** `Orchestrator Guide` — nhập môn cách lái (7 bước · 8 "cần điều khiển" · quickstart ngày đầu · prompt patterns · checklist chống rubber-stamping). **Phát ở buổi kick-off, dùng lại suốt khoá.**

> ⚠️ **Càng để orchestrator tự chạy nhiều bước, cổng kiểm càng phải chặt.** Orchestrator không phải để buông tay — mà để **rảnh tay lo phần phán đoán**.

---

## 6. Bài tập EX-01→EX-06 (tuần 1–3)

**Triết lý:** Learning by Doing. **Không lecture thuần — PM tự làm với AI coding agent.**
**Nhịp:** tự làm theo tốc độ riêng. Mỗi tuần 2h clinic: xung phong lên trình bày bài đã làm, học từ người xung quanh.

### 6.1. Danh sách bài tập
| Bài | Chủ đề | Deliverable chính |
|---|---|---|
| **EX-01** | Requirement | `REQ-PB0X.md` + stakeholder simulation |
| **EX-02** | WBS | `WBS-PB0X.md` |
| **EX-03** | Estimation + trade-off | `EST-PB0X.md` + `TRADEOFF-PB0X.md` |
| **EX-04** | Risk Register | `RISK-PB0X.md` |
| **EX-05** | Weekly Report + Dashboard | Dashboard + hallucination detection |
| **EX-06** | Delegation Map + Leash | `DELEGATION-MAP-PB0X.md` |

> **Nhịp làm việc:** tự học tài liệu → làm bài với AI → ghi telemetry → trình bày ở clinic tuần. AI coding agent là coach — trỏ AI tới thư mục giáo trình để AI hướng dẫn.

### 6.2. Chi tiết 8 module

#### Module 1 — AI Foundation *(hiểu đủ để làm việc, không đi sâu thuật toán)*
- **Nội dung:** LLM · Context · MCP · Tool · Agent · Workflow · Multi-Agent · RAG · Knowledge.
- **Mục tiêu năng lực:** C1. PM hiểu *vì sao AI sai* (context giới hạn, hallucination) để thiết kế cách kiểm soát.
- **Lab W1-L1:** dùng 1 LLM + 1 tài liệu dự án thật, hỏi đáp có/không có context để thấy khác biệt; ghi nhận khi nào AI "bịa".

#### Module 2 — AI Toolchain *(việc gì dùng tool nào)*
- **Nội dung:** ChatGPT · Claude · Claude Code · Gemini · Codex · NotebookLM · Perplexity.
- **Bảng tool-fit (PM tự hoàn thiện trong lab):**

| Việc của PM | Tool phù hợp (gợi ý) | Vì sao |
|---|---|---|
| Soạn/đối chiếu requirement dài | Claude / NotebookLM | Cửa sổ ngữ cảnh lớn, bám tài liệu nguồn |
| Tra cứu thị trường/đối thủ có nguồn | Perplexity | Truy vết nguồn, cập nhật |
| Sinh & sửa code/script delivery | Claude Code / Codex | Agentic trên repo |
| Tổng hợp họp/đa tài liệu nội bộ | NotebookLM | Grounding theo tài liệu của mình |
| Brainstorm nhanh, đa năng | ChatGPT / Gemini | Phổ dụng |

- **Lab W1-L2:** với 5 việc PM hay làm, chọn tool + viết 1 dòng lý do; nộp "Toolchain map" cá nhân.

#### Module 3 — AI Project Workflow *(toàn bộ SDLC)*
Ở **mỗi bước**, trả lời: *AI làm gì? PM làm gì?*
```
Requirement → Planning → Architecture → Task Breakdown → Estimation
→ Coding → Testing → Review → Release → Retrospective
```
| Pha | AI làm | PM làm (human-led) |
|---|---|---|
| Requirement | Sinh draft, phát hiện mâu thuẫn, sinh câu hỏi làm rõ | Xác nhận intent, ưu tiên, ký duyệt |
| Planning/Estimation | Sinh WBS, ước lượng, cảnh báo rủi ro | Hiệu chỉnh theo thực tế, cam kết |
| Coding/Testing | Sinh code/test, chạy, vá | Định nghĩa "done", review, chịu trách nhiệm chất lượng |
| Review/Release | Tổng hợp diff, rủi ro, checklist | Quyết định release, audit |
| Retrospective | Tổng hợp telemetry → insight | Quyết định cải tiến |

**Hai nguyên tắc vận hành lấy từ RevenueOS (đã chạy thật):**

1. **Design-first + review chéo 4 lăng kính — *trước* khi để AI làm.** Với việc đáng kể, PM (hoặc kiến trúc sư) viết **thiết kế ngắn** rồi tự rà qua 4 góc nhìn **Requirement · Test/SIT · Nghiệm thu/UAT · Kiến trúc**, chốt "định nghĩa Done", **rồi mới** giao AI thực thi. Mục đích: **đẩy bất đồng về thời điểm rẻ nhất** — sửa ý tưởng trên 1 trang giấy rẻ hơn sửa 500 dòng AI đã sinh.
2. **"Móng trước, bề mặt sau" (đường cong chữ U).** Dựng *lan can* (quy tắc giao việc + telemetry + cổng kiểm soát) **trước**, rồi mới đổ tính năng. Tuần đầu **trả "thuế móng"** — tức **chi phí tư duy** (nghĩ kiến trúc, định nghĩa Done) **+ xây nền tảng** (lan can, telemetry, cổng) **+ rà soát toàn bộ file** để hiểu hiện trạng; giai đoạn này **chậm, ít kết quả nhìn thấy**. Sau đó mỗi tính năng *xài lại* sẵn lan can nên ra nhanh & ít lỗi. → PM cần hiểu để **không hoảng** khi giai đoạn đầu pilot trông "chậm mà đúng", và để giải thích đường năng suất hình chữ U cho lãnh đạo.

#### Module 4 — Prompting *(kỹ năng nền, không sa đà)*
- **Tập trung 4 loại:** Structured Prompt · Context Management · Review Prompt · Planning Prompt.
- **Lab W2:** chuẩn hoá 4 prompt template dùng lại cho dự án của mình.

#### Module 5 — AI Delegation *(module quan trọng nhất)*
- **Khung phân loại 5 nhóm:** Task nào **giao AI** / **giữ người** / **AI review** / **Human review** / **AI không nên làm**.
- **Công cụ 1 — Delegation Matrix** (triage nhanh) theo 2 trục **Rủi ro** × **Khả năng AID** (AI Doable):

| | AI làm tốt | AI làm yếu |
|---|---|---|
| **Rủi ro thấp** | AI-do, người spot-check | Người làm, AI hỗ trợ |
| **Rủi ro cao** | AI-do + **Human review bắt buộc** | **Human-do**, AI không quyết |

- **Công cụ 2 — Thang ủy quyền L0→L5 + "dây cương" (Autonomy Leash).** Matrix nói *task này thuộc nhóm nào*; thang **L0–L5** (chuẩn FPT, Bible §6) là *thước đo đầy đủ* "AI được tự chạy tới mức nào". **Leash A/A+ KHÔNG phải khung thứ ba** — nó chỉ là **2 nấc vận hành hằng ngày cắt ra từ thang đó: A ≈ L3, A+ ≈ L4** (RevenueOS rút gọn để dùng thực tế). Học viên diện rộng xài A/A+; biết thang L0–L5 để hiểu mình đang đứng ở đâu:

| Mức "dây cương" | Áp cho task | AI được làm tới đâu | AI tự "Done"? |
|---|---|---|---|
| **A** *(≈ L3)* | Trong vùng an toàn, **không** chạm điểm rủi ro cao | Làm + tự kiểm tới bản nháp giao hàng — **KHÔNG đẩy/merge** | ✅ khi cổng kiểm tự động **xanh** |
| **A+** *(≈ L4)* | Có chạm điểm rủi ro cao (bảo mật, dữ liệu khách, tiền…) | Như A **+ bắt buộc** qua **cổng bảo mật thật** + cờ cho phép tường minh | ✅ khi cổng bảo mật xanh; **hazard → chờ người duyệt** |
| **(L5)** | — | **Không cấp** — không tự push/merge, vùng phức tạp luôn chờ người | — |

> ⚠️ **Đừng nhầm 3 từ na ná nhau** *(dạy thẳng để học viên không lẫn):*
>
> | Từ | Là gì | Trả lời câu | Quan hệ |
> |---|---|---|---|
> | **Thang L0–L5** | Thước đo **độ tự chủ** của AI, 6 nấc (chuẩn FPT, Bible §6) | "AI được tự chạy **xa tới đâu**?" | Khung gốc |
> | **Leash A/A+** | **2 nấc vận hành** thực dụng cắt ra từ thang trên | "Hằng ngày tôi để AI ở nấc nào?" | **A = L3, A+ = L4** — *cùng một trục với L0–L5*, không phải khái niệm mới |
> | **Harness** | **Bộ đồ nghề kỹ thuật** lắp quanh model (ngữ cảnh·công cụ·kiểm định·bảo mật·quản trị·AgentOps·điều phối — Bible §5) | "AI được **trang bị cái gì** để chạy?" | **Trục KHÁC hẳn** — là *cái máy*, không phải *độ tự chủ*. Tầng kỹ sư/kiến trúc, PM không cần thao tác |
>
> **Mẹo nhớ (ngựa kéo xe):** *Harness* = bộ yên cương lắp lên ngựa (trang bị) · *Leash/L0–L5* = sợi dây dắt quyết định cho nó đi xa bao nhiêu (tự chủ). PM hằng ngày chỉnh **dây** (Leash), không động vào **yên cương** (Harness).

- **Ba luật cứng (giữ nguyên mọi lúc, dạy như "phản xạ"):** 🚫 AI **không tự đẩy/merge/release** (mọi thứ dừng ở bản nháp chờ duyệt); 🚫 AI **không đụng bí mật/khoá** (.env, credential); 🚫 khi **đang bị hard-stop / chờ duyệt** thì **không tự đánh dấu Done**.
- **Lab W3:** lập Delegation Map cho dự án thật (≥15 task), mỗi task gán **(nhóm 5-loại + mức L0–L5 + ai duyệt)** và 1 dòng lý do.

#### Module 6 — AI Governance
- **Chủ đề:** Hallucination · Security · IP · Compliance · Human-in-the-Loop · Approval Workflow · AI Audit.
- **Nguyên tắc Governance phổ quát (áp cho mọi PM):**

| Chủ đề | Rủi ro nếu buông | PM phải đảm bảo |
|---|---|---|
| **Hallucination** | AI bịa thông tin lọt vào artefact | Human review trước khi dùng; kiểm chứng với nguồn |
| **Security & IP** | Lộ mã nguồn/bí mật/dữ liệu khách vào prompt | Quy tắc dữ liệu vào AI; không đưa IP/secret; dùng tool có kiểm soát |
| **Compliance & Traceability** | Mất truy vết yêu cầu↔thiết kế↔test | AI output có truy vết, không phá vỡ chuỗi quy trình chuẩn |
| **Human-in-the-Loop** | AI tự quyết việc rủi ro cao | Điểm duyệt bắt buộc của người cho artefact quan trọng |
| **Approval & Audit** | Không truy được "ai/ AI đã quyết gì" | Approval workflow + audit log cho luồng AI |

**Ba cơ chế cụ thể (thay vì khẩu hiệu) — lấy từ RevenueOS:** biến "Human-in-the-Loop" và "Approval Workflow" từ ý niệm thành quy trình kiểm được.

| Cơ chế | Nguyên tắc | PM áp dụng thế nào |
|---|---|---|
| **Cổng fail-closed** | Output của AI chỉ được dùng khi cổng kiểm tự động **xanh**. *Không xác minh được = CHẶN* (mặc định đóng), **không** "tạm cho qua". | Định nghĩa cổng tối thiểu cho artefact quan trọng (vd: requirement phải truy vết được, có người review); thiếu bằng chứng ⇒ chưa được dùng. |
| **"BUILT-flagged — chờ duyệt"** | AI **làm xong nhưng KHÔNG tự release**. Việc rủi ro cao dừng ở trạng thái "đã build, cổng xanh, **chờ người duyệt**". | Tách rõ "AI làm xong" ≠ "được phát hành". Người **đích thân duyệt** phần hazard; phần an toàn AI tự đóng. |
| **Hard-stop khi mâu thuẫn** | Khi spec **mâu thuẫn / mơ hồ**, AI phải **DỪNG & phơi bày**, tuyệt đối **không tự đoán** cho trôi việc. | Dạy PM coi "AI dừng và hỏi" là **tín hiệu tốt**, không phải lỗi; PM phân xử rồi mới mở chốt. |

**Kỷ luật truy vết (traceability) — nhẹ nhưng bắt buộc:** mỗi yêu cầu quan trọng phải truy được **yêu cầu ↔ việc ↔ kiểm thử**. RevenueOS dùng một "máy kiểm tra truy vết" tự chạy mỗi khi sửa tài liệu requirement và **báo to khi đứt mạch** — PM không cần công cụ nặng, nhưng phải giữ thói quen "đụng requirement là rà lại mạch truy vết".

**9 mẫu sai lầm chuyển đổi AI cần tránh (FPT CASAN Bible §20.3):** Bible liệt kê chính xác các "anti-pattern" mà tổ chức hay mắc. Bảng dưới đối chiếu **lỗi ↔ module trong chương trình bịt lỗi đó** — dùng làm checklist tự soi cho mỗi PM:

| # | Mẫu sai lầm (Bible §20.3) | Module trị |
|---|---|---|
| 1 | Mua nhiều công cụ AI nhưng **chưa sẵn sàng dữ liệu** | M2 Toolchain · M3 (chấm cấp CASAN: dữ liệu là tầng nền) |
| 2 | Dùng chatbot **vá quy trình cũ**, không thiết kế lại luồng việc | M3 Workflow (vẽ lại SDLC AI-first, không "dán AI lên việc cũ") |
| 3 | Đưa Agent vào môi trường thật **không có kiến trúc ủy quyền** | **M5 Delegation** (thang L0–L5 + Delegation Map bắt buộc) |
| 4 | **Không phân biệt công cụ chỉ-đọc vs có-quyền-ghi**/đổi hệ thống | **M5** (phân nhóm task theo quyền tác động + leash A/A+) |
| 5 | Không có đường chuẩn kiểm định, **kiểm thử bằng cảm giác** | M6 cổng fail-closed · M7 Telemetry (đo bằng dữ liệu) |
| 6 | Không có **AgentOps** → mù chi phí/chất lượng/lỗi/trôi lệch | M7 Telemetry (dashboard: token, rework, bug, cost, Nén (= Productivity Ratio ngành)) |
| 7 | Không có **hoàn tác / công tắc dừng khẩn cấp** | M6 (BUILT-flagged chờ duyệt · hard-stop · approval workflow) |
| 8 | Không có **chủ sở hữu rõ** cho dữ liệu/model/Agent/rủi ro/kết quả | M6 Governance (gán owner + audit log + human-in-the-loop) |
| 9 | Gọi mọi thứ là "chuyển đổi AI" nhưng **KPI chỉ là số giấy phép / số prompt** | M7 (đo outcome & giờ thật, **không** proxy token/license) — gắn với rủi ro *rubber-stamping* ở [§13](#13-quản-trị-rủi-ro-chương-trình) |

> *Lưu ý:* PM làm trong lĩnh vực có chuẩn chuyên ngành (an toàn chức năng, an ninh mạng, quy trình ngành...) cần tuân thêm chuẩn áp dụng cho dự án của mình — phần đó học chuyên sâu theo nhóm, **ngoài phạm vi training common này**.

- **Lab W3:** thiết kế **Approval Workflow + Audit log** cho 1 luồng AI trong dự án, **chỉ rõ**: cổng fail-closed nào gác, điểm nào để AI tự đóng vs điểm nào "BUILT-flagged chờ người duyệt", và tình huống nào AI phải hard-stop.

#### Module 7 — AI Telemetry *(đánh giá bằng dữ liệu, không bằng cảm giác)*
- **Chỉ số đọc trên dashboard:** Token Usage · AI Adoption · Productivity · Rework · Review Time · Bug Rate · Cost · Outcome · **Nén (so với truyền thống)**.
- **Bốn nguyên tắc đo trung thực (RevenueOS đã rút ra khi vận hành thật):**
  1. **Đo giờ người THẬT — KHÔNG proxy bằng token.** Token tiêu nhiều **không** đồng nghĩa làm được nhiều (lúc xây móng đốt token mà ra ít). RevenueOS đã **bỏ** cách quy giờ theo token vì thiếu trung thực; chỉ đo **giờ ngồi máy thật**.
  2. **est → reconcile.** Lúc ghi, token là **ước tính**; định kỳ **đối soát số thật** rồi cập nhật. Đọc số "vọt" phải dè dặt tới khi reconcile xong.
  3. **Log cả việc *ngoài* kế hoạch** (phân tích, tài liệu, họp…), không chỉ task shipped — nếu không, bức tranh năng suất bị **thổi phồng** một chiều.
  4. **Hai chỉ số "đắt giá" nên đưa lên đầu:** **Nén** = (giờ truyền thống ÷ giờ thật) — cho lãnh đạo thấy đòn bẩy; **MD/1M-token** = hiệu quả token — cho thấy "ăn món mình nấu" về AI Economics.
- **Lab W4:** dựng dashboard tối thiểu cho dự án (xem [§10](#10-kpi--telemetry-framework) cho công thức), **có ít nhất chỉ số Nén + 1 chỉ số hiệu quả token**, và ghi rõ nguồn giờ là "giờ thật" chứ không suy từ token.

#### Module 8 — AI Economics
- **Chuỗi giá trị:** `Token → Cost → Velocity → Margin → ROI`.
- **Thông điệp lõi:** AI **không miễn phí**; PM phải tối ưu chi phí AI như tối ưu nhân lực.
- **Lab W4:** tính ROI AI cho 1 hạng mục: tiết kiệm giờ người vs. chi phí token; ra quyết định "mở rộng / dừng".

---

## 7. Hands-on Assignments (10 task) + Rubric

**Quy tắc chung:** mỗi assignment làm **trên dự án thật** của PM, nộp kèm **artefact + prompt đã dùng + telemetry** (token, thời gian, có/không rework). Chấm theo rubric 0–4.

> 📓 **Bài tập cụ thể (phát-tay-làm-ngay):** xem `Workbook Common` — **6 bài common (EX-01→EX-06)** chạy trên 1 case study chung (EX-06 = Delegation Map L0–L5 + Leash A/A+ cho M5), mỗi bài có input mẫu, các bước, sản phẩm nộp, rubric, prompt mẫu. Dành cho học viên chưa có dự án thật hoặc cần luyện trước.

> 🗂️ **Tài liệu 1 trang phát kèm workshop (Phase 2 — M5+M6):** `Operating Model` — tóm tắt **L0–L5 · Leash A/A+ · 3 cơ chế governance** + 3 luật cứng + "4 câu hỏi trước khi giao việc cho AI". In ra dán cạnh màn hình.

### 7.1. Đề bài & tiêu chí đạt
| # | Assignment | Đề bài cụ thể | Tiêu chí "Đạt" (≥2) |
|---|---|---|---|
| **T1** | AI viết Requirement | Từ brief thô → AI sinh draft requirement có cấu trúc (mục tiêu, scope, NFR, acceptance); **có bước simulation stakeholder đòi thêm scope** | Đủ mục, bám brief, PM đã chỉnh ≥1 điểm sai intent |
| **T2** | AI Review Requirement | AI rà draft T1 tìm mâu thuẫn/thiếu/ambiguity, sinh câu hỏi làm rõ | ≥5 phát hiện hợp lệ; PM phân loại đúng cái nào thật |
| **T3** | AI sinh WBS | AI breakdown scope → WBS có cấp độ + dependency | WBS phủ scope, dependency hợp lý, PM hiệu chỉnh |
| **T4** | AI Estimation | AI ước lượng effort theo WBS (3-point / dải); **có bước trade-off scope–time khi estimate vượt mốc** | Có giả định rõ; PM điều chỉnh theo thực tế |
| **T5** | AI sinh Risk List | AI sinh risk register (likelihood × impact + mitigation) | ≥10 rủi ro xếp hạng; có mitigation khả thi |
| **T6** | AI sinh Test Strategy | AI đề xuất test strategy (cấp độ test, coverage, dữ liệu) | Bám requirement; nêu rủi ro chất lượng |
| **T7** | AI Weekly Report | AI sinh báo cáo tuần từ dữ liệu thật (tiến độ/rủi ro/next); **có bước phát hiện hallucination** | Số liệu đúng nguồn; ngắn gọn, ra quyết định được |
| **T8** | AI Meeting Summary | AI tóm tắt 1 cuộc họp thật → action items + owner + due | Action đúng, có owner/deadline, PM xác nhận |
| **T9** | AI Retrospective | AI tổng hợp telemetry sprint → insight + cải tiến | Insight dựa số liệu, không cảm tính |
| **T10** | AI Delivery Dashboard | Dựng dashboard delivery tối thiểu (xem §10) | ≥5 KPI có công thức + nguồn dữ liệu rõ |

### 7.2. Rubric chấm mỗi assignment (thang 0–4)
| Điểm | Mức độ | Mô tả |
|---|---|---|
| 0 | Không nộp / không dùng AI | — |
| 1 | Sơ khai | Có dùng AI nhưng PM không review, lỗi rõ rệt |
| 2 | **Đạt** | AI làm + PM review/chỉnh đúng + có telemetry |
| 3 | Tốt | Có Delegation/Governance rõ; tái sử dụng được template |
| 4 | Xuất sắc | Có tối ưu cost/ROI hoặc cải tiến quy trình, dạy lại được |

### 7.3. Điều kiện qua Phase 2
- Hoàn thành **≥9/10 assignment ở mức ≥2**, **T5 (Risk) và T10 (Dashboard) bắt buộc ≥2**.
- Mọi assignment nộp **có telemetry** (thiếu telemetry = chưa hoàn thành — đúng tinh thần evidence-based).

### 7.4. Biến thể assignment theo nghề (BA / SA / Dev)
> Bảng §7.1 là **track PM**. Ba track còn lại **giữ nguyên rubric §7.2 (0–4), quy tắc telemetry, và tinh thần chống rubber-stamping**; chỉ **thay danh sách assignment** cho khớp vật phẩm nghề. Mỗi assignment ánh xạ 1–1 tới bài trong workbook nghề tương ứng. Cột **BB** = bắt buộc để qua Phase 2.

**Track BA** *(`…-Workbook-BA-…`):*
| # | Assignment | Ánh xạ workbook | BB |
|---|---|---|---|
| BA-T1 | Elicitation & Requirement (AI viết + review + hard-stop) | BA-EX-01 | ✅ |
| BA-T2 | User Story + Acceptance Criteria (Gherkin, kiểm INVEST) | BA-EX-02 | ✅ |
| BA-T3 | Process mapping As-is → To-be (swimlane) | BA-EX-03 | — |
| BA-T4 | Backlog grooming & prioritization (MoSCoW/value-effort) | BA-EX-04 | — |
| BA-T5 | **Prototype/clickable chạy được** (Customer Zero mini) | BA-EX-05 | ✅ |
| BA-T6 | Delegation Map + Leash (góc BA) | BA-EX-06 | ◐ khuyến nghị mạnh |
> **Qua Phase 2 (BA):** ≥5/6 ở mức ≥2; **BA-T1, BA-T2, BA-T5 bắt buộc ≥2**.

**Track SA** *(`…-Workbook-SA-…`):*
| # | Assignment | Ánh xạ workbook | BB |
|---|---|---|---|
| SA-T1 | Kiến trúc & trade-off + ADR | SA-EX-01 | ✅ |
| SA-T2 | Chọn tech stack có tiêu chí | SA-EX-02 | — |
| SA-T3 | NFR đo được & kiến trúc đáp ứng | SA-EX-03 | ✅ |
| SA-T4 | Threat model (STRIDE) + Design-first 4 lăng kính | SA-EX-04 | ✅ |
| SA-T5 | **Vertical slice có kiến trúc thật** (Customer Zero mini) | SA-EX-05 | ✅ |
| SA-T6 | Delegation Map + Leash (góc SA) | SA-EX-06 | ◐ khuyến nghị mạnh |
> **Qua Phase 2 (SA):** ≥5/6 ở mức ≥2; **SA-T1, SA-T3, SA-T4, SA-T5 bắt buộc ≥2**.

**Track Dev** *(`…-Workbook-Dev-…`):*
| # | Assignment | Ánh xạ workbook | BB |
|---|---|---|---|
| DEV-T1 | Sinh code từ spec + **review code AI** (bắt bug/lỗ hổng) | DEV-EX-01 | ✅ |
| DEV-T2 | Test generation + bắt "test giả" (gài bug → test đỏ) | DEV-EX-02 | ✅ |
| DEV-T3 | Debug-with-AI (reproduce → root cause → fix) | DEV-EX-03 | — |
| DEV-T4 | Tự dựng Harness/agent nhỏ (context·tool·gate) | DEV-EX-04 | ◐ khuyến nghị mạnh |
| DEV-T5 | **Feature/service chạy + test xanh** (Customer Zero mini) | DEV-EX-05 | ✅ |
| DEV-T6 | Delegation Map + Leash + cổng CI (góc Dev) | DEV-EX-06 | ◐ khuyến nghị mạnh |
> **Qua Phase 2 (Dev):** ≥5/6 ở mức ≥2; **DEV-T1, DEV-T2, DEV-T5 bắt buộc ≥2**.

> 🔁 **Common Core giữ nguyên cho cả 4 track:** Phase 1 (tư duy) · module M5 Delegation · M6 Governance · Capstone Phase 3 (§8) · viva · 3 cổng tốt nghiệp cứng (§9.2). Chỉ §7.1/§7.4 (assignment) + §9.1 (trọng số) là khác theo nghề.

---

## 8. Capstone (tuần 4–5) · **"Build your Customer Zero"**

> **"Không có pilot — không tốt nghiệp." Và pilot KHÔNG phải là một xấp tài liệu AI sinh ra — pilot là một HỆ THỐNG CHẠY ĐƯỢC mà chính PM tự tay lái AI build, rồi tự mình dùng.**

### 8.0. Vì sao phải tự build (đọc trước)
Sáu artefact ở Phase 2 (REQ, WBS, Risk, Delegation Map, Report) **Claude Code sinh full trong vài phút**. Nếu PM chỉ nhận output rồi đọc lướt + bấm duyệt → chương trình **tự tái tạo đúng anti-pattern nó dạy phải tránh: rubber-stamping**, PM "tốt nghiệp" với tài liệu đẹp và **zero hiểu biết vận hành**.

Hiểu sâu **không đến từ bản plan** — nó đến từ lúc tay làm và **vấp**: gặp cổng fail-closed chặn, gặp hard-stop khi spec mâu thuẫn, thấy AI làm sai phải sửa, tự log telemetry và nhìn ra con số nén thật. Đây đúng là cơ chế **Customer Zero (Bible §3)**: tự build → tự xài hệ thống mình tạo → mới có quyền nói mình hiểu. **Mỗi PM phải là Customer Zero của chính lát hệ thống mình dựng.**

### 8.1. Yêu cầu — build một "lát cắt dọc chạy được"
Mỗi PM phải **tự lái Claude Code build 01 lát cắt dọc (vertical slice) CHẠY ĐƯỢC**, deploy được (local là đủ), và **tự mình vận hành nó** — không dừng ở tài liệu.

> 🧭 **Không biết bắt đầu từ đâu?** Theo **`Capstone Playbook`** — đường ray 11 bước *nhận đề → SW spec → Architecture → WBS → Estimation → Risk/Delegation → Definition of Ready → build lát cắt dọc → test/gate → RTM/telemetry → viva*, mỗi bước có input · cách lái Claude Code · artefact ra · bẫy hay sót, dựng theo đúng cách RevenueOS (Customer Zero của FA) đã đi thật.

**Hai nhánh chọn đề:**
- **Nhánh A (ưu tiên):** PM có **dự án thật đang chạy** → build một lát cắt nhỏ chạy được *bên trong* phạm vi dự án đó, làm Customer Zero ngay tại chỗ.
- **Nhánh B:** PM **chưa có dự án phù hợp** → chọn 1 trong **6 đề `Project Briefs`** (PB-01→PB-06) và build prototype. Nhóm mới → PB-03 (dễ nhất); nhóm core → PB-06 (sát AI nhất).

**"Lát cắt dọc chạy được" nghĩa là gì** *(không cần full hệ thống, không chấm code đẹp)*: **1 luồng end-to-end thật** — input → xử lý → lưu (DB) → xem lại — **demo được + PM tự bấm tự dùng**. VD PB-03: nhập phiếu kho → lưu → xem tồn cập nhật, chạy local. Tiêu chí là *chạy được + PM tự lái AI ra nó + hiểu từng bước*, không phải quy mô.

- Áp dụng AI vào **≥3 pha SDLC** với Delegation Map + Governance đã thiết kế ở Phase 2.
- **Đo kết quả** bằng telemetry: trước (baseline) vs sau (with-AI), trên **giờ người thật**.

### 8.2. Lịch 4 tuần Capstone
| Tuần | Mốc | Đầu ra |
|---|---|---|
| P1 | Setup môi trường + baseline | Dựng được repo/template chạy; chốt lát cắt dọc; ghi baseline KPI |
| P2 | **Build AI-first + vận hành** | Lái Claude Code dựng lát cắt; ghi **Dev Book** mỗi bước; log telemetry hằng ngày |
| P3 | Operate như Customer Zero + tối ưu | Tự dùng hệ thống, ghi "cái gì vỡ khi xài thật"; phân tích dashboard; tối ưu cost/quality |
| P4 | Đo & đóng gói + bảo vệ | Hệ thống chạy được + case study before/after + video demo + **viva** |

### 8.3. Bằng chứng bắt buộc — diệt rubber-stamping từ gốc
Không nộp bằng chứng này = **chưa tốt nghiệp**, dù tài liệu/hệ thống "đẹp":

1. **Hệ thống chạy được** (lát cắt dọc) — demo trực tiếp được, không phải ảnh chụp/slide.
2. **Dev Book — nhật ký quyết định** *(đúng kiểu `development-book.md` của RevenueOS)*: mỗi bước ghi rõ — **chỗ AI làm sai → PM sửa gì** · quyết định delegate **mức L mấy & vì sao** · **cổng nào fail-closed** · **hard-stop** nào gặp & phân xử ra sao. Đây là **bằng chứng HIỂU**, chấm nặng hơn cả bản plan.
3. **Telemetry tay-làm**: giờ ngồi máy thật + **số lần PM-edit/override AI** + token est→reconcile. *Một PM có 30 lần sửa AI ≠ một PM có 0 lần sửa (kẻ thứ hai đang rubber-stamp).*
4. **Operating log (Customer Zero)**: ghi lại cái gì **vỡ khi PM tự dùng** hệ thống mình build — chỗ này mới bật ra hiểu biết mà plan không bao giờ cho.

### 8.4. Viva — bảo vệ vấn đáp *(cú chốt chống rubber-stamping)*
Mỗi PM **bảo vệ trực tiếp** trước **Coach** (có thể kèm peer-review từ nhóm khác). Câu hỏi xoáy bắt buộc trả lời được:
> *"AI làm sai chỗ nào? Em bắt được bằng cách nào? Vì sao delegate task này mức L3 chứ không L4? Cổng nào gác output này?"*

**Trả lời trôi mới đạt. Trượt viva = chưa tốt nghiệp dù điểm deliverable cao** — vì không hiểu thì không qua được khẩu vấn.

### 8.5. Scaffolding cho PM không biết code *(ràng buộc thật: 300 PM, đa số non-coder)*
Mục tiêu **KHÔNG phải biến PM thành dev** — mà cho họ **trải nghiệm thân thể** vòng lặp *harness → leash → gate → sửa*, đủ để **quản lý người làm việc đó mà không bị qua mặt**.
- **Thin slice, không phải full app** — vừa sức 1 PM + AI trong thời lượng khoá.
- **Template repo + môi trường dựng sẵn** (devcontainer) để non-coder không kẹt ở khâu setup, tập trung vào vòng lặp lái-AI/duyệt/sửa.
- **AI là mentor trực mặc định**: khi kẹt, PM hỏi chính AI để gỡ (giải thích lỗi, gợi cách sửa) — không chờ người. Đây cũng là kỹ năng cần luyện: tự lái AI thoát khó.
- **Team tự mentor lẫn nhau** + review chéo; vướng lớn vượt nhóm mới đẩy lên **Coach** (spot-check, không làm hộ).
- **Thang "doing"**: tuần 1 xem demo build (L0) → build có kèm (peer/AI, L1–2) → build solo — PM leo thang *làm*, đúng tinh thần Cấp 2 Augmented.
- Kênh community chia sẻ best practice (xem [§11](#11-roadmap-triển-khai-300-pm-4-wave)).

> **Hai nấc Capstone (Tier 1 / Tier 2):** chi tiết tại **`Capstone Playbook`** bước [8]. PM có nền kỹ thuật → Tier 1 (code chạy thật). PM thuần quản lý → Tier 2 (prototype + API mock + schema SQL + test scenario). Cả 2 tier đều yêu cầu Dev Book thật và đủ điều kiện Certified.

---

## 9. Đánh giá cuối khoá & Chứng chỉ

**Không thi trắc nghiệm.** Đánh giá bằng **deliverable có telemetry + số liệu + outcome.**

### 9.1. Bộ deliverable tốt nghiệp
> Trọng tâm dịch chuyển từ "nộp đủ tài liệu" → **"có hệ thống chạy được + bằng chứng tự tay làm"**. Tài liệu AI sinh được trong vài phút, nên không còn là phần nặng nhất.

| Deliverable | Mô tả | Trọng số |
|---|---|---|
| **Running Customer Zero** | **Lát cắt dọc CHẠY ĐƯỢC** PM tự lái AI build (demo trực tiếp, không phải slide) — [§8.1](#8-phase-3--pilot-project-4-tuần--capstone-build-your-customer-zero) | **25%** |
| **Dev Book** | Nhật ký quyết định: **AI-sai → PM-sửa** · mức L & lý do · cổng fail-closed · hard-stop — *bằng chứng HIỂU* + telemetry tay-làm | **20%** |
| **AI Workflow + Delegation Map** | Quy trình AI-first end-to-end + bản đồ ủy quyền đã áp dụng | 15% |
| **AI Dashboard** | Dashboard telemetry vận hành được (giờ thật + PM-edit + est→reconcile) | 15% |
| **Case Study** | Before/after có số liệu từ pilot | 15% |
| **AI Transformation Plan** | Kế hoạch đưa dự án lên CASAN Cấp 2 (Augmented) | 5% |
| **Video Demo** | Demo thực tế cách PM vận hành Human+AI | 5% |

**Trọng số theo track (BA / SA / Dev)** — giữ **Running Customer Zero + Dev Book** làm lõi (chống rubber-stamping), chỉ dịch phần "vật phẩm nghề" theo bảng [§14.2](#14-áp-dụng-cho-sa--ba--dev--dùng-chung-common-core--track-nghề):

| Deliverable | PM | BA | SA | Dev |
|---|---|---|---|---|
| **Running Customer Zero** *(đầu ra đặc thù nghề)* | 25% *(lát cắt dọc)* | 25% *(prototype/luồng chạy)* | 25% *(slice có kiến trúc)* | **30%** *(feature chạy + test xanh)* |
| **Dev Book** *(AI-sai → người-sửa + telemetry tay-làm)* | 20% | 20% | 20% | 20% |
| **Vật phẩm nghề chính** | WBS + Estimation (15%) | Requirement + User Story/AC (**20%**) | Kiến trúc + ADR + NFR (**20%**) | Review code AI + Test (15%) |
| **Delegation Map + Governance** | 15% | 10% | 15% | 15% |
| **Telemetry/Dashboard vận hành** | 15% | 10% | 5% | 10% |
| **Case study before/after** | 5% | 10% | 10% | 5% |
| **Kế hoạch/Video demo** | 5% | 5% | 5% | 5% |

> Nguyên tắc dịch: **BA** nặng Requirement/AC, nhẹ dashboard; **SA** nặng thiết kế/NFR, nhẹ báo cáo tiến độ; **Dev** nặng code chạy & chất lượng, nhẹ tài liệu. Tổng luôn = 100%; hai dòng lõi (Customer Zero + Dev Book) **không đổi bản chất** giữa các track.

### 9.2. Hội đồng & cách chấm
- Hội đồng (tinh gọn): **Coach** chủ trì + **AI hỗ trợ rà** (đối chiếu bằng chứng, telemetry, chất lượng artefact) + **peer-review chéo** từ PM khác. Champion (khi đã có ở wave sau) tham gia chấm phụ. Không cần hội đồng đông.
- Chấm theo **6 trụ năng lực** ([§3.2](#3-khung-năng-lực-ai-native-pm--learning-objectives)), thang 0–4.
- **Tốt nghiệp (đủ 3 cổng cứng):** (1) trung bình 6 trụ **≥ 2.5**, không trụ nào = 0; (2) có **hệ thống chạy được** (Running Customer Zero) + **Dev Book** thể hiện rõ chỗ AI-sai/PM-sửa; (3) **qua viva** ([§8.4](#8-phase-3--pilot-project-4-tuần--capstone-build-your-customer-zero)). **Trượt viva hoặc không có hệ thống chạy = chưa tốt nghiệp dù điểm cao** — chống rubber-stamping.

### 9.3. Cấp độ chứng chỉ
| Hạng | Điều kiện | Ý nghĩa |
|---|---|---|
| **AI-Native PM — Certified** | Đạt chuẩn tốt nghiệp | Vận hành dự án AI-native ở Cấp 2 (Augmented) |
| **AI-Native PM — Distinction** | TB ≥3.5 + ROI pilot dương rõ rệt | Ứng viên Wave 3 (Champion) |

---

## 10. KPI & Telemetry Framework

### 10.1. Nguyên tắc đo
**KHÔNG đo:** số prompt · số câu hỏi AI · LOC (vanity metrics). **KHÔNG suy giờ người từ token** (token-burn ≠ effort — bài học RevenueOS).
**ĐO:** giá trị & outcome, dựa **giờ người thật**. Mọi KPI có **công thức + nguồn dữ liệu + baseline + target**.
**Trung thực số liệu:** token ghi dạng **ước tính (est)** rồi **đối soát số thật (reconcile)** định kỳ; ghi cả việc ngoài kế hoạch để không thổi phồng năng suất.

### 10.2. Bộ KPI chính
| KPI | Công thức | Nguồn dữ liệu | Baseline | Target (sau chương trình) |
|---|---|---|---|---|
| **AI Adoption** | (Số task có dùng AI ÷ tổng task) × 100% | Task tracker + telemetry log | Đo W0 mỗi PM | ≥ 60% công việc PM |
| **Planning Lead Time** | Ngày để ra kế hoạch/WBS+estimation duyệt được | PMO records | Hiện tại | ↓ ≥ 30% |
| **Estimation Accuracy** | 1 − \|Actual − Estimate\| ÷ Actual *(độ chính xác ước lượng của PM, không phải forecast doanh số)* | Estimate vs actual khi đóng task/dự án | Đo W0 | ↑ về ≥ 80% |
| **AI Productivity** | Outcome đơn vị ÷ (giờ người + chi phí AI quy đổi) | Telemetry + timesheet | Hiện tại | ↑ ≥ 25% |
| **Review Time** | Giờ review trung bình / artefact | Review log | Hiện tại | ↓ ≥ 30% |
| **Rework Rate** | (Artefact phải làm lại ÷ tổng) × 100% | QA log | Hiện tại | ↓ ≥ 20% |
| **Delivery Quality** | Bug Rate (bug/ KLOC hoặc / story) + defect leakage | QA/Test | Hiện tại | Không tệ đi; mục tiêu ↓ |
| **Customer Satisfaction** | CSAT/NPS dự án | Survey | Hiện tại | Giữ/↑ |
| **Project Margin** | (Doanh thu − chi phí gồm token) ÷ Doanh thu | Finance + AI cost | Hiện tại | ↑ (cải thiện điểm % cụ thể/dự án) |
| **Nén (Compression)** | (Giờ truyền thống ước cho cùng khối lượng) ÷ (Giờ người thật) | Effort baseline + giờ thật đo từ log | Đo W0 | ↑ — con số "đòn bẩy" báo lãnh đạo |
| **Hiệu quả token** | (MD quy đổi giao được) ÷ (Token tiêu, triệu) | Telemetry log | Đo W0 | ↑ — gắn thẳng AI Economics |

> Baseline đo ở **W0** (trước chương trình) cho từng PM/dự án; target chốt theo từng dự án trong AI Transformation Plan. Con số % ở đây là **khung gợi ý**, sẽ tinh chỉnh theo dữ liệu thực.

### 10.3. Telemetry tối thiểu cần thu (per dự án pilot)
| Nhóm | Trường dữ liệu |
|---|---|
| Sử dụng AI | token in/out, tool nào, task gắn với pha SDLC nào |
| Thời gian | giờ người theo task, review time, lead time các pha |
| Chất lượng | rework count, bug count, defect leakage |
| Kinh tế | chi phí token (quy ra tiền), giờ người quy ra tiền, margin |

### 10.4. Mức KPI chương trình (tổng hợp 300 PM)
| KPI chương trình | Target |
|---|---|
| % PM tốt nghiệp (Wave 1) | ≥ 80% |
| % PM đạt AI Adoption ≥ 60% | ≥ 70% |
| % PM có pilot ROI dương | ≥ 50% |
| Số AI Champion tạo ra | ≥ 20 |

---

## 11. Roadmap triển khai 300 PM (4 Wave)

| Wave | Quy mô | Mục tiêu | Đầu ra |
|---|---|---|---|
| **Wave 1** | **300 PM** | AI Foundation (Phase 1+2), đưa toàn bộ lên L1→L2 | 300 PM hoàn thành 10 assignment |
| **Wave 2** | **80 PM** | Pilot thật (Phase 3) trên dự án đang chạy | 80 case study có số liệu |
| **Wave 3** | **20 PM** | **AI Champion** — coaching, best practice, community | Mạng lưới champion + thư viện best practice |
| **Wave 4** | **5 PM** | **AI Program Leader** — Governance, KPI, Rollout, Playbook | Playbook nhân rộng toàn Automotive |

### 11.1. Tiêu chí chọn người lên wave sau
- **W1→W2:** tốt nghiệp Phase 2 + có dự án thật phù hợp pilot.
- **W2→W3:** chứng chỉ *Distinction* + ROI pilot dương + có khả năng huấn luyện.
- **W3→W4:** Champion xuất sắc + tư duy hệ thống (governance/KPI/rollout).

### 11.2. Lịch triển khai gợi ý (theo đợt)
- Chia 300 PM thành **10 cohort × 30 PM**, mỗi cohort 1 giảng viên + 1 trợ giảng.
- Chạy **2–3 cohort song song / đợt** → hoàn tất Wave 1 trong ~3–4 tháng.
- Wave 2 khởi động ngay khi cohort đầu tốt nghiệp (cuốn chiếu, không chờ toàn bộ).

### 11.3. Cộng đồng & duy trì (sau đào tạo)
- Kênh community + định kỳ **AI PM Guild** (chia sẻ case + cập nhật tool/giá).
- Thư viện dùng chung: prompt template, Delegation Map mẫu, dashboard mẫu, playbook governance.
- **"Dev Book" cấp đội = bộ nhớ đào tạo.** Mỗi quyết định/gotcha/thiết kế được ghi lại 1 việc–1 trang. PM mới + AI **đọc lại** kho này để lên **T-shaped** (sâu 1 mảng, hiểu rộng) theo thời gian — đây là cách "tạo thêm kiến trúc sư" thật sự (chậm mà bền), thay vì kỳ vọng tuyển được người giỏi-toàn-diện. Cơ chế nhân rộng đúng: **đầu tư vào lan can (quy trình + telemetry + cổng kiểm) để biến càng nhiều việc thành "làm-theo-khuôn-có-sẵn" — ai cũng theo được — và thu hẹp phần việc đòi "tư duy kiến trúc sư" (phán đoán hiếm, khó truyền) xuống mức nhỏ nhất.** Nhờ đó người bình thường + AI vẫn chạy tốt, không phải chờ tuyển được "siêu nhân toàn diện".

---

## 12. Vận hành: nguồn lực, hạ tầng, ngân sách AI

### 12.1. Nguồn lực giảng dạy — **mô hình tinh gọn: 1 Coach + AI reviewer + team tự mentor**
> **Thực tế nguồn lực:** chương trình **KHÔNG** có đội trainer/trợ giảng/champion biên chế để kèm từng nhóm. Triết lý vận hành: **1 Coach định hướng · AI làm reviewer mặc định · các team tự học và mentor lẫn nhau.** Đây cũng chính là điều chương trình muốn dạy — PM phải tự lái AI và tự chịu trách nhiệm, không chờ người cầm tay.

| Vai trò | Số lượng | Nhiệm vụ |
|---|---|---|
| **Coach (1 người)** | 1 | Định hướng & chốt chuẩn, ra đề, **spot-check** bài nộp + viva, gỡ vướng lớn. **Không** kèm từng nhóm; can thiệp theo ngoại lệ. |
| **AI (Claude) — reviewer mặc định** | — | Thay cho đội trainer/trợ giảng: PM **dùng AI tự check output trước khi nộp**; Coach **dùng AI để rà nhanh** bài nộp & telemetry. Mentor "luôn trực" với chi phí gần như bằng 0. |
| **Team tự học + peer-mentor** | mỗi nhóm | Nhóm **tự tổ chức học, review chéo lẫn nhau** (learn-by-teaching); người làm tốt **dẫn lại** người sau. |
| **Champion (nổi lên tự nhiên)** | tuỳ phát sinh | Không biên chế trước — PM xuất sắc ở wave trước **tự nguyện dẫn dắt** wave sau, nhân rộng theo cộng đồng ([§11](#11-roadmap-triển-khai-300-pm-4-wave)). |

> **Hệ quả thiết kế:** mọi thứ phải **self-serve** — learning pack, template repo, 6 đề PB, rubric, Operating Model 1 trang đủ rõ để team chạy được **mà không cần giảng viên đứng lớp liên tục**. Coach chỉ giữ chuẩn ở các cổng (duyệt mẫu, viva), không scale theo đầu người.

### 12.2. Hạ tầng & công cụ
- Tài khoản AI tools cấp theo cohort (ưu tiên bản doanh nghiệp có kiểm soát dữ liệu).
- Môi trường **an toàn dữ liệu** cho Automotive: quy tắc dữ liệu vào AI, không đưa IP/secret; ưu tiên kênh/endpoint được duyệt.
- Hệ telemetry: bảng log token/thời gian + dashboard (có thể tận dụng mẫu nội bộ).
- LMS/kho tài liệu: micro-content, learning pack, mẫu artefact.

### 12.3. Khung ngân sách AI (AI Economics ở cấp chương trình)
| Khoản | Cách ước tính |
|---|---|
| Chi phí token học viên | (token/PM/tuần) × số PM × số tuần × đơn giá |
| License tools | số ghế × đơn giá tháng × thời lượng |
| Chi phí giảng dạy | **rất thấp** — 1 Coach (không có đội trainer/trợ giảng); thay bằng AI reviewer + team tự mentor. Chủ yếu là thời gian Coach + token AI rà bài |
| Hạ tầng/telemetry | thiết lập + vận hành |
| **ROI chương trình** | (giờ người tiết kiệm + margin cải thiện) − tổng chi phí trên |

> PM được dạy chính bài toán này ở **M8**; chương trình cũng **tự áp dụng** để báo cáo ROI cho BOD — "ăn món mình nấu".

---

## 13. Quản trị rủi ro chương trình

| Rủi ro | Ảnh hưởng | Giảm thiểu |
|---|---|---|
| PM bận dự án, không làm assignment | Không tốt nghiệp, adoption thấp | Blended + làm trên dự án thật (không tạo việc thừa); cam kết từ quản lý tuyến |
| Học công cụ thay vì tư duy | "Biết dùng ChatGPT" nhưng không AI-native | Chấm theo 6 trụ + outcome, không chấm số prompt |
| Lộ IP/dữ liệu nhạy cảm vào AI | Rủi ro pháp lý, mất tài sản trí tuệ | M6 Governance bắt buộc; quy tắc dữ liệu + audit; tools có kiểm soát |
| AI hallucination lọt vào artefact quan trọng | Sai sót chất lượng, mất uy tín | Human-in-the-loop bắt buộc cho artefact quan trọng |
| Telemetry không thu được | Không đo được ROI | Telemetry là điều kiện hoàn thành assignment; dựng từ W1 |
| Chỉ 1 Coach cho 300 PM | Coach thành nút cổ chai nếu cố kèm từng nhóm | **Thiết kế tinh gọn có chủ đích** ([§12.1](#121-nguồn-lực-giảng-dạy--mô-hình-tinh-gọn-1-coach--ai-reviewer--team-tự-mentor)): AI là reviewer mặc định + team tự mentor/review chéo; Coach chỉ giữ chuẩn ở cổng (duyệt mẫu, viva), không scale theo đầu người; self-serve learning pack |
| Team tự học → lệch chuẩn, "mù dắt mù" | Chất lượng không đồng đều giữa nhóm | Rubric + Operating Model 1 trang + 6 đề chuẩn hoá đầu ra; AI rà bài bắt lệch sớm; viva + spot-check của Coach chặn ở cổng; review chéo giữa nhóm |
| **Rubber-stamping (duyệt bừa output AI)** | Rủi ro mới **nguy hơn cả thiếu người** — PM ký bừa diff AI, lỗi lọt mà tưởng đã kiểm | Rubric **chấm phán đoán của người**, không chấm "AI trả lời hay"; cổng fail-closed gánh phần máy-kiểm-được; hazard **người đích thân duyệt**; review chéo 2 người cho việc khó |
| **"Thuế móng" giai đoạn đầu pilot** | Lãnh đạo thấy pilot "chậm" → cắt sớm trước khi gặt | Dạy đường cong chữ U ở M3; báo cáo baseline + chỉ số Nén để chứng minh đòn bẩy đến *sau* khi móng xong |

---

## 14. Áp dụng cho SA / BA / Dev — dùng chung "Common Core" + track nghề

> **Chốt nhanh:** chương trình này **KHÔNG chỉ dành cho PM**. Khoảng **60–70% là lõi dùng chung** cho mọi vai trò (SA/BA/Dev/PM); phần còn lại chỉ cần **thay bộ bài tập + rubric deliverable** theo nghề. Không cần soạn 4 giáo trình — soạn **1 Common Core** rồi lắp **4 track mỏng**.

### 14.1. Common Core — dùng nguyên si cho cả 4 vai trò
Học chung, cùng cohort, cùng cổng tốt nghiệp:
- **Phase 1 — Tư duy gốc:** CASAN 5 cấp · Human-led AI-first · 4 tầng tư duy · AI Economics (đo giờ thật, không proxy token).
- **AI Delegation:** thang **L0–L5** + **Autonomy Leash A/A+** + **Harness** (đừng nhầm 3 trục).
- **Governance:** fail-closed gate · BUILT-flagged chờ duyệt · hard-stop khi mâu thuẫn · traceability.
- **Chống rubber-stamping** + kỷ luật review thật (rubric chấm **phán đoán của người**).
- **Capstone "Build your Customer Zero"** (§8): triết lý tự-build-để-hiểu đúng cho cả 4 nghề — chỉ khác **sản phẩm đầu ra**.
- Mô hình **1 Coach + AI reviewer + peer-mentor**, 3 cổng tốt nghiệp cứng.

### 14.2. Track nghề — chỉ thay phần "vật phẩm nghề" (~30–40%)
Giữ nguyên khung; **swap bộ bài tập workbook + rubric deliverable + đầu ra Customer Zero**:

| Vai trò | Bài tập lõi thay cho EX-của-PM | Customer Zero nộp gì | Trọng số dịch về |
|---|---|---|---|
| **PM** *(bản gốc)* | WBS · Estimation · Risk · Weekly report/dashboard · Delegation Map | Lát cắt dọc chạy + plan/telemetry vận hành | Như §9.1 hiện tại |
| **BA** | EX-01 Requirement *(dùng gần như nguyên)* · User Story + Acceptance Criteria · Process/BPMN · backlog grooming | Prototype/clickable + luồng nghiệp vụ chạy được | Requirement & AC nặng hơn, WBS/estimation nhẹ |
| **SA** | Kiến trúc + trade-off (ADR) · chọn tech stack · NFR · threat model · **Design-first/4 lăng kính đào sâu** | Vertical slice **có kiến trúc thật** + ADR + sơ đồ | Thiết kế/NFR nặng, báo cáo tiến độ nhẹ |
| **Dev** | Sinh code + **review code AI** · test-gen · debug-with-AI · **tự dựng Harness/agent** (đi sâu nhất) | Feature/service **chạy + test xanh** + telemetry | Code chạy & chất lượng nặng, tài liệu nhẹ |

### 14.3. Bộ đề dùng chung, chỉ đổi "góc nhìn output"
6 đề **PB-01→PB-06** (`Project Briefs`) **dùng lại được cho cả 4 nghề** — cùng 1 bài toán, mỗi nghề nộp lát cắt của mình: **BA** nộp requirement/AC, **SA** nộp kiến trúc/ADR, **Dev** nộp code chạy, **PM** nộp plan/điều phối. Cho phép **cohort trộn nghề** cùng làm 1 đề → mô phỏng thật một team dự án (đây là bonus: học phối hợp chéo vai).

### 14.4. Bộ workbook theo nghề (đã tách)
Đã có **4 workbook** dùng chung Common Core, chỉ khác bộ EX + rubric + đầu ra Customer Zero (theo bảng 14.2):
- **PM** — `Workbook Common` (WBS · Estimation · Risk · Weekly/dashboard · Delegation).
- **BA** — `PM-AI-Bootcamp-Workbook-BA-v1.0.md` (Elicitation/Requirement · User Story + AC Gherkin · Process/BPMN · Backlog grooming · **Prototype chạy được** · Delegation).
- **SA** — `PM-AI-Bootcamp-Workbook-SA-v1.0.md` (Kiến trúc + trade-off/ADR · Tech stack · NFR · Threat model + 4 lăng kính · **Vertical slice có kiến trúc thật** · Delegation).
- **Dev** — `PM-AI-Bootcamp-Workbook-Dev-v1.0.md` (Sinh + review code AI · Test-gen · Debug-with-AI · **Tự dựng Harness/agent** · **Feature chạy + test xanh** · Delegation).

Còn lại nếu muốn "chuẩn hoá hết": điều chỉnh **§7 (assignment) + §9.1 (trọng số deliverable)** cho khớp từng track (hiện §7/§9.1 vẫn theo khung PM — track khác dùng bảng trọng số 14.2 làm căn cứ chấm).

**Kèm theo (dùng chung mọi nghề):**
- `Project Briefs` — 6 đề mẫu PB-01→PB-06.
- `Orchestrator Guide` — cách lái Claude Code (vòng 7 bước).
- **`Capstone Playbook`** — ⭐ *đường ray 11 bước từ nhận đề → hệ thống chạy → viva*, lấy chuỗi artefact RevenueOS thật làm mẫu; xâu 6 drill EX-01→EX-06 thành một mạch build. **Phát ở đầu Phase 3.**

---

## 15. Phụ lục — Glossary

> Xem **`docs/GLOSSARY.md`** — bảng thuật ngữ thống nhất cho toàn bộ chương trình, có cột mapping sang thuật ngữ ngành quốc tế.

---

*Tài liệu này là phiên bản chi tiết hoá để triển khai. Mọi con số % và ngân sách là khung gợi ý, cần tinh chỉnh theo baseline thực đo ở W0 và đặc thù từng dự án Automotive.*

---

## Phụ lục — Changelog

| Version | Ngày | Nội dung |
|---|---|---|
| v2.0 | 2026-08-24 | **Cải tiến cấu trúc:** (1) gộp glossary → `docs/GLOSSARY.md` có cột mapping ngành; (2) thêm `START-HERE.md` hướng dẫn đọc tài liệu; (3) bỏ §9.4 phần thưởng; (4) dời changelog xuống cuối file. **Cải tiến bài tập:** Workbook v2.0 thêm bước stakeholder simulation (EX-01), iteration trade-off (EX-03), hallucination detection (EX-05). Capstone v2.0 thêm 2-tier build (full-stack / PM-stack). |
| v2.0 | 2026-07-09 | **Thêm Capstone Playbook — cẩm nang dắt tay từng bước "từ Đề tới Customer Zero":** tạo `PM-AI-Bootcamp-Capstone-Playbook-v1.0.md` — đường ray **11 bước** (làm rõ scope → SW spec → Module Map → Architecture → WBS/Rolling-Wave → Estimation → Risk/Delegation → Definition of Ready → build lát cắt dọc → test/gate → RTM/telemetry → viva), mỗi bước có *mục tiêu · input · cách lái Claude Code (prompt mẫu) · artefact ra (đặt tên theo mã đề) · bẫy hay sót · tiêu chí Done*, kèm hộp **"RevenueOS đã làm gì"** trỏ artefact thật + ánh xạ về 6 drill EX-01→EX-06. Nối con trỏ ở **§8.1** và **§14.4**; ProjectBriefs bổ sung mục "Nhận đề xong làm gì". Giải nỗi lo "học viên không biết bắt đầu từ đâu". |
| v1.9 | 2026-07-09 | **Chuẩn hoá KPI cho đúng domain đào tạo (bỏ KPI lẫn từ sản phẩm sales):** §10.2 **bỏ "Proposal Lead Time"** (KPI sales, trùng lặp với Planning Lead Time) và **đổi tên "Forecast Accuracy" → "Estimation Accuracy"** (bản chất là độ chính xác ước lượng của PM, không phải forecast doanh số) — giữ nguyên công thức `1−\|Actual−Estimate\|÷Actual`. Deck slide 15 (KPI & Telemetry) thiết kế lại: thay 4 stat trần trụi bằng **bảng KPI · Cách đo (công thức) · Target** cho 6 KPI đào tạo, đánh dấu ⭐ 2 chỉ số chữ ký (Nén + Hiệu quả token), band KPI chương trình đưa xuống full-width. |
| v1.8 | 2026-07-08 | **Bỏ cơ chế tăng lương theo %, chỉ còn thưởng tiền mặt:** §9.4 chuyển hoàn toàn sang **thưởng một lần 1M/2M/3M/5M** theo cấp hoàn thành (bỏ "tăng lương +5/+10/+15/+20%"); chỉnh nguyên tắc & ghi chú cho khớp (ghi nhận = thưởng tiền mặt, không phải điều chỉnh lương). Hạn mức Claude Code $50/100/200/500/tháng giữ nguyên. Con số vẫn minh hoạ, chờ HR/BOD duyệt. |
| v1.7 | 2026-07-02 | **Nhấn mạnh Claude Code = "Super Orchestrator":** thêm box **§5 "Công cụ xuyên suốt: Claude Code = Super Orchestrator"** (vòng lặp Context→Plan→Delegate→Execute→Gate→Log; gắn Leash A/A+ làm dây cương + fail-closed/hard-stop làm lan can); nêu con trỏ guide trong Input §0. Tạo tài liệu nhập môn cho học viên `PM-AI-Bootcamp-ClaudeCode-Orchestrator-Guide-v1.0.md` (7 bước · 8 "cần điều khiển" · mapping 4 track · quickstart ngày đầu · prompt patterns · bẫy + checklist chống rubber-stamping) — phát ở Phase 1, dùng lại Phase 2–3. |
| v1.6 | 2026-07-02 | **Chuẩn hoá assignment + trọng số theo nghề:** thêm **§7.4** — 3 bảng assignment BA/SA/Dev (mỗi bảng 6 task ánh xạ 1–1 tới workbook nghề + điều kiện qua Phase 2 riêng), giữ nguyên rubric §7.2; mở rộng **§9.1** — bảng trọng số deliverable 4 cột PM/BA/SA/Dev (lõi Running Customer Zero + Dev Book giữ nguyên, dịch phần vật phẩm nghề theo §14.2). Tạo 3 workbook nghề: `…-Workbook-BA/SA/Dev-v1.0.md`; cập nhật §14.4 liệt kê đủ 4 workbook. |
| v1.5 | 2026-07-02 | **Mở rộng dùng chung cho SA/BA/Dev:** thêm **§14 "Áp dụng cho SA/BA/Dev"** — xác định ~60–70% là **Common Core** dùng chung mọi vai trò (Phase 1 tư duy + Delegation/Harness/Governance + Capstone Customer Zero + cơ chế thưởng/cổng tốt nghiệp), phần còn lại chỉ **swap workbook + rubric deliverable + đầu ra Customer Zero** theo nghề (bảng 14.2); bộ đề PB-01→06 dùng lại cho cả 4 nghề, cho phép cohort trộn nghề (14.3); nêu việc-cần-làm nếu bung 4 track (14.4). Dời **Glossary §14 → §15**, đánh số Mục lục lại. Bản hiện vẫn tối ưu cho PM; SA/BA/Dev là định hướng mở rộng. Đánh số thứ tự 1–42 cho bảng Glossary. |
| v1.4 | 2026-06-30 | **Thêm tóm tắt đầu file + phần thưởng:** thêm **§0 Tóm tắt chương trình** (Học gì 3 phase · Input PM mang theo · Output mong muốn · 3 cổng tốt nghiệp cứng) ở ngay đầu; thêm **§9.4 Phần thưởng theo cấp hoàn thành** (4 cấp Certified→Champion: thưởng 1M/2M/3M/5M · hạn mức Claude Code $50/100/200/500/tháng) — chỉ tính sau khi qua 3 cổng tốt nghiệp, con số minh hoạ chờ HR/BOD duyệt. |
| v1.0 | 2026-06-29 | Chi tiết hoá toàn bộ khung: giáo trình theo giờ/tuần, 10 assignment + rubric, KPI/telemetry có công thức, roadmap 4 wave + vận hành. |
| v1.1 | 2026-06-29 | Chuyển sang **training common**: bỏ ánh xạ chuẩn chuyên ngành (A-SPICE/ISO 26262/ISO 21434) khỏi M6, thay bằng Governance phổ quát; chuẩn chuyên ngành học chuyên sâu theo nhóm (ngoài phạm vi). |
| v1.2 | 2026-06-30 | **Nạp cách làm đã chạy thật từ RevenueOS (Customer Zero):** (1) sửa M3 về khung CASAN thật *Curious–Augmented–Standard–Automated–Native* + thang ủy quyền **L0–L5**; (2) M5 thêm thang ủy quyền & mẫu *Autonomy Leash A/A+*; (3) M6 thêm 3 cơ chế cụ thể: *fail-closed gate · BUILT-flagged chờ duyệt · hard-stop khi mâu thuẫn* + kỷ luật traceability; (4) M7/§10 thêm nguyên tắc *đo giờ thật không proxy token, est→reconcile* + KPI **Nén** & **MD/1M-token**; (5) M3 Workflow thêm *Design-first + review chéo 4 lăng kính* & "móng trước, bề mặt sau"; (6) §1/§11/§13 thêm mô hình *cặp (PM+AI), Dev Book = bộ nhớ đào tạo, rủi ro rubber-stamping*, pilot = *Customer Zero*. |
| v1.2.1 | 2026-06-30 | **Đối chiếu nguồn gốc `FPTCasan_Bible.md`** (ALPHA/LD/HDCV/FPT, hiệu lực 19/5/2026): xác nhận khung CASAN **5 cấp = Cấp 1→5** (không có "Level 0") & tên L0–L5 khớp Bible §6; sửa số hiệu trích dẫn **§12.5 → §6**, đổi "Level 0→5" → "Cấp 1→5"; bổ sung glossary **4 tầng tư duy gốc** (Bible §2) + gắn số hiệu Bible cho CASAN(§1)/Customer Zero(§3); thêm vào M6 box **"9 mẫu sai lầm chuyển đổi AI"** (Bible §20.3) đối chiếu lỗi ↔ module trị. Tạo tài liệu phát tay 1 trang `PM-AI-Bootcamp-OperatingModel-1page-v1.0.md` (L0–L5 · Leash A/A+ · 3 cơ chế governance). |
| v1.3.1 | 2026-06-30 | **Mô hình nguồn lực tinh gọn (đúng thực tế):** viết lại §12.1 — bỏ đội trainer/trợ giảng/champion biên chế, thay bằng **1 Coach + AI reviewer mặc định + team tự học & mentor lẫn nhau** (Coach chỉ giữ chuẩn ở cổng); đồng bộ §8.5 (AI/peer mentor thay mentor kỹ sư), §9.2 (hội đồng tinh gọn Coach+AI+peer), §8.4 viva trước Coach, §12.3 chi phí giảng dạy ~thấp, §13 đổi rủi ro "thiếu giảng viên" → "1 Coach/300 PM" + "team tự học lệch chuẩn" với giảm thiểu tương ứng. |
| v1.3 | 2026-06-30 | **Capstone "Build your Customer Zero" — chống chương trình tự rubber-stamp:** Phase 3 đổi từ "pilot áp dụng AI" thành **bắt buộc tự tay build 1 lát cắt dọc CHẠY ĐƯỢC** (nhánh A: dự án thật · nhánh B: 6 đề `ProjectBriefs`), tự vận hành làm Customer Zero (§8.0–8.1); thêm **bằng chứng bắt buộc** (hệ thống chạy + **Dev Book** AI-sai/PM-sửa + telemetry tay-làm + operating log §8.3), **viva bảo vệ** (§8.4), **scaffolding cho non-coder** + thang doing (§8.5); §9.1 cân lại trọng số (Running Customer Zero 25% + Dev Book 20%, tài liệu giảm); §9.2 thêm **3 cổng tốt nghiệp cứng** (điểm + hệ thống chạy + qua viva); §2.3 thêm nguyên tắc *Customer Zero by building* & *No rubber-stamping*. |
| v1.2.2 | 2026-06-30 | **Gọn khái niệm (chống nhầm lẫn):** định vị rõ **Leash A/A+ = 2 nấc vận hành cắt ra từ thang L0–L5** (A≈L3, A+≈L4), không phải khung thứ ba; thêm hộp M5 **"Đừng nhầm 3 từ"** (L0–L5 vs Leash vs **Harness**) + ẩn dụ ngựa-kéo-xe; glossary thêm dòng **Harness** tương phản với Leash; đồng bộ chú thích sang Operating Model 1-page + Workbook EX-06. |
