const user = class User {
  constructor(id, nombre, apellido, contraseña, edad) {
    this.id = id
    this.nombre = nombre
    this.apellido = apellido
    this.contraseña = contraseña
    this.edad = edad
  }

  getId() {
    return this.id
  }

  getNombre() {
    return this.nombre
  }

  getApellido() {
    return this.apellido
  }

  getContraseña() {
    return this.contraseña
  }

  getEdad() {
    return this.edad
  }

  set(attr, value) {
    this[attr] = value
  }

  getJson() {
    return { 
      id: this.id,
      nombre: this.nombre,
      apellido: this.apellido,
      contraseña: this.contraseña,
      edad: this.edad
    }
  }

  getCSV() {
    return `${this.id}, ${this.nombre}, ${this.apellido}, ${this.contraseña}, ${this.edad}\n`
  }
}

module.exports = user