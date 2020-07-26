const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
const { postTask, getTasks, deleteTask } = require('../db/query');

app.use(express.static(path.join(__dirname, '../client/dist/')));
app.use(express.json());

app.get('/api/tasks', (req, res) => {
  getTasks((err, data) => {
    if (err) {
      console.log('problem getting tasks from server');
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/tasks', (req, res) => {
  postTask(req.body.task, (err, data) => {
    if (err) {
      console.log('problem attempting to post task in server');
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  });
});

app.delete('/api/tasks/:id', (req, res) => {
  deleteTask(req.params.id, (err, data) => {
    if (err) {
      console.log('problem deleting task in server');
      res.sendStatus(500);
    } else {
      res.send(data);
    }
  })
});

app.listen(port, () => {
  console.log(`connected to port ${port}`);
});
