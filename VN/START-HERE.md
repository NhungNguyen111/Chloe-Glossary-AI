# PM AI Bootcamp — Bắt đầu từ đây

> Bạn vừa nhận bộ tài liệu khoá học. File này hướng dẫn **từng bước** từ lúc nhận tài liệu tới lúc nộp bài đầu tiên — không bỏ sót, không đọc thừa, không bỡ ngỡ.
> **Nguyên tắc:** đừng cố đọc hết trước khi bắt tay. Đọc đúng phần cần → **làm ngay** → tra thêm khi vướng. Hiểu đến từ tay làm, không từ tài liệu.

---

## 🤖 Cách khoá học hoạt động — AI là Coach, tài liệu là harness

> **Nguyên tắc cốt lõi:** Bộ tài liệu này được viết để **AI đọc là chính**, người đọc thêm. AI sẽ học yêu cầu khoá học và **thay giáo viên** hướng dẫn bạn trong suốt quá trình làm.

### Quy trình làm việc với AI

| Bước | Bạn làm gì | AI làm gì |
|:---:|---|---|
| **1** | Cài **AI coding agent** (Claude Code, Codex, Cursor…) | — |
| **2** | Trỏ AI tới **thư mục giáo trình**, yêu cầu AI học | AI đọc toàn bộ file `.md`, nắm yêu cầu khoá học |
| **3** | Chia sẻ **ý tưởng / giải pháp** của bạn | AI phân tích, nghiên cứu, brainstorm, xây dựng yêu cầu chi tiết |
| **4** | Duyệt & phán xử output | AI xây dựng tài liệu: Requirement → WBS → Architecture → RTM → SIT → UAT |
| **5** | Ra lệnh triển khai | AI code / prototype / mock (tuỳ Tier) |
| **6** | **Nghiệm thu** — chỉ ra điểm chưa đạt | AI chỉnh sửa theo feedback |
| **7** | Lặp lại bước 3–6 cho đến khi đạt yêu cầu | — |

**Prompt mẫu khi bắt đầu** (dán vào AI coding agent sau khi trỏ thư mục):

```
Hãy học nội dung các yêu cầu trong khoá học này (bỏ qua file PDF cho tiết kiệm token).
```

> 💡 **Tại sao gọi là "harness"?**
> Giáo trình là **quy trình ràng buộc** (harness) cho AI tuân theo. Khi AI follow quy trình, nó sinh ra các tài liệu (REQ, WBS, RTM, SIT, UAT…). Các tài liệu này lại trở thành **business harness** và **technical harness** — đảm bảo AI làm đúng hướng, không làm lung tung. Bạn không cần đọc hết giáo trình — **AI đọc hộ bạn**, bạn chỉ cần phán xử và ra quyết định.

---

## ✅ Checklist onboard — 7 bước đầu tiên

Làm theo thứ tự. Mỗi bước ghi rõ **làm gì**, **mất bao lâu**, **kết quả cần có**.

### Bước 1 · Cài công cụ (~20 phút)

Khoá học dùng **AI coding agent** làm công cụ xuyên suốt (Claude Code, Codex, Cursor, hoặc tương đương).

| Việc | Chi tiết |
|---|---|
| **Cài AI coding agent** | Theo hướng dẫn của Coach ở buổi kick-off. Nếu dùng Claude Code: cài CLI hoặc IDE extension. |
| **Tạo thư mục làm việc** | Tạo 1 thư mục cho cả khoá, ví dụ: `PM-AI-Bootcamp/PB-01/` (thay PB-01 bằng mã đề của mình). |
| **Kiểm tra chạy được** | Mở terminal / IDE → gõ lệnh thử → AI trả lời → OK. Nếu lỗi: hỏi Coach ngay, **đừng để sang ngày hôm sau**. |

> 💡 Chưa cài được cũng không sao — buổi kick-off có hỗ trợ setup. Nhưng nếu cài trước sẽ tiết kiệm thời gian.

### Bước 2 · Tham gia buổi Kick-off (1 giờ, tuần 1)

| Nội dung | Bạn cần làm |
|---|---|
| Giới thiệu khoá học: AI Mindset, CASAN, L0–L5, Leash A/A+ | Nghe, hỏi, ghi chú. Tự định vị trên thang CASAN. Nhận đề (PB-01→06 hoặc dự án thật). |

**Kết thúc buổi kick-off:** bạn phải có **mã đề** (vd PB-01) và **nhóm** (nếu có).

> 💡 **Sau kick-off bạn tự làm việc.** Mỗi tuần có **2h clinic** — xung phong lên trình bày bài đã làm, học từ người xung quanh. Không có bài giảng riêng — bạn học bằng tay làm.

### Bước 3 · Đọc 2 tài liệu nền tảng (~30 phút)

Chỉ cần đọc **đúng 2 file** — không đọc gì khác ở giai đoạn này:

| # | Đọc gì | Thời gian | Mẹo |
|---|---|---|---|
| 1 | **Operating Model** (1 trang) | 10 phút | **In ra dán cạnh màn hình.** Đây là "bảng cửu chương" của khoá: L0–L5, Leash A/A+, 3 cơ chế governance. |
| 2 | **Orchestrator Guide — chỉ §0 và §1–§2** | 20 phút | Hiểu "orchestrator là gì" + vòng 7 nhịp. **DỪNG ở §2** — §3 trở đi tra khi cần, không đọc trước. |

> ⚠️ **Sai lầm phổ biến nhất:** cố đọc hết Program (15 mục, 700+ dòng) trước khi làm gì → quên hết, mất thời gian. Program là tài liệu tham khảo — Coach sẽ giới thiệu ở buổi live, bạn **tra khi cần**, không đọc từ đầu tới cuối.

### Bước 4 · Đọc đề của mình + làm EX-01 (~90 phút)

| Việc | File | Thời gian |
|---|---|---|
| Đọc brief dự án (chỉ đề của mình) | `docs/C-thuc-hanh/…-ProjectBriefs-…` → tìm mã PB của bạn | 15 phút |
| Mở **Workbook Common — EX-01** và làm theo từng bước | `docs/C-thuc-hanh/…-Workbook-Common-…` | 60–75 phút |

**EX-01 gồm 5 bước:** AI sinh requirement → AI tự review → PM phán xử → hard-stop → **simulation stakeholder đòi thêm scope** (bước mới — luyện kỹ năng "nói KHÔNG có lý do").

**Sản phẩm đầu tiên của bạn:** `REQ-PB0X.md` (thay X bằng mã đề).

### Bước 5 · Nộp bài + ghi telemetry

| Việc | Chi tiết |
|---|---|
| **Đặt tên file chuẩn** | Theo mẫu: `REQ-PB01.md`, `WBS-PB01.md`, `RISK-PB01.md`, `DELEGATION-MAP-PB01.md`… Thay `PB01` bằng mã đề của bạn. |
| **Ghi telemetry** ở cuối mỗi bài | Bắt buộc ghi: tool dùng · token (est) · thời gian thật (giờ ngồi máy) · số vòng lặp · rework · **PM-edit** (số chỗ PM sửa AI — cột quan trọng nhất). |
| **Nộp theo hướng dẫn Coach** | Thường: push lên repo nhóm hoặc nộp qua kênh chung. Coach sẽ thông báo cụ thể. |

> 💡 **PM-edit** = số lần bạn sửa output AI. Đây là bằng chứng bạn HIỂU chứ không rubber-stamp. PM-edit = 0 → Coach sẽ hỏi kỹ hơn.

### Bước 6 · Làm tiếp EX-02 → EX-06 (Tuần 2–3)

Tiếp tục **Workbook Common** theo thứ tự:

```
EX-01 Requirement ✓ (đã làm)
  ↓
EX-02 WBS
  ↓
EX-03 Estimation → ⚠️ Bước mới: trade-off bắt buộc
       (estimate vượt mốc → quay lại cắt scope → sửa REQ + WBS)
  ↓
EX-04 Risk Register
  ↓
EX-06 Delegation Map + Leash
  ↓
EX-05 Weekly Report + Dashboard → ⚠️ Bước mới: bắt AI bịa số
       (dữ liệu input cố tình thiếu — AI sẽ bịa, PM phải bắt)
```

**Mỗi tuần:** 2h clinic — xung phong trình bày, học từ nhau. Ngoài ra bạn **tự làm** theo nhịp riêng.

### Bước 7 · Vào Capstone (Tuần 4–5)

| Việc | Chi tiết |
|---|---|
| Đọc **Capstone Playbook** | 11 bước từ đề → hệ thống chạy → viva. **Tài liệu chính từ đây.** |
| Chọn **Tier** | **Tier 1 (Full-stack):** code chạy thật — cho PM có nền kỹ thuật. **Tier 2 (PM-stack):** prototype + API mock + schema + test scenario — cho PM thuần quản lý. Cả 2 tier đều đủ Certified. |
| Ghi **Dev Book** song song | Mỗi lần AI sai → bạn sửa: ghi lại. Dev Book trống = rubber-stamp = chưa đạt. |

---

## 🆘 Khi gặp vướng — hỏi ai, ở đâu

| Vướng gì | Hỏi đâu |
|---|---|
| **Lỗi cài tool / AI không chạy** | Hỏi Coach hoặc kênh hỗ trợ kỹ thuật (Coach thông báo ở buổi kick-off) |
| **Không hiểu yêu cầu bài tập** | Đọc lại Workbook Common — mỗi bài có **prompt mẫu** + **rubric** + **bẫy hay sót**. Vẫn chưa rõ → hỏi ở buổi clinic hằng tuần (2h/tuần). |
| **Không hiểu thuật ngữ** | Tra `docs/GLOSSARY.md` — có cột mapping sang ngành quốc tế |
| **AI trả lời sai / lạ** | **Đó là bình thường** — chương trình thiết kế để bạn bắt lỗi AI. Ghi vào Dev Book, đừng hoảng. |
| **Không biết gán mức L0–L5 / Leash nào** | Mở Operating Model (1 trang đã in) → đọc bảng ① + ② → hỏi 4 câu ở mục 🧭 |
| **Estimate vượt mốc, không biết cắt gì** | Đó chính là bài học EX-03 — xem hướng dẫn trade-off trong Workbook. Cắt scope = kỹ năng, không phải thất bại. |

---

## 🚫 5 sai lầm hay mắc nhất (tránh từ đầu)

1. **Đọc hết tài liệu rồi mới bắt tay** → mất 2 ngày, quên 80%. Đọc đúng 2 file ở Bước 3 rồi LÀM NGAY.
2. **Rubber-stamp output AI** → nộp nguyên bản AI không sửa gì, PM-edit = 0. Coach phát hiện ngay ở viva.
3. **Không ghi Dev Book ngay** → để tối viết lại = bịa. Ghi ngay lúc AI sai, không đợi.
4. **Không ghi telemetry** → thiếu = bài chưa hoàn thành. Ghi cùng nhịp với bài, không ghi sau.
5. **Sợ AI sai nên không dám dùng** → AI sai = cơ hội học. Chương trình chấm **phán xử của bạn**, không chấm "AI trả lời hay".

---

## 📖 Bảng tra cứu nhanh — cần gì mở đâu

| Cần gì | Mở đâu |
|---|---|
| Công thức KPI | Program §10 |
| Rubric chấm điểm | Program §7 |
| Thang L0–L5 / Leash A/A+ | Operating Model hoặc Program §4 (M5) |
| Thuật ngữ / mapping sang ngành | `docs/GLOSSARY.md` |
| Prompt mẫu | Orchestrator Guide §8 |
| Checklist bỏ túi | Orchestrator Guide §10 |
| Tiêu chuẩn tốt nghiệp | Program §9 (3 cổng cứng) |
| Đề bài dự án | `docs/C-thuc-hanh/…-ProjectBriefs-…` |

---

## 🗺 Bản đồ tài liệu

```
                          ┌─────────────────────┐
                          │   START-HERE.md      │  ← Bạn đang ở đây
                          │   (onboard + đọc gì) │
                          └────────┬────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              ▼                    ▼                    ▼
   ┌──────────────────┐  ┌─────────────────┐  ┌──────────────────┐
   │ Operating Model  │  │ Orchestrator    │  │ GLOSSARY.md      │
   │ (1 trang, in ra) │  │ Guide (§0–§2)  │  │ (tra khi cần)    │
   └────────┬─────────┘  └────────┬────────┘  └──────────────────┘
            │                     │
            └──────────┬──────────┘
                       ▼
            ┌──────────────────┐
            │ Project Brief    │  ← Đề của nhóm (PB-01…PB-06)
            │ (chọn 1 đề)     │
            └────────┬─────────┘
                     ▼
            ┌──────────────────┐
            │ Workbook Common  │  ← 6 bài tập (EX-01→EX-06)
            │ (làm theo bước) │
            └────────┬─────────┘
                     ▼
            ┌──────────────────┐
            │ Capstone         │  ← 11 bước build hệ thống
            │ Playbook         │     Tier 1 hoặc Tier 2
            └────────┬─────────┘
                     ▼
                   VIVA
```

## Không cần đọc (trừ khi tò mò hoặc là Coach/lãnh đạo)

- **Changelog** ở cuối mỗi file — cho người maintain chương trình.
- **Program §11–§14** — roadmap 4 wave, vận hành, ngân sách: dành cho Coach/lãnh đạo.
- **Program toàn bộ** — quá dài cho lần đọc đầu; dùng bảng tra cứu ở trên.

---

*PM AI Bootcamp v2.0 — START-HERE · 2026-08-25 · Mở file này đầu tiên, làm theo từng bước.*
