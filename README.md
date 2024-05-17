# Dự Án tạo trang web hiển thị thông tin về thiên văn học

## Giới Thiệu sơ bộ về đề tài
Sử dụng api từ nasa để lấy thông tin về thiên văn học, vũ trụ, ...

## Cơ sở dữ liệu
- Bảng apod (id, copyright, date, explanation, hdurl, media_type, service_version, title, url) Lưu thông tin về bức ảnh
- SP: GetLatestApodData, GetNextApodData, GetYesterdayApodData lấy thông tin về apod và nút prev, next
- Bảng EONET_infor (Lưu thông tin về các sự kiện): event_id(PK), title, description, link, event_date
- Stored Procedures: SP_get5nearestenvent: Lấy thông tin về 5 sự kiện tự nhiên xảy ra gần đây nhất

## Module đọc dữ liệu
Sử dụng Python và fastapi để lấy dữ liệu từ website nasa

## Mô tả nguồn dữ liệu
- Sử dụng Web Scraping hoặc lấy dữ liệu qua API của các trang web chuyên về bóng đá.
- Dữ liệu bao gồm thông tin về các sự kiện tự nhiên, địa điểm, thời điểm

## Node-red
Xây dựng flow để tự động gọi api liên tục để lấy dữ liệu. Sau đó xử lý dữ liệu và insert vào db

## Website
- Xây dựng trang web để hiển thị được các thông tin về các sự kiện tự nhiên
- Hiển thị được ảnh APOD (bức ảnh thiên văn trong ngày)
- Sử dụng HTML, CSS, Javascript để thực hiện xây dựng và thiết kế trang web

## Lưu ý
- Chạy uvicorn main:app --reload --port 1234 để lấy api ở port: 1234
- Chạy node-red và import flow.json
- git clone project api của nasa về qua link: https://github.com/nasa/apod-api.git

## Cập Nhật
Nếu có bất kỳ vấn đề hoặc yêu cầu nâng cấp, vui lòng tạo một issue mới trong repository này.

## Tác Giả
- Họ và Tên: [D-makaeenm](https://github.com/D-makaeenm)
- Email: k2005480106010@tnut.edu.vn
- Mssv: K205480106010
- Lớp: 56KMT
- Môn học: Lập trình Python

## Giấy Phép
Không có giấy phép.

## Thông tin về bản quyền sở hữu
- Có thể xem tại: https://api.nasa.gov/

## Image
![Sơ đồ quy trình đơn giản](https://i.imgur.com/yeGfFZF.png)