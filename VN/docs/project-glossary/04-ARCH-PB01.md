# ARCH-PB01 — Kiến trúc MVP

## Sơ đồ

```text
Browser
 ├─ VN/glossary/index.html  (người dùng)
 ├─ VN/glossary/styles.css  (design tokens + responsive UI)
 └─ VN/glossary/app.js      (state, render, events, persistence)
          │
          └─ localStorage: glossary-terms-v1 / glossary-theme-v1

Developer
 └─ VN/project-dashboard.html (dashboard nội bộ, dữ liệu telemetry cục bộ)
```

## Data contract

```json
{
  "id": "term-001",
  "term": "idempotency",
  "meaning_vi": "tính chống lặp",
  "domains": ["Backend", "API"],
  "roles": ["Developer"],
  "difficulty": "Intermediate",
  "status": "learning",
  "favorite": false,
  "updated_at": "2026-10-05T00:00:00.000Z"
}
```

## Quyết định kỹ thuật

- Static-first để copy thư mục là chạy được.
- DOM rendering thuần JS để giảm dependency và dễ audit.
- `dialog` native cho detail/settings/form.
- Dashboard dùng SVG/CSS/JS thuần; không cần chart library.

## Cập nhật hiện tại

- `app.js` seed thêm 15 term Automotive và migrate nghĩa tiếng Việt có dấu cho seed cũ.
- Dashboard ưu tiên dữ liệu commit GitHub cho PM Edit; khi API không truy cập được, dùng fallback local đã kiểm chứng.
- Telemetry không tự đặt giờ, rework hoặc AI adoption; thiếu dữ liệu thì hiển thị `—`.

## Rủi ro kiến trúc

LocalStorage có giới hạn dung lượng và chỉ theo origin; nếu cần multi-device sẽ thay bằng API + database ở phase sau.

## Telemetry

Tool: Codex · Thời gian người thật: 0.6h · Vòng lặp: 2 · Rework: 1 · PM-edit: 2.
