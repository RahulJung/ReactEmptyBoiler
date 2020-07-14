const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'todolist'
});

const API_KEY = 'myAPIkey';


module.exports = { connection, API_KEY };
