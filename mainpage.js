var getdateglobal = new Date();
var getdateglobal_unchange;
$(document).ready(function() {
    apod_load();
    $('.navbar-brand').click(function(){
        window.location.reload();
    });
    // $('#sumbit_picked_date').click(function() {
    //     var date_apod  = $('#picked_date').val();
    //     alert(date_apod);
    
    //     // Gửi yêu cầu AJAX đến tệp PHP
    //     var url = "http://127.0.0.1:8000/v1/apod/?concept_tags=True&date=" + date_apod;

    //     $.ajax({
    //         url: url,
    //         type: 'GET',
    //         success: function(response) {
    //             // Xử lý dữ liệu trả về từ API ở đây
    //             console.log(response);
    //         },
    //         error: function(xhr, status, error) {
    //             console.error(status, error);
    //         }
    //     });
    // });
    
    $('#apod_navbar').click(function(){
        apod_load();
        var apod_page = document.getElementById('mainpage_APOD');
        var eonet_page = document.getElementById('mainpage_EONET');
        eonet_page.style.display = "none";
        apod_page.style.display = "block";
    });
    $('#eonet_navbar').click(function(){
        getEonetData();
        var apod_page = document.getElementById('mainpage_APOD');
        var eonet_page = document.getElementById('mainpage_EONET');
        eonet_page.style.display = "block";
        apod_page.style.display = "none";
    });
    $('#prev_apod').click(function(){
        getprevAPOD();
        var next_apod = document.getElementById('next_apod');
        next_apod.style.display = "block";
    });
    $('#next_apod').click(function(){
        var currentDate = $('#date_post').text();
        getnextAPOD(currentDate);
    });
    
    getdateglobal.setDate(getdateglobal.getDate() - 1);
    getdateglobal_unchange = getdateglobal;
    getdateglobal_unchange = getdateglobal_unchange.toISOString().split('T')[0];
    console.log(getdateglobal + "onload");

});


function apod_load() {
    var next_apod = document.getElementById('next_apod');
    next_apod.style.display = "none";
    $.ajax({
        type: "GET",
        url: "api/apiAPOD_getlastest.php",
        dataType: "json",
        success: function (response) {
            if (response && response[0]) {
                var author = response[0].copyright;
                var date = response[0].date.date.split(' ')[0];
                var title = response[0].title;
                var explanation = response[0].explanation;
                var imageUrl = response[0].hdurl;
                var url = response[0].url;

                $("#author").text(author);
                $("#date_post").text(date);
                $("#title_post").text(title);
                $("#explanation").text(explanation);

                if (imageUrl) {
                    $("#img_apod img").attr("src", imageUrl);
                    $("#video_apod").css("display", "none");
                } else {
                    $("#img_apod img").attr("src", "");
                    $("#video_apod source").attr("src", url);
                    $("#video_apod").css("display", "block");
                }
            } else {
                console.error("Dữ liệu trả về từ API không hợp lệ hoặc không tồn tại.");
            }
        },
        error: function (xhr, status, error) {
            console.error("Lỗi khi gửi yêu cầu AJAX: " + error);
        }
    });
}


function getprevAPOD() {
    getdateglobal.setDate(getdateglobal.getDate() - 1);
    var currentDate = getdateglobal.toISOString().split('T')[0];
    console.log(getdateglobal +"glb prev" );
    console.log(getdateglobal_unchange +"glb_u prev" );
    alert(currentDate);
    if(currentDate === "2024-05-16"){
        var next_apod1 = document.getElementById('prev_apod');
        next_apod1.style.display = "none";
    }
    $.ajax({
        type: "GET",
        url: "api/apiAPOD_getprev.php",
        dataType: "json",
        data: { current_date: currentDate },
        success: function (response) {
            // Kiểm tra xem dữ liệu trả về từ API có tồn tại và hợp lệ không
            if (response && response[0]) {
                // Lấy dữ liệu từ response
                var author = response[0].copyright;
                var date = response[0].date.date.split(' ')[0];
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
}

function getnextAPOD(){
    getdateglobal.setDate(getdateglobal.getDate() + 1); // Cập nhật ngày trước khi sử dụng nó
    // var currentDatex = new Date(getdateglobal.getTime() + (24 * 60 * 60 * 1000)).toISOString().split('T')[0];
    var currentDatex = getdateglobal.toISOString().split('T')[0];
    console.log(getdateglobal + "glb next");
    console.log(currentDatex + "cr next");
    if(currentDatex === getdateglobal_unchange){
        var next_apod1 = document.getElementById('next_apod');
        next_apod1.style.display = "none";
        var prev_apod1 = document.getElementById('prev_apod');
        prev_apod1.style.display = "block";
    }
    $.ajax({
        type: "GET",
        url: "api/apiAPOD_getnext.php",
        dataType: "json",
        data: { current_date: currentDatex },
        success: function (response) {
            if (response && response[0]) {
                var author = response[0].copyright;
                var date = response[0].date.date.split(' ')[0];
                var title = response[0].title;
                var explanation = response[0].explanation;
                var imageUrl = response[0].hdurl;

                // Cập nhật nội dung trên trang web
                $("#author").text(author);
                $("#date_post").text(date);
                $("#title_post").text(title);
                $("#explanation").text(explanation);
                $("#img_apod img").attr("src", imageUrl);
            } else {
                console.error("Dữ liệu trả về từ API không hợp lệ hoặc không tồn tại.");
            }
        },
        error: function(xhr, status, error) {
            console.error("Lỗi khi gửi yêu cầu AJAX: " + error);
        }
    });
}

function getEonetData() {
    fetch('http://localhost/nasaInformation/api/apigetDataEonet.php')
        .then(response => response.json())
        .then(data => {
            displayEventData(data);
        })
        .catch(error => {
            console.error('Error fetching event data:', error);
        });
}

function displayEventData(events) {
    const tableBody = document.querySelector('#table_eonet table tbody');
    if (!tableBody) {
        console.error('Table body not found');
        return;
    }

    tableBody.innerHTML = ''; // Xóa nội dung cũ

    events.forEach(event => {
        const row = `
            <tr>
                <td>${event.id}</td>
                <td>${event.title}</td>
                <td>${event.descriptions}</td>
                <td>${event.link ? '<a href="' + event.link + '">More info</a>' : ''}</td>
                <td>${event.closed}</td>
                <td>${event.date_eonet}</td>
                <td>${event.magnitudeValue}</td>
                <td>${event.magnitudeUnit}</td>
                <td>${event.urls ? '<a href="' + event.urls + '">More info</a>' : ''}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}
