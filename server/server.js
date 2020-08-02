const express = require('express');
const path = require('path');
const mysql = require('mysql');
const app = express();
const query = require('../db/query');
app.use(express.json());
const port = 7000;
//this is a middleware
app.use(express.static(path.join('__dirname', '../client/dist')));

app.get('/tasks', (req, res) => {
    query.getTask((err, data) => {
        if(err) {
            res.sendStatus(500)
        } else {
            res.send(data)
        }
    });
});

app.post('/task', (req, res) => {
    query.postTask(req.body.task, (err, data) => {
        if(err) {
            res.sendStatus(500)
        } else {
            res.send(data);
        }
    })

})

app.delete('/tasks/:id', (req, res) => {
    query.deleteTask(req.params.id, (err, data) => {
        if(err){
            res.sendStatus(500)
        } else {
            res.send(data)
        }
    })
})

app.listen(port, () => {
    console.log(`Connected to ${port}`);
})