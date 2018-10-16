class Turno {
    constructor(){
        this.tiradas = []
        this.finalizado = false
        this.tipo = null
    }

    roll(bolos) {
        this.tiradas.push(new Tirada(bolos))
        console.log(this.tiradas)
        if (this.tiradas.length === 2 || this.tiradas[0].getBolos() === 10) {
            this.finalizado = true
        }
    }

    score(siguienteTurno) {
        let score = 0
        for (let i = 0; i < this.tiradas.length; i++) {
            score += this.tiradas[i].getBolos()
        }
        return score()
    }

    estaFinalizado() {
        return this.finalizado
    }

}
