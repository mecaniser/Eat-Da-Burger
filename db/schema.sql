-- Create the data base 
DROP DATABASE IF EXISTS da_burgers_db;
Create DATABASE da_burgers_db;
USE da_burgers_db;

--  Create the tables and its required fields

CREATE TABLE burgers
(
    id int NOT NULL AUTO_INCREMENT,
    brgr_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    time_stamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    date_time DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY(id)

);