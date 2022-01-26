@LogClass('professor decorator')
class Professor3 {
    constructor(public id: number, public nome: string) {
        console.log("Construindo um professor")
    }
}

const logar = {
    informacao: (mensagem: string) => {
        console.log(`{INFORMACAO}: ${mensagem}`)
    },
}
const professor3 = new Professor3(1, 'mateus')

type ConstruirTabela3 = { new(...argumentos: any[]): {} }


function LogClass(mensagem: string) {
    return function <T extends ConstruirTabela3>(constructor: T) {
        const logandoConstructor: any = function (...argumentos: any[]) {
            logar.informacao(mensagem)
            return new constructor(...argumentos)
        }
        logandoConstructor.prototype = constructor.prototype
        return logandoConstructor
    }
}

for (let indice = 0; indice < 10; indice++) {
    const professor3 = new Professor3(indice + 1, "Mateus Henrique")
}

