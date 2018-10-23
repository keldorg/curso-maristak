class Fizzbuzz {
    constructor(){
        this.numeros = []
        let factoria = new FactoriaNumeros()

        for (let i=1; i <= 100; i++) {
            this.numeros.push(factoria.crearNumero(i))
        }
    }

    run() {
        for (let numero of this.numeros) {
            console.log(numero.getNumero())
        }
    }

}
