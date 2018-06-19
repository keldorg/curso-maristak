const conexiones = []

function setConexion(con) {
    conexiones.push(con)
}

function getConexiones(con) {
    return conexiones
}


module.exports = {
    setConexion,
    getConexiones
}