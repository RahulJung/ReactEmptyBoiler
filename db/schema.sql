DROP DATABASE IF EXISTS todolist;

CREATE DATABASE todolist;
USE todolist;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task VARCHAR(255) NOT NULL
);

INSERT INTO TASKS (task) VALUES ('thank Ben for his time');
INSERT INTO TASKS (task) VALUES ('get React event handlers down');
INSERT INTO TASKS (task) VALUES ('pass the TA');
