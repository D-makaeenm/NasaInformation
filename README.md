# Dự Án tạo trang web hiển thị thông tin về thiên văn học

## Giới Thiệu sơ bộ về đề tài
Sử dụng api từ nasa để lấy thông tin về thiên văn học, vũ trụ, ...

## Cơ sở dữ liệu
- Bảng apod (id(PK), copyright, date, explanation, hdurl, media_type, service_version, title, url): Lưu thông tin về bức ảnh
- Bảng MarsRoverPhotos id(PK): Lưu trữ thông tin về các bức ảnh chụp trên sao hỏa có 
- Bảng EONET_infor (Lưu thông tin về các sự kiện): uid(PK), id, title, descriptions, link, closed, date_eonet, magnitudeValue, magnitudeUnit, urls
- Có 7 Store Procedure

## Module đọc dữ liệu
Sử dụng Python và fastapi để lấy dữ liệu từ website nasa

## Mô tả nguồn dữ liệu
- Sử dụng Web Scraping để lấy dữ liệu từ trang API của Nasa
- Dữ liệu bao gồm thông tin về các sự kiện tự nhiên, địa điểm, thời điểm, ảnh chụp sự kiện thiên văn, ảnh chụp sao hỏa,...

## Node-red
Xây dựng flow để tự động gọi api liên tục để lấy dữ liệu. Sau đó xử lý dữ liệu và insert vào db

## Website
- Xây dựng trang web để hiển thị được các thông tin về các sự kiện tự nhiên
- Hiển thị được ảnh APOD (bức ảnh thiên văn trong ngày)
- Sử dụng HTML, CSS, Javascript để thực hiện xây dựng và thiết kế trang web

## Lưu ý
- Chạy uvicorn main:app --reload --port 1234 để lấy api ở port: 1234
- Chạy node-red và import flow.json
- git clone project api của nasa về qua link: https://github.com/nasa/apod-api.git và chạy file application.py

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