var express = require('express');
var bodyParser = require('body-parser');
var app = express();

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
var usuarios = [{
  id: '1',
  nombre: 'Joseba',
  apellido: 'Legarreta',
  edad: 27,
  tipo: 'profesor',
  sexo: 'hombre'
},{
  id: '2',
  nombre: 'Alumno1',
  apellido: 'Apellido1',
  edad: 17,
  tipo: 'alumno',
  sexo: 'mujer'
},{
  id: '3',
  nombre: 'Alumno2',
  apellido: 'Apellido2',
  edad: 47,
  tipo: 'alumno',
  sexo: 'hombre'
}];

app.get('/user', function (req, res) {
  res.send(usuarios)
});

app.get('/user/:id', function (req, res) {
  let id = req.params.id
  const usuario = usuarios.find(function(user) {
    return user.id === ''+id;
  })
  res.send(usuario)
});

app.post('/user', function (req, res) {
  usuarios.push(req.body)
  res.send(usuarios)
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