function hola (nombre) {
    return 'Hola ' + nombre
}

function sumar (a, b) {
    return a + b
}

function cualEsMasLargo (nombre1, nombre2) {
    if (nombre1.length > nombre2.length) {
        return nombre1
    }
    if (nombre2.length > nombre1.length) {
        return nombre2
    }
    return 'Son igual de largos'
}

module.exports = {
    hola,
    sumar,
    cualEsMasLargo
}