var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mysql = require('./mysql')
var funciones = require('./funciones')

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

app.get('/todo/:id', function (req, res) {
    console.log(req.params.id)
    mysql.getTodo(req.params.id, function(err, todo) {
        console.log(todo)
        res.send(todo)
    })
});

app.put('/todo/:id', function (req, res) {
    mysql.updateTodo(req.params.id, req.body.nombre, req.body.realizado, function(err, todo) {
        console.log(todo)
        res.send(todo)
    })
});

app.get('/todos/realizados', function (req, res) {
    mysql.getTodosRealizados(function(err, todos) {
        res.send(todos)
    })
});

app.get('/holaMundo', function (req, res) {
    res.send('Hola Mundo')
});

app.get('/5', function (req, res) {
    res.send(true)
});

app.get('/dameUnNumero/:numero', function (req, res) {
    res.send(true)
});

app.get('/dameUnNombre/:nombre', function (req, res) {
    res.send(funciones.hola(req.params.nombre))
});
9
app.get('/saluda/:saludo/:nombre', function (req, res) {
    res.send(req.params.saludo + ' ' + req.params.nombre)
});

app.get('/sumar/:a/:b', function (req, res) {
    res.send(''+funciones.sumar(+req.params.a, +req.params.b))
});

app.get('/cualEsMasLargo/:a/:b', function (req, res) {
    res.send(funciones.cualEsMasLargo(req.params.a, req.params.b))
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