DROP DATABASE IF EXISTS todolist;

CREATE DATABASE todolist;
USE todolist;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task VARCHAR(255) NOT NULL
);

INSERT INTO tasks (task) VALUES ('thank Ben for his help'),
  ('get React event handlers down'),
  ('ace the TA');
