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
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', '*');

  // Pass to next layer of middleware
  next();
});

app.get('/todo', function (req, res) {
    console.log(req.get('token'));
    mysql.getTodoListByToken(req.get('token'), function(err, tareas) {
    res.send(tareas)
  })
});

app.get('/todo/:id', function (req, res) {
    console.log(req.params.id)
    console.log(req.get('token'))
    mysql.getTodoByToken(req.get('token'), req.params.id, function(err, todo) {
        console.log(todo)
        res.send(todo)
    })
});

app.post('/todo', function (req, res) {
    console.log('HOLA');
    console.log(req.body);
    mysql.getIdUserByToken(req.get('token'), function(err, idUser) {
        const nombre = req.body.nombre
        const realizado = req.body.realizado
        mysql.createTodo(nombre, realizado, idUser, function(err, todo) {
            res.send(todo)
        })
    })
});

app.put('/todo/:id', function (req, res) {
    mysql.getIdUserByToken(req.get('token'), function(err, idUser) {
        const nombre = req.body.nombre
        const realizado = req.body.realizado
        mysql.updateTodo(req.params.id, nombre, realizado, idUser, function(err, todo) {
            console.log(todo)
            res.send(todo)
        })
    })
});

app.delete('/todo/:id', function (req, res) {
    console.log('hemen borrar');
    mysql.getIdUserByToken(req.get('token'), function(err, idUser) {
        if (!idUser) return res.send(404)
        mysql.deleteTodo(req.params.id, idUser,  function(err, data) {
            res.send(data)
        });
    })
});

app.get('/todo/funciones/cambiarARealizados', function (req, res) {
    mysql.cambiarARealizados(function(err, todos) {
        res.send(todos)
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
    mysql.getUser(req.params.id, function(err, user) {
        res.send(user)
    })
});

app.get('/user', function (req, res) {
    mysql.getUsers(function(err, users) {
        res.send(users)
    })
});

app.post('/user', function (req, res) {
    mysql.createUser(req.body.nombre, req.body.apellido, req.body.password, req.body.idioma, req.body.edad, req.body.activo, function(err, users) {
        res.send(users)
    })
});

app.put('/user/:id', function (req, res) {
    mysql.updateUser(req.params.id, req.body.nombre, req.body.apellido, req.body.password, req.body.idioma, req.body.edad, req.body.activo, function(err, data) {
        res.send(data)
    })});

app.patch('/user/:id', function (req, res) {
  // ESTÁ VACÍO
});

app.delete('/user/:id', function (req, res) {
    mysql.deleteUser(req.params.id, function(err, data) {
        res.send(data)
    });
});

app.get('/user/funciones/edadMedia', function (req, res) {
    mysql.edadMedia(function(err, data) {
        res.send(data)
    });
});

app.get('/user/funciones/usuariosActivosPorIdioma', function (req, res) {
    mysql.activosPorIdioma(function(err, data) {
        res.send(data)
    });
});

app.get('/user/funciones/usuariosPorIdioma', function (req, res) {
    mysql.porIdioma(function(err, data) {
        res.send(data)
    });
});

app.get('/user/funciones/mayores', function (req, res) {
    mysql.mayoresEdad(function(err, data) {
        res.send(data)
    });
});

app.post('/login', function (req, res) {
    console.log(req.body)
    console.log(req.body)
    mysql.getUserByNombre(req.body.nombre, function(err, user) {
        console.log(user);
        if (!user) {
            res.status(404).send('User not found');
        } else {
            if (funciones.compararContraseñas(req.body.password, user.Password)) {
                const sesion = funciones.crearSesion(user.Id, true)
                mysql.guardarSesionBBDD(sesion, function(err, data) {
                   if (!err) res.send(sesion)
                })
            } else {
                res.status(500).send('Password error');
            }
        }
    });
});

app.get('/userByToken/:token', function (req, res) {
    const token = req.params.token
    mysql.buscarSesionActiva(token, function(err, sesion) {
        console.log('Info de sesión:')
        console.log(sesion);
        // console.log(sesion.fechaLimite, typeof sesion.fechaLimite);
        // console.log(sesion.fechaLimite.getTime());
        if (!sesion) {
            res.status(404).send('Session not found');
        } else if (!funciones.esMayorFecha(sesion.fechaLimite)) {
            res.status(401).send('Session has expired');
        } else {
            mysql.buscarUsuarioPorSesion(token, function(err, user) {
                res.send(user)
            })
        }
    })
})

app.get('/logout/:token', function (req, res) {
    const token = req.params.token
    mysql.cerrarSesion(token, function(err, respuesta) {
        res.send(respuesta)
    })
})

app.post('/friends', function (req, res) {
    const idFriend = req.body.idFriend
    mysql.getIdUserByToken(req.get('token'), function (err, idUser) {
        mysql.createFriend(idUser, idFriend, function (err, result) {
            res.send(result)
        })
    })
})

app.delete('/friends/:idFriend', function (req, res) {
    const idFriend = req.params.idFriend
    mysql.getIdUserByToken(req.get('token'), function (err, idUser) {
        mysql.deleteFriend(idUser, idFriend, function (err, result) {
            res.send(result)
        })
    })
})

app.get('/friends', function (req, res) {
    mysql.getIdUserByToken(req.get('token'), function (err, idUser) {
        mysql.getFriends(idUser, function (err, result) {
            res.send(result)
        })
    })
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});