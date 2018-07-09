var mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "keldor",
  password: "password",
  // database: "todo"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE DATABASE IF NOT EXISTS todo", function (err, result) {
    //if (err) throw err;
      console.log("Database created todo");

    createTodoTable(function() {
      console.log('TERMINADO')
    })
  });
});

function createTodoTable(callback) {
  var sql = "CREATE TABLE IF NOT EXISTS todo.todo (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(255), realizado BOOLEAN)";
  con.query(sql, function (err, result) {
    //if (err) throw err;
    seedTodoTable(function() {
      return callback()
    })
  });
}

function seedTodoTable(callback) {
  getTodoList(function(err, result) {
    if (result.length === 0) {
      var todoList = [[
        'Realizar la compra', false
      ],[
        'Sacar al perro', false
      ],[
        'Coger cita medico', true
      ]]
      var sql = "INSERT INTO todo.todo (nombre, realizado) VALUES ?";
      con.query(sql, [todoList], function (err, result) {
        if (err) throw err;
        console.log("database fetched!");
        return callback()
      });
    } else {
      return callback()
    }
  })
}

function getTodoList(callback) {
  con.query("SELECT * FROM todo.todo", function (err, result, fields) {
    if (err) return callback(err);
    return callback(null, result)
  });
}

function getTodo(id, callback) {
    console.log(id)
    con.query("SELECT * FROM todo.todo WHERE id = " + id, function (err, result, fields) {
        if (err) return callback(err);
        return callback(null, result)
    });
}

function getTodosRealizados(callback) {
    con.query("SELECT * FROM todo.todo WHERE realizado = 1", function (err, result, fields) {
        if (err) return callback(err)
        return callback(null, result)
    });
}

function updateTodo(id, nombre, realizado, callback) {
    var sentencia = "UPDATE todo.todo SET nombre = '" + nombre + "', realizado = " +
        realizado +" WHERE id = " + id
    console.log(sentencia)
    con.query(sentencia, function (err, result, fields) {
        if (err) return callback(err)
        return callback(null, result)
    });
}

function createTodo(nombre, realizado, callback) {
    con.query("SELECT * FROM todo.todo WHERE realizado = 1", function (err, result, fields) {
        if (err) return callback(err)
        return callback(null, result)
    });
}

function cambiarARealizados(callback) {
    con.query("UPDATE todo.todo SET realizado=1 WHERE realizado=0", function (err, result, fields) {
        if (err) return callback(err)
        return callback(null, result)
    });
}

function getUser(id, callback) {
    con.query("SELECT * FROM todo.usuarios WHERE id = " + id, function (err, result, fields) {
        if (err) return callback(err);
        return callback(null, result)
    });
}

function getUsers(callback) {
    con.query("SELECT * FROM todo.usuarios", function (err, result, fields) {
        if (err) return callback(err);
        return callback(null, result)
    });
}

function createUser(nombre, apellido, password, idioma, edad, activo, callback) {
    const sentencia = `INSERT INTO todo.usuarios (nombre, apellido, password, idioma, edad, activo) 
    VALUES ('${nombre}', '${apellido}', '${password}', '${idioma}', ${edad}, ${activo})`
    con.query(sentencia, function (err, result, fields) {
        console.log(err);
        if (err) return callback(err);
        return callback(null, result)
    });
}

function updateUser(id, nombre, apellido, password, idioma, edad, activo, callback) {
    const sentencia = `UPDATE todo.usuarios  SET nombre='${nombre}', password='${password}', apellido='${apellido}', idioma='${idioma}', edad=${edad}, activo=${activo} 
    WHERE id=${id}`
    con.query(sentencia, function (err, result, fields) {
        if (err) return callback(err);
        return callback(null, result)
    });
}

function deleteUser(id, callback) {
    const sentencia = `DELETE FROM todo.usuarios WHERE id = ${id}`
    con.query(sentencia, function (err, result, fields) {
        if (err) return callback(err);
        return callback(null, result)
    });
}

function edadMedia(callback) {
    const sentencia = `SELECT AVG(edad) FROM todo.usuarios`
    con.query(sentencia, function (err, result, fields) {
        if (err) return callback(err);
        return callback(null, result)
    });
}

function activosPorIdioma(callback) {
    const sentencia = `SELECT idioma, COUNT(*) from todo.usuarios WHERE activo = 1 GROUP BY idioma`
    con.query(sentencia, function (err, result, fields) {
        if (err) return callback(err);
        return callback(null, result)
    });
}

function porIdioma(callback) {
    const sentencia = `SELECT idioma, COUNT(*) from todo.usuarios GROUP BY idioma`
    con.query(sentencia, function (err, result, fields) {
        if (err) return callback(err);
        return callback(null, result)
    });
}

function mayoresEdad(callback) {
    const sentencia = `SELECT nombre, apellido FROM todo.usuarios WHERE edad > 17`
    con.query(sentencia, function (err, result, fields) {
        if (err) return callback(err);
        return callback(null, result)
    });
}

function getUserByNombre(name, callback) {
    const sentencia = `SELECT * FROM todo.usuarios WHERE Nombre = '${name}'`
    console.log(sentencia);
    con.query(sentencia, function (err, result, fields) {
        if (err) return callback(err);
        console.log(err)
        console.log(result);
        if (result.length > 0) {
            return callback(null, result[0])
        } else {
            return callback(null, null)
        }
    });
}

function guardarSesionBBDD (sesion, callback) {
    const sentencia = `INSERT INTO todo.sesiones (idUser, fechaLimite, token, activo) 
    VALUES (${sesion.idUser}, '${sesion.fechaLimite}', '${sesion.token}', ${sesion.activo})`
    console.log(sentencia)
    con.query(sentencia, function (err, result, fields) {
        console.log(err);
        if (err) return callback(err);
        return callback(null, result)
    });
}

module.exports = {
    getTodoList,
    getTodo,
    getTodosRealizados,
    updateTodo,
    createTodo,
    cambiarARealizados,
    getUser,
    getUsers,
    createUser,
    updateUser,
    deleteUser,
    edadMedia,
    mayoresEdad,
    porIdioma,
    activosPorIdioma,
    getUserByNombre,
    guardarSesionBBDD
}