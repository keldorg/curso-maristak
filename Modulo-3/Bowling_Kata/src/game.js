class Game {
    constructor(){
        this.turnos = []
    }

    roll(bolos) {
        const turnoActual = this.getTurnoActual()
        if (turnoActual) {
            turnoActual.roll(bolos)
        } else {
            let nuevoTurno = (this.turnos.length < 10 ? new Turno(): new Turno10())
            nuevoTurno.roll(bolos)
            this.turnos.push(nuevoTurno)
        }
    }

    score() {
        let score = 0
        for (let i = 0; i < this.turnos.legnth; i++) {
            if (i < 10) {
                score += this.turnos[i].score(this.turnos[i + 1])
            } else {
                score += this.turnos[i].score()
            }

        }
        return score
    }

    getTurnoActual() {
        if (this.turnos.length === 0) return null
        return (this.turnos[this.turnos.length - 1].estaFinalizado() ? null: this.turnos[this.turnos.length - 1])
    }

}
