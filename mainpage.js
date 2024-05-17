$(document).ready(function() {
    
    $('.navbar-brand').click(function(){
        window.location.reload();
    });
    $('#apod_navbar').click(function(){
        $.ajax({
            type: "GET",
            url: "api/apiAPOD.php",
            dataType: "json",
            success: function (response) {
                // Kiểm tra xem dữ liệu trả về từ API có tồn tại và hợp lệ không
                if (response && response[0]) {
                    // Lấy dữ liệu từ response
                    var author = response[0].copyright;
                    var date = response[0].date.date;
                    var title = response[0].title;
                    var explanation = response[0].explanation;
                    var imageUrl = response[0].hdurl;
                    //var translate_explanation = response[0].translate_explanation;
            
                    // Cập nhật nội dung của các phần tử HTML trong #img_apod
                    $("#author").text(author);
                    $("#date_post").text(date);
                    $("#title_post").text(title);
                    $("#explanation").text(explanation);
                    $("#img_apod img").attr("src", imageUrl);
                    //$("#explanation_translate").text(translate_explanation);
                } else {
                    console.error("Dữ liệu trả về từ API không hợp lệ hoặc không tồn tại.");
                }
            },
            error: function(xhr, status, error) {
                // Xử lý lỗi nếu có
                console.error("Lỗi khi gửi yêu cầu AJAX: " + error);
            }
        });
    });
});