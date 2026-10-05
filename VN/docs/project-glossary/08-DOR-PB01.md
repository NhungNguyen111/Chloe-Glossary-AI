# DOR-PB01 — Definition of Ready

Một task chỉ được đưa vào build khi có đủ:

- Mục tiêu và người dùng rõ ràng.
- Acceptance criteria kiểm thử được.
- Module phụ trách và dependency đã chỉ ra.
- Ước lượng O/M/P hoặc lý do task nhỏ hơn 30 phút.
- Rủi ro chính và leash phù hợp đã được ghi.
- Dữ liệu mẫu/fixture hoặc cách tạo evidence đã sẵn sàng.

## Walking skeleton của project

`Mở trang → tìm “API” → click một term → xem nghĩa → đổi status → refresh vẫn còn dữ liệu.`

Đây là lát cắt tối thiểu để chứng minh hệ thống có giá trị trước khi làm import/export và dashboard.

## Checklist trước build

- [ ] Có link hoặc tên file artefact đầu vào.
- [ ] Có owner và trạng thái.
- [ ] Không chứa yêu cầu ngoài scope.
- [ ] Có cách verify bằng tay hoặc test case.

## Cập nhật acceptance hiện tại

- [ ] Nếu thêm term seed, có domain, phát âm, định nghĩa tiếng Anh, nghĩa tiếng Việt có dấu và ví dụ.
- [ ] Nếu thay đổi Ôn tập, có test cho sidebar, flashcard, bài test và kết quả từng câu.
- [ ] Nếu thay đổi telemetry, có nguồn dữ liệu và công thức; không dùng số mẫu không có evidence.
- [ ] Nếu thay đổi PM Edit, artifact Markdown và Dashboard cùng phản ánh commit tương ứng.
- [ ] `Check Detail` cho phép chuyển artifact giữa `TODO`, `Review` và `Done`; reload vẫn giữ trạng thái và Reset xóa được trạng thái đã lưu.

## Telemetry

Tool: Codex · Thời gian người thật: 0.3h · Vòng lặp: 1 · Rework: 0 · PM-edit: 1.
