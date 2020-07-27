const { connection } = require('./config');

connection.connect(err => {
  if (err) {
    console.log("couldn't connect to database", err);
  } else {
    console.log('connected to MySQL database');
  }
});

const getTasks = (callback) => {
  connection.query('SELECT * FROM tasks', (err, data) => {
    if (err) {
      console.log('problem getting all tasks in query');
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const postTask = (task, callback) => {
  // the task input comes from the user so it must be sanitized to protect our db
  connection.query('INSERT INTO tasks (task) VALUES (?)', [task], (err, data) => {
    if (err) {
      console.log('problem posting task in query');
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const deleteTask = (id, callback) => {
  connection.query('DELETE FROM tasks WHERE id = ?', [id], (err, data) => {
    if (err) {
      console.log('problem deleting task in query');
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {postTask, getTasks, deleteTask};
