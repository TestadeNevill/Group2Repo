-- Drops the todolist if it exists currently --

-- Creates the "todolist" database --
USE vbkjhgumbw9uqm0w;
DROP TABLE IF exists Products;

CREATE TABLE  Products (
id int NOT NULL AUTO_INCREMENT,
Item_Name varchar(255) NOT NULL,
Item_Number int NOT NULL,
Item_Image BLOB DEFAULT NULL,
Unit_Price int NOT NULL,
Quantity int NOT NULL,
Store_ID Int NOT NULL,
PRIMARY KEY(id),
FOREIGN KEY(id) REFERENCES Users (id)
);

