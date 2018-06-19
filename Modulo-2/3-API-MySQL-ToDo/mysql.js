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
    console.log(result);
    return callback(null, result)
  });
}

module.exports = {
    getTodoList
}