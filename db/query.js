const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'student',
    password: '5754',
    database: 'todolist'
});

connection.connect(err => {
    if (err) {
      console.log("couldn't connect to database", err);
    } else {
      console.log('connected to MySQL database');
    }
  });

  const getTask = (cb) => {
    connection.query('SELECT * FROM tasks', 
    (err, data) => {
      if(err) {
        console.log("err in getTask");
        cb(err, null)
      } else {
        cb(null, data)
      }
    });
  }

    const postTask = (task, cb) => {
      connection.query(`INSERT INTO tasks (task) VALUES ('${task}')`, (err, data) => {
        if(err) {
          console.log("err in  postTask");
          cb(err, null);
        } else {
          cb(null, data)
        }
      });
    };

    const deleteTask = (id, cb) => {
      connection.query("DELETE FROM tasks WHERE id = ?", [id], (err, data) => {
        if(err) {
          console.log("err in  deleteTask");
          cb(err, null);
        } else {
          cb(null, data)
        }
      })
    };


  module.exports = { getTask, postTask, deleteTask};