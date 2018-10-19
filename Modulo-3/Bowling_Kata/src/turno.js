class Turno {
    constructor(){
        this.tiradas = []
        this.finalizado = false
        this.tipo = null
    }

    roll(bolos) {
        this.tiradas.push(new Tirada(bolos))
        if (this.tiradas[0].getBolos() === 10) {
            this.finalizado = true
            this.tipo = 'strike'
        } else if (this.tiradas.length === 2) {
            this.finalizado = true
            if (this.getPoints() === 10) {
                this.tipo = 'spare'
            } else {
                this.tipo = 'normal'
            }
        }
    }

    score(siguientesTurnos) {
        console.log(siguientesTurnos);
        let score = 0

        score += this.getPoints()

        if (this.getTipo() === 'spare') {
            score += siguientesTurnos[0].getPrimeraTirada()
        }

        if (this.getTipo() === 'strike') {
            score += siguientesTurnos[0].getPrimeraTirada()
            if (siguientesTurnos[0].getTipo() === 'strike') {
                if (siguientesTurnos.length > 1) {
                    score += siguientesTurnos[1].getPrimeraTirada()
                } else {
                    score += siguientesTurnos[0].getSegundaTirada()
                }
            } else {
                score += siguientesTurnos[0].getSegundaTirada()
            }
        }

        return score
    }

    getPrimeraTirada() {
        return this.tiradas[0].getBolos()
    }

    getSegundaTirada() {
        return this.tiradas[1].getBolos()
    }

    getPoints() {
        let points = 0
        for (let i = 0; i < this.tiradas.length; i++) {
            points += this.tiradas[i].getBolos()
        }
        return points
    }

    getTipo() {
        return this.tipo
    }

    estaFinalizado() {
        return this.finalizado
    }

}
