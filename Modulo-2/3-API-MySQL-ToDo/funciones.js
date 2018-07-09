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

function compararContraseñas(pass1, pass2) {
    return pass1 === pass2
}

function crearFechaSesion() {
    const ahora = new Date()
    let dentroDe5min = new Date()
    dentroDe5min.setMinutes(ahora.getMinutes() + 5)
    return dentroDe5min.toISOString().slice(0,19).replace('T',' ')
}

function crearToken() {
    return '' + Date.now()
}

function crearSesion(idUser, activo) {
    return {
        idUser: idUser,
        activo: activo,
        token: crearToken(),
        fechaLimite: crearFechaSesion()
    }
}

module.exports = {
    hola,
    sumar,
    cualEsMasLargo,
    compararContraseñas,
    crearSesion
}