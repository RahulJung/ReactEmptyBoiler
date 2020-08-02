DROP DATABASE IF EXISTS todolist;

CREATE DATABASE todolist;

USE todolist;

CREATE TABLE tasks (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(255) NOT NULL
);

INSERT INTO tasks (task)
VALUES ('thanks ben'),
('get react event handles'),
('ace the TA');