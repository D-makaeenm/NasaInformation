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
        var MRP_page = document.getElementById('mainpage_MRP');
        eonet_page.style.display = "none";
        apod_page.style.display = "block";
        MRP_page.style.display = "none";
    });
    $('#eonet_navbar').click(function(){
        getEonetData();
        var apod_page = document.getElementById('mainpage_APOD');
        var eonet_page = document.getElementById('mainpage_EONET');
        eonet_page.style.display = "block";
        apod_page.style.display = "none";
        var MRP_page = document.getElementById('mainpage_MRP');
        MRP_page.style.display = "none";
    });
    $('#MRP_navbar').click(function(){
        getMRP();
        var apod_page = document.getElementById('mainpage_APOD');
        var eonet_page = document.getElementById('mainpage_EONET');
        eonet_page.style.display = "none";
        apod_page.style.display = "none";
        var MRP_page = document.getElementById('mainpage_MRP');
        MRP_page.style.display = "block";
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
    
    // getdateglobal.setDate(getdateglobal.getDate() - 1);
    getdateglobal_unchange = getdateglobal;
    getdateglobal_unchange = getdateglobal_unchange.toISOString().split('T')[0];
    console.log(getdateglobal + "onload");

});

function getMRP(){
    $.ajax({
        url: 'api/apigetMPR.php',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            // Xử lý dữ liệu trả về
            displayData(data);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching data:', error);
        }
    });

    function displayData(data) {
        // Xóa nội dung cũ của bảng
        $('#photoTable tbody').empty();

        // Thêm dữ liệu vào bảng
        $.each(data, function(index, photo) {
            var row = `<tr>
                <td>${photo.id}</td>
                <td>${photo.sol}</td>
                <td>${photo.full_name}</td>
                <td><img src="${photo.img_src}" alt="Mars Rover Photo" style="width: 100px;"></td>
                <td>${photo.total_photos}</td>
                <td>${photo.earth_date}</td>
                <td>${photo.launch_date}</td>
                <td>${photo.landing_date}</td>
            </tr>`;
            $('#photoTable tbody').append(row);
        });
    }
}

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
                var videoUrl = response[0].url;

                $("#author").text(author);
                $("#date_post").text(date);
                $("#title_post").text(title);
                $("#explanation").text(explanation);
                var iframe = document.querySelector('#video_apod iframe');
                iframe.setAttribute('src', videoUrl);
                if (imageUrl !== null) {
                    var element = document.getElementById('video_apod');
                    element.style.display = "none";
                    $("#img_apod img").attr("src", imageUrl);
                } else {
                    var element = document.getElementById('video_apod');
                    element.style.display = "block";
                    $("#img_apod img").css("display", "none");
                }
            } else {
                console.error("Dữ liệu trả về từ API không hợp lệ hoặc không tồn tại.");
            }
        },
        error: function (xhr, status, error) {
            console.error("Lỗi khi gửi yêu cầu AJAX: " + error);
            console.log("Dữ liệu JSON trả về từ máy chủ: ", xhr.responseText);
        }
    });
}


function getprevAPOD() {
    getdateglobal.setDate(getdateglobal.getDate() - 1);
    var currentDate = getdateglobal.toISOString().split('T')[0];
    console.log(getdateglobal +"glb prev" );
    console.log(getdateglobal_unchange +"glb_u prev" );
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
                var videoUrl = response[0].url;
                //var translate_explanation = response[0].translate_explanation;
        
                // Cập nhật nội dung của các phần tử HTML trong #img_apod
                $("#author").text(author);
                $("#date_post").text(date);
                $("#title_post").text(title);
                $("#explanation").text(explanation);
                $("#img_apod img").attr("src", imageUrl);
                var iframe = document.querySelector('#video_apod iframe');
                iframe.setAttribute('src', videoUrl);
                var element = document.getElementById('video_apod');
                var element1 = document.getElementById('img_apod_in');
                if (imageUrl !== null) {
                    $("#img_apod img").attr("src", imageUrl);
                    element.style.display = "none";
                    element1.style.display = "block";
                } else {
                    element.style.display = "block";
                    element1.style.display = "none";
                }
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
                var videoUrl = response[0].url;

                // Cập nhật nội dung trên trang web
                $("#author").text(author);
                $("#date_post").text(date);
                $("#title_post").text(title);
                $("#explanation").text(explanation);
                $("#img_apod img").attr("src", imageUrl);
                var iframe = document.querySelector('#video_apod iframe');
                iframe.setAttribute('src', videoUrl);
                var element = document.getElementById('video_apod');
                var element1 = document.getElementById('img_apod_in');
                if (imageUrl !== null) {
                    $("#img_apod img").attr("src", imageUrl);
                    element.style.display = "none";
                    element1.style.display = "block";
                } else {
                    element.style.display = "block";
                    element1.style.display = "none";
                }
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
