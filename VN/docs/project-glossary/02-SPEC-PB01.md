# SPEC-PB01 — Đặc tả chức năng và NFR

## 1. User stories

| ID | User story | Acceptance criteria |
|---|---|---|
| US-01 | Là người học, tôi muốn tìm thuật ngữ | Nhập từ/nghĩa/thẻ; danh sách cập nhật không reload |
| US-02 | Tôi muốn lọc theo tiến độ | Sidebar hiển thị đúng all/favorites/new/learning/mastered |
| US-03 | Tôi muốn xem chi tiết | Click một dòng mở dialog có nghĩa, ví dụ, context, trạng thái |
| US-04 | Tôi muốn thêm từ | Form bắt buộc term + meaning; lưu được sau refresh |
| US-05 | Tôi muốn ôn tập | Flashcard lật được, chuyển thẻ, đánh dấu mastered |
| US-06 | Tôi muốn mang dữ liệu đi | Export JSON/CSV tạo file tải xuống hợp lệ |
| US-07 | Tôi muốn nạp dữ liệu có sẵn | Import JSON/CSV; từ trùng bị bỏ qua và có thông báo |
| US-08 | Tôi muốn tạo chủ đề | Thêm chủ đề mới; topic hiển thị trong Từ điển và nhận term mới |
| US-09 | Tôi muốn làm bài test | Tạo đề 10–15 câu bằng tiếng Anh, gồm nghĩa, phát âm, ngữ cảnh đúng/sai và multi-answer |
| US-10 | Tôi muốn xem kết quả test | Hiển thị số đúng/tổng, đáp án đúng, đáp án sai màu đỏ và đáp án đúng màu xanh |
| US-11 | Tôi muốn theo dõi năng lực | Lưu lịch sử test, thời gian làm, xu hướng sai, mẹo nhớ và biểu đồ điểm |

## 2. NFR

- **Usability:** keyboard focus rõ; `/` focus ô tìm kiếm; dialog có nút đóng.
- **Performance:** không framework runtime; render danh sách theo dữ liệu hiện có; không request API.
- **Privacy:** dữ liệu chỉ ở trình duyệt hiện tại; không gửi dữ liệu lên server.
- **Compatibility:** Chrome/Edge/Safari phiên bản hiện đại; responsive từ 320px.
- **Integrity:** normalize record khi import; không cho lưu thiếu term/meaning.
- **Consistency:** kho test phải lấy dữ liệu trực tiếp từ thư viện; term mới trong thư viện được đưa vào pool test sau khi reload.
- **Traceability:** mỗi PM edit liên quan đến feature phải được gán về SCOPE/SPEC hoặc artefact phù hợp trên Dashboard và Markdown.
- **Vocabulary seed:** thư viện có 15 thuật ngữ Automotive; mỗi term có phát âm, định nghĩa tiếng Anh, nghĩa tiếng Việt có dấu và ví dụ.
- **UI consistency:** các nút cùng nhóm dùng cùng font, kích thước, màu xanh và trạng thái hover.
- **Dashboard status editing:** trong `Check Detail`, PM có thể chuyển artifact giữa `TODO`, `Review` và `Done`; thay đổi cập nhật ngay KPI, tiến độ, bộ lọc và biểu đồ.
- **Status persistence:** trạng thái artifact được lưu trên thiết bị bằng `localStorage` và được khôi phục sau khi reload; nút Reset phải xóa cả trạng thái này.

## 3. Trạng thái dữ liệu

`new` → `learning` → `mastered`; người dùng có thể đổi trạng thái trực tiếp trong chi tiết. `favorite` là cờ độc lập.

## 4. Quy tắc lỗi

Import sai định dạng phải hiện toast; record thiếu `term` bị bỏ qua; JSON không phải array phải dừng import; thao tác xóa phải có confirm.

## Telemetry

Tool: Codex · Thời gian người thật: 0.7h · Vòng lặp: 2 · Rework: 1 · PM-edit: 3.

## PM-edit log

| # | File/section | Loại sửa | Lý do | Ảnh hưởng estimate |
|---:|---|---|---|---:|
| 1 | User stories / Review | Feature | Tách Ôn tập thành các mục chức năng độc lập | +1.0h |
| 2 | User stories / Test | Feature + UI | Bổ sung đề test nhiều dạng và kết quả chi tiết | +2.0h |

## Cập nhật UI và dữ liệu

- Từ điển giữ các nút Nhập dữ liệu, Xuất JSON và Thêm từ.
- Ôn tập ẩn Nhập dữ liệu và Thêm từ; giữ Cài đặt và Xuất JSON với cùng kiểu màu xanh.
- Bài test lấy term trực tiếp từ Thư viện; term Automotive mới được đưa vào pool sau khi reload.
