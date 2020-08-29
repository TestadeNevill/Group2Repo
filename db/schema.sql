-- Drops the todolist if it exists currently --

-- Creates the "todolist" database --

CREATE TABLE Products (
id int NOT NULL AUTO_INCREMENT,
name varchar(255) NOT NULL,
type varchar(255) NOT NULL,
sold BOOLEAN DEFAULT false,
PRIMARY KEY(id),
FOREIGN KEY(Users.id)
);
