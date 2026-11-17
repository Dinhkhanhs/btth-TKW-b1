TIỆM BÁNH BƠ SỮA - WEBSITE
Mở file index.html bằng trình duyệt (cần có mạng để tải font và Google Maps).

CẤU TRÚC
 index.html      Khung trang: header, menu, banner, liên hệ, footer
 css/style.css   Toàn bộ giao diện và màu sắc (đổi màu ở khối :root đầu file)
 js/data.js      Danh sách bánh, giá, nguyên liệu, cách bảo quản
 js/app.js       Chức năng: slideshow, giỏ hàng, tìm kiếm, popup chi tiết
 images/         Nơi bỏ ảnh bánh (xem DANH-SACH-TEN-ANH.txt)

THÊM / SỬA BÁNH: mở js/data.js, chép một dòng trong nhóm tương ứng rồi sửa.
XEM THÀNH PHẦN: bấm vào ảnh hoặc tên bánh để mở popup chi tiết.

LẤY TÊN ẢNH: dưới mỗi bánh có dòng "📷 tên-file". Bấm vào để sao chép tên, tải ảnh về
rồi đặt đúng tên đó (thêm đuôi .jpg/.png/.webp) và bỏ vào thư mục images/.
Xong hết ảnh thì mở js/app.js, đổi SHOW_IMG_NAME=true thành false để ẩn dòng này.
