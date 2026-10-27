# TOEIC 12W – Lộ trình TOEIC 4 kỹ năng

Site tĩnh (HTML/CSS/JS thuần), không cần build, chạy được trên GitHub Pages.
Mục tiêu: Listening & Reading 700/990, Speaking & Writing 300/400.

## Cấu trúc

```
toeic-roadmap/
├─ index.html              Trang chủ: lộ trình 12 tuần + tiến độ
├─ data/roadmap.js         Danh sách 84 ngày + mảng `ready` (bài đã xuất bản)
├─ assets/style.css        Giao diện dùng chung (có dark mode)
├─ assets/app.js           Logic: render lộ trình, tiến độ, quiz, điều hướng bài
└─ lessons/
   ├─ _template.html       Mẫu bài mới
   ├─ day01.html           Ngày 1
   └─ day02.html           Ngày 2
```

## Thêm bài mới (mỗi ngày)

1. Sao chép `lessons/_template.html` thành `lessons/dayNN.html` (NN = số ngày, 2 chữ số).
2. Sửa `data-day`, tiêu đề, nội dung và `window.QUIZ`.
3. Thêm số ngày vào mảng `ready` trong `data/roadmap.js`, ví dụ `ready: [1, 2, 3]`.
4. Commit và push, GitHub Pages sẽ tự cập nhật.

## Đưa lên GitHub Pages

1. Tạo repo mới, đẩy toàn bộ nội dung thư mục `toeic-roadmap/` lên nhánh `main`.
2. Vào **Settings → Pages**, chọn *Deploy from a branch*, nhánh `main`, thư mục `/ (root)`.
3. Mở địa chỉ `https://<tên-bạn>.github.io/<tên-repo>/`.

## Ghi chú

- Tiến độ lưu bằng `localStorage` của từng trình duyệt/thiết bị (không đồng bộ giữa máy).
- Nội dung là tài liệu tự soạn theo định dạng TOEIC, không phải đề thi thật của ETS.
