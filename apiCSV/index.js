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
var fs = require("fs");
var csv = require("csv");

const User = require('./user')
var usuarios = [];

function cargarUsuarios(callback) {
  var readStream = fs.createReadStream("usuarios.csv")
  var csvStream = csv.parse()
  usuarios = []

  csvStream.on("data", function(data) {
    const user = new User(data[0], data[1],data[2], data[3], data[4])
    usuarios.push(user)
  })
  .on("end", function() {
    return callback()
  })
  .on("error", function(error) {
      console.log(error)
  });
  readStream.pipe(csvStream);
}

function guardarUsuarios(callback) {
  var writeStream = fs.createWriteStream("usuarios.csv");
  for (const user of usuarios) {
    writeStream.write(user.getCSV());
  };
  return callback()
}

app.get('/user', function (req, res) {
  cargarUsuarios(function() {
    res.send(usuarios)
  })
});

app.get('/user/:id', function (req, res) {
  let id = req.params.id; 
  cargarUsuarios(function() {
    const newUser = new User(req.body.id, req.body.nombre ,req.body.apellido , req.body.contraseña, req.body.edad)
    const usuario = usuarios.find(function(user) {
      return ''+user.getId() === ''+id;
    })
    res.send(usuario)
  })
});

app.post('/user', function (req, res) {
  cargarUsuarios(function() {
    const newUser = new User(req.body.id, req.body.nombre ,req.body.apellido , req.body.contraseña, req.body.edad)
    usuarios.push(newUser)
    guardarUsuarios(function() {
      res.send(usuarios)
    })
  })
});

app.put('/user/:id', function (req, res) {
  let id = req.params.id;
  cargarUsuarios(function() {
    const newUser = new User(req.body.id, req.body.nombre ,req.body.apellido , req.body.contraseña, req.body.edad)
    let indice = usuarios.findIndex(function(user) {
      return ''+user.getId() === ''+id;
    });
    usuarios[indice] = newUser
    guardarUsuarios(function() {
      res.send(usuarios)
    })
  })
});

app.patch('/user/:id', function (req, res) {
  let id = req.params.id;
  cargarUsuarios(function() {
    const newUser = new User(req.body.id, req.body.nombre ,req.body.apellido , req.body.contraseña, req.body.edad)
    let indice = usuarios.findIndex(function(user) {
      return ''+user.getId() === ''+id;
    });
    for(let key in req.body) {
      usuarios[indice].set(key, req.body[key])
    }
    guardarUsuarios(function() {
      res.send(usuarios)
    })
  })
});

app.delete('/user/:id', function (req, res) {
  let id = req.params.id;
  cargarUsuarios(function() {
    const newUser = new User(req.body.id, req.body.nombre ,req.body.apellido , req.body.contraseña, req.body.edad)
    let indice = usuarios.findIndex(function(user) {
      return ''+user.getId() === ''+id;
    });
    usuarios.splice(indice, 1);
    guardarUsuarios(function() {
      res.send(usuarios)
    })
  })
});

app.post('/user/login', function (req, res) {
  let login = req.body
  cargarUsuarios(function() {
    const newUser = new User(req.body.id, req.body.nombre ,req.body.apellido , req.body.contraseña, req.body.edad)
    const usuario = usuarios.find(function(user) {
      return ''+user.getNombre() === ''+login.nombre;
    })
    res.send(''+usuarios[indice].getContraseña() === ''+login.contraseña);
  })

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});