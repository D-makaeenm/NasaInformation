<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.4/jquery-confirm.min.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.4/jquery-confirm.min.js"></script>
    <script src="https://kit.fontawesome.com/e2cb9211c0.js" crossorigin="anonymous"></script>
    <title>Thông tin về thiên văn học</title>
    <link rel="stylesheet" href="mainpage.css">
    <script src="mainpage.js"></script>
    <script src="test.js"></script>
</head>

<body>
    <div id=body_container>
        <div id="nav_bar">
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#"><img
                            src="https://www.nasa.gov/wp-content/themes/nasa/assets/images/nasa-logo.svg" alt=""></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" id="apod_navbar" aria-current="page" href="#">APOD</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" id="eonet_navbar" href="#">EONET</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li>
                                        <hr class="dropdown-divider">
                                    </li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <div id="mainpage_APOD">
            <div id="title">
                <div id="prev_apod">Ngày hôm qua</div>
                <h1>Bức ảnh thiên văn trong ngày</h1>
                <div id="next_apod">Ngày kế tiếp</div>
                <!-- <input type="date" id="picked_date">
                <button id="sumbit_picked_date">Xem</button> -->
            </div>
            <div id="img_apod">
                <img src="" alt="Chưa load được ảnh">
                <!-- https://apod.nasa.gov/apod/image/2405/WrightDobbs_Georgia_Aurora_2.jpg 16-5-2024 -->
                <div id="explanation_img">
                    <p id="author">Chưa load được tác giả</p>
                    <p id="date_post">Chưa load được ngày chụp</p>
                    <p id="title_post">Chưa load được tiêu đề</p>
                    <p id="explanation">Chưa load được mô tả</p>
                </div>
            </div>
        </div>
        <div id="mainpage_EONET">

        </div>
    </div>
</body>

</html>