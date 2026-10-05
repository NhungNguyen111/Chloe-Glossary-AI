# RISK + DELEGATION-MAP-PB01 — Risk register và leash

## Risk register

| ID | Rủi ro | XS | TĐ | Mức | Mitigation | Owner |
|---|---|---:|---:|---:|---|---|
| R1 | Encoding tiếng Việt bị mojibake | 3 | 3 | Cao | lưu UTF-8; kiểm tra browser | Dev |
| R2 | Mất dữ liệu localStorage | 2 | 4 | Cao | export định kỳ; test reload | PM |
| R3 | Import file bẩn/record trùng | 3 | 3 | Cao | validate + skip + toast | Dev |
| R4 | Dashboard hiển thị số bịa | 2 | 4 | Cao | nguồn + công thức + editable telemetry | PM |
| R5 | Scope creep sang backend/sync | 3 | 3 | Cao | hard-stop tại out-of-scope | PM |
| R6 | Dashboard lệch PM Edit giữa artifact và GitHub log | 2 | 4 | Cao | chỉ hiển thị PM Edit tổng ở KPI/commit log; map commit ở detail | PM/Dev |
| R7 | Telemetry dùng số mẫu thay vì số thực tế | 2 | 4 | Cao | thiếu nguồn thì hiển thị `—`; ghi log trước khi nhập | PM |
| R8 | Dashboard không cập nhật kịp PM Edit sau khi commit đã được push lên GitHub, làm KPI và phân bổ theo artifact bị trễ hoặc chưa chính xác | 3 | 4 | Cao | gọi lại GitHub API khi reload; hiển thị thời điểm sync; có fallback local; không xem số cũ là số hiện tại; kiểm tra commit mới trước khi chốt báo cáo | PM/Dev |

## Delegation map (L0–L5)

| Việc | Level | Leash | Cổng kiểm soát |
|---|---|---|---|
| Sinh draft artefact | L3 | A | PM review nội dung |
| Chỉnh HTML/CSS/JS | L4 | A+ | diff + smoke test |
| Sửa dữ liệu người dùng | L2 | A | confirm trước xóa; không overwrite import |
| Đổi scope/NFR | L1 | A | PM quyết định rõ ràng |
| Xóa file/đổi cấu trúc lớn | L0 | A+ | cần phê duyệt trực tiếp |

## Fail-closed gates

Không merge khi: file không mở được, test P0 fail, dữ liệu import làm mất dữ liệu cũ, hoặc telemetry không có nguồn/công thức.

## Cập nhật hiện tại

- PM Edit được đối soát theo commit hợp lệ, không lấy số nhập tay ở từng artifact.
- Tổng vòng lặp 16 được tính từ telemetry artifact; Rework chưa tính khi chưa có log riêng.
- R8 cần được kiểm tra trước mỗi lần chốt số liệu: commit đã push nhưng Dashboard chưa reload/sync thì KPI có thể chưa phản ánh PM Edit mới nhất.

## Telemetry

Tool: Codex · Thời gian người thật: 0.6h · Vòng lặp: 2 · Rework: 1 · PM-edit: 3.
