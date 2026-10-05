# SCOPE-PB01 — Từ điển IT cá nhân

**Phiên bản:** 1.0 · **Chủ sở hữu:** PM/Developer · **Trạng thái:** Baseline

## 1. Mục tiêu

Xây dựng một website chạy được ngay trong trình duyệt để người học lưu, tra cứu và ôn tập thuật ngữ IT bằng tiếng Anh. Sản phẩm ưu tiên nhẹ, riêng tư, không bắt buộc backend và phù hợp dùng như Customer Zero.

## 2. Người dùng và vấn đề

- **Người dùng chính:** người học/người làm IT cần kho thuật ngữ cá nhân.
- **Nỗi đau:** từ nằm rải rác trong ghi chú; khó nhớ nghĩa theo ngữ cảnh; không biết từ nào đang học.
- **Kết quả mong đợi:** tìm được từ trong vài giây, mở chi tiết, đánh dấu trạng thái và ôn bằng flashcard.

## 3. In-scope MVP

1. Thư viện từ vựng, tìm kiếm theo từ/nghĩa/thẻ.
2. Lọc theo lĩnh vực, yêu thích, mới thêm, đang học, đã nắm vững.
3. Thêm/sửa/xóa từ; xem chi tiết và ví dụ song ngữ.
4. Flashcard ôn tập, trộn thẻ, đánh dấu đã nhớ.
5. Import JSON/CSV và export JSON/CSV.
6. Lưu dữ liệu và theme trên thiết bị bằng `localStorage`.
7. Dashboard developer theo dõi 10 artefact và telemetry dự án.

## 4. Out-of-scope

Đăng nhập đa thiết bị, đồng bộ cloud, phát âm audio, thanh toán, phân quyền nhiều người dùng và API GPT tự động.

## 5. Tiêu chí thành công

| KPI | Target | Cách đo |
|---|---:|---|
| Thời gian tìm từ | ≤ 3 giây | Search trên kho 1000 từ |
| Tỉ lệ thao tác chính thành công | ≥ 95% | SIT/UAT |
| Tải trang tĩnh | ≤ 2 giây | DevTools Lighthouse/local |
| Dữ liệu không mất sau refresh | 100% | Reload + kiểm tra localStorage |
| Artefact hoàn tất | 10/10 | Dashboard developer |

## 6. Quyết định nền

MVP là static HTML/CSS/JS, không build step và không phụ thuộc mạng sau khi tải font. Mọi dữ liệu mẫu được xem là dữ liệu demo, không phải dữ liệu cá nhân thật.

## Telemetry

Tool: Codex + VS Code · Token(est): ước tính · Thời gian người thật: 0.5h · Vòng lặp: 1 · Rework: 0 · PM-edit: 1.
