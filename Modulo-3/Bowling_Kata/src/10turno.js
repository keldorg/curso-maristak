class Turno10 extends Turno{
    constructor(){
        super()
    }

    roll(bolos) {
        this.tiradas.push(new Tirada(bolos))
        if (this.tiradas[0].getBolos() === 10) {
            this.tipo = 'strike'
        } else if (this.tiradas.length === 2) {
            if (this.getPoints() === 10) {
                this.tipo = 'spare'
            } else {
                this.tipo = 'normal'
            }
        } else if (this.tiradas.length === 3) {
            this.finalizado = true
        }
    }

    score() {
        let score = 0

        score += this.getPoints()

        return score
    }


}
