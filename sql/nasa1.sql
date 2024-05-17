use nasa

CREATE TABLE events (
    event_id nvarchar(20) PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    link VARCHAR(255),
    event_date DATE
);
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

