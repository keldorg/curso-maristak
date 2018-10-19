class Fizzbuzz {
    constructor(){
        this.numeros = []

        for (let i=1; i <= 100; i++) {
            this.numeros.push(i)
        }
    }

    run() {
        for (let numero of this.numeros) {
            console.log(numero)
        }
    }

}
