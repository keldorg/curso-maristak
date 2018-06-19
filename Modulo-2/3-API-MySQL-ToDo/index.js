var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('./mysql')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Pass to next layer of middleware
  next();
});

app.get('/todo', function (req, res) {
  mysql.getTodoList(function(err, usuarios) {
    res.send(usuarios)
  })
});

app.get('/user/:id', function (req, res) {
  // ESTÁ VACÍO
});

app.post('/user', function (req, res) {
  // ESTÁ VACÍO
});

app.put('/user/:id', function (req, res) {
  // ESTÁ VACÍO
});

app.patch('/user/:id', function (req, res) {
  // ESTÁ VACÍO
});

app.delete('/user/:id', function (req, res) {
  // ESTÁ VACÍO
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});