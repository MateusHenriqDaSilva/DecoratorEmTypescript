type ConstruirTabela2 = { new(...args: any[]): {} }

@Token(true)
class Professor {
    constructor(public id: number, public nome: string) { }
}

function Token(temToken: boolean) {
    return function <T extends ConstruirTabela2>(constructor: T) {
        return class extends constructor {
            token: boolean = temToken
        }
    }
}

const professor = new Professor(1, 'John Smith')
console.log("Existe a propriedade token em professor? ", professor["token"])

@Token(true)
class Estudante {
    constructor(public id: number, public nome: string) { }
}

const estudante = new Estudante(101, "John Bender")
console.log("Ele é um estudante, tem token? ", estudante['token'])
