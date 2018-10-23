class FactoriaNumeros {
    constructor(){

    }

    crearNumero(numero) {
        if (numero % 3 === 0 && numero % 5 === 0) {
            return new FizzBuzzNumero(numero)
        } else if (numero % 3 === 0 ) {
            return new FizzNumero(numero)
        } else if (numero % 5 === 0 ) {
            return new BuzzNumero(numero)
        }
        return new Numero(numero)
    }
}
