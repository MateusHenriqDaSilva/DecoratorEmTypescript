type ConstruirTabela = { new(...argumentos: any[]): {} }

function EnrolarEConstruir(mensagem: string) {
    return function <T extends ConstruirTabela>(constructor: T) {
        const construtorEmbrulhado: any = function (...argumentos: any[]) {
            console.log(`Decorando ${mensagem} `)
            const resultado = new constructor(...argumentos)
            console.log(`Decorado ${mensagem}`)
            return resultado
        }
        construtorEmbrulhado.prototype = constructor.prototype
        return construtorEmbrulhado
    }
}

@EnrolarEConstruir('decorator')
class Professor2 {
    constructor(public id: number, public nome: string) {
        console.log('construindo uma classe instanciada')
    }
}

const professor2 = new Professor2(1, 'johny')
