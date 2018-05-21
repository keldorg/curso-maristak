var mysql = require('mysql')

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "2users"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  con.query("CREATE DATABASE 2users", function (err, result) {
    //if (err) throw err;
    console.log(err)
    console.log("Database created 2users");

    createUserTable(function() {
      console.log('TERMINADO')
    })
  });
});

function createUserTable(callback) {
  var sql = "CREATE TABLE clase (id INT AUTO_INCREMENT PRIMARY KEY, nombre VARCHAR(255), apellido VARCHAR(255), edad INT, tipo VARCHAR(10), sexo VARCHAR(10))";
  con.query(sql, function (err, result) {
    //if (err) throw err;
    console.log(err)
    console.log("Table created clase");
    seedUserTable(function() {
      return callback()
    })
  });
}

function seedUserTable(callback) {
  getUsuarios(function(err, result) {
    if (result.length === 0) {
      var usuarios = [[
        'Joseba', 'Legarreta', 27, 'profesor', 'hombre'
      ],[
        'Alumno1', 'Apellido1', 17, 'alumno', 'mujer'
      ],[
        'Alumno2', 'Apellido2', 47, 'alumno', 'hombre'
      ]]
      var sql = "INSERT INTO clase (nombre, apellido, edad, tipo, sexo) VALUES ?";  
      con.query(sql, [usuarios], function (err, result) {
        if (err) throw err;
        console.log("database fetched!");
        return callback()
      });
    } else {
      return callback()
    }
  })
}

function getUsuarios(callback) {
  con.query("SELECT * FROM clase", function (err, result, fields) {
    if (err) return callback(err);
    console.log(result);
    return callback(null, result)
  });
}

module.exports = {
  getUsuarios
}