class Turno {
    constructor(){
        this.tiradas = []
        this.finalizado = false
        this.tipo = null
    }

    roll(bolos) {
        this.tiradas.push(new Tirada(bolos))
        if (this.tiradas.length === 2 || this.tiradas[0].getBolos() === 10) {
            this.finalizado = true
        }
    }

    score(siguienteTurno) {
        let score = 0

        score += this.getPoints()

        if (score === 10) {
            score += siguienteTurno.getPrimeraTirada()
        }

        return score
    }

    getPrimeraTirada() {
        return this.tiradas[0].getBolos()
    }

    getPoints() {
        let points = 0
        for (let i = 0; i < this.tiradas.length; i++) {
            points += this.tiradas[i].getBolos()
        }
        return points
    }

    estaFinalizado() {
        return this.finalizado
    }

}
