use nasa

CREATE TABLE EONET_Events (
	uid int identity(1,1) primary key,
    id NVARCHAR(50),
    title NVARCHAR(255),
	descriptions NVARCHAR(MAX),
    link NVARCHAR(255),
    closed NVARCHAR(50),
    date_eonet DATE,
    magnitudeValue FLOAT,
    magnitudeUnit NVARCHAR(50),
	urls NVARCHAR(255)
);


drop table EONET_Events


CREATE TABLE apod (
    id INT IDENTITY(1,1) PRIMARY KEY,
    copyright NVARCHAR(255),
    date DATE,
    explanation TEXT,
    hdurl NVARCHAR(255),
    media_type NVARCHAR(50),
    service_version NVARCHAR(50),
    title NVARCHAR(255),
    url NVARCHAR(255),
	--translate_explanation ntext
);

drop table apod
drop procedure InsertApodData

CREATE TABLE MarsRoverPhotos (
    id INT PRIMARY KEY,
    sol INT,
    full_name NVARCHAR(255),
    img_src NVARCHAR(MAX),
    total_photos INT,
    earth_date DATE,
    launch_date DATE,
    landing_date DATE
);

--CREATE PROCEDURE SelectAllMarsRoverPhotos
--AS
--BEGIN
--    SET NOCOUNT ON;
--    SELECT * FROM MarsRoverPhotos;
--END;
--GO


--CREATE PROCEDURE InsertApodData
--    @copyright NVARCHAR(255),
--    @date DATE,
--    @explanation TEXT,
--    @hdurl NVARCHAR(255),
--    @media_type NVARCHAR(50),
--    @service_version NVARCHAR(50),
--    @title NVARCHAR(255),
--    @url NVARCHAR(255)
--AS
--BEGIN
--    IF NOT EXISTS (SELECT * FROM apod WHERE date = @date)
--    BEGIN
--        INSERT INTO apod (copyright, date, explanation, hdurl, media_type, service_version, title, url)
--        VALUES (@copyright, @date, @explanation, @hdurl, @media_type, @service_version, @title, @url);
--        PRINT 'Data inserted successfully.';
--    END
--    ELSE
--    BEGIN
--        PRINT 'Data already exists for the given date.';
--    END
--END


--CREATE PROCEDURE GetLatestApodData
--AS
--BEGIN
--    SELECT TOP 1 * 
--    FROM apod
--    ORDER BY date DESC;
--END

--CREATE PROCEDURE [dbo].[GetYesterdayApodData]
--AS
--BEGIN
--    SELECT TOP 1 * 
--    FROM apod
--    WHERE date < CONVERT(date, GETDATE())
--    ORDER BY date DESC;
--END

--CREATE PROCEDURE [dbo].[GetNextApodData]
--    @currentDate DATE
--AS
--BEGIN
--    SELECT TOP 1 * 
--    FROM apod
--    WHERE date > @currentDate
--    ORDER BY date;
--END

--USE [nasa]
--GO
--/****** Object:  StoredProcedure [dbo].[InsertEonetEvents]    Script Date: 17/05/2024 4:42:14 CH ******/
--SET ANSI_NULLS ON
--GO
--SET QUOTED_IDENTIFIER ON
--GO
--CREATE PROCEDURE [dbo].[InsertEonetEvents]
--    @id NVARCHAR(50),
--    @title NVARCHAR(255),
--    @description NVARCHAR(MAX),
--    @link NVARCHAR(255),
--    @closed NVARCHAR(50),
--    @eventDate DATETIME,
--    @magnitudeValue FLOAT,
--    @magnitudeUnit NVARCHAR(50),
--    @longitude FLOAT,
--    @latitude FLOAT
--AS
--BEGIN
--    IF NOT EXISTS (SELECT * FROM EONET_Events WHERE eventDate = @eventDate)
--    BEGIN
--        INSERT INTO EONET_Events (id, title, description, link, closed, eventDate, magnitudeValue, magnitudeUnit, longitude, latitude)
--        VALUES (@id, @title, @description, @link, @closed, @eventDate, @magnitudeValue, @magnitudeUnit, @longitude, @latitude);
--        PRINT 'Data inserted successfully.';
--    END
--    ELSE
--    BEGIN
--        PRINT 'Data already exists for the given date.';
--    END
--END

--create procedure SelectEonetEvents
--    @id NVARCHAR(50),
--    @title NVARCHAR(255),
--    @description NVARCHAR(MAX),
--    @link NVARCHAR(255),
--    @closed NVARCHAR(50),
--    @eventDate DATETIME,
--    @magnitudeValue FLOAT,
--    @magnitudeUnit NVARCHAR(50),
--    @longitude FLOAT,
--    @latitude FLOAT
--AS
--BEGIN
--    SELECT * FROM EONET_Events
--END