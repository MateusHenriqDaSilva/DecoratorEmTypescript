// exemplo Basketeball

interface Time {
    placar: number
    nome: string
}

class BasketBallGame {
    private time1: Time
    private time2: Time

    constructor(timeNome1: string, timeNome2: string) {
        this.time1 = { placar: 0, nome: timeNome1 }
        this.time2 = { placar: 0, nome: timeNome2 }
    }

    getPlacar() {
        return `${this.time1.placar} : ${this.time2.placar}`
    }

    atualizarPlacar(pontos: number, atualizarTime1: boolean) {
        audit('atualizarPlacar', pontos, atualizarTime1)
        const inicio = Date.now()
        if (ehAutorizado()) {
            if (validarPonto(pontos)) {
                if (atualizarTime1) {
                    this.time1.placar += pontos
                } else {
                    this.time2.placar += pontos
                }
            } else {
                console.log(`invalido o ponto de valor adicionado ${pontos}`)
            }
        } else {
            console.log('voce nao esta autrizado a mecher no placar')
        }
        const fim = Date.now()
        logDuration('atualizarPlacar', inicio, fim)
    }
}

const game = new BasketBallGame('LA Lakers', 'Boston Celtics')

game.atualizarPlacar(3, true)
game.atualizarPlacar(2, false)
game.atualizarPlacar(2, true)
game.atualizarPlacar(2, false)
game.atualizarPlacar(2, false)
game.atualizarPlacar(2, true)
game.atualizarPlacar(2, false)

console.log(game.getPlacar())