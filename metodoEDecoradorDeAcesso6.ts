interface PropriedadeEDescricao {
    configuravel?: boolean
    enumeracao?: boolean
    gravavel?: boolean
    valor?: any
    get?(): any
    set?(valor: any): void
}

interface descritorDePropriedadeDigitada<T> {
    enumeracao?: boolean
    configuravel?: boolean
    gravavel?: boolean
    valor?: T
    get?: () => T
    set?: (valor: T) => void
}

function decoradorMetodo(target: any, propriedadeNome: string, descricao: PropriedadeEDescricao) {
    console.log('alvo é: ', target)
    console.log('alvo é: ', propriedadeNome)
    console.log('alvo é: ', descricao)
}

class professor4 {
    constructor(public nome: string) { }
    private _titulo: string = ''

    public get titulo() {
        return this._titulo
    }

    public set titulo(valorRecebido: string) {
        this._titulo = valorRecebido
    }

    public professor() {
        console.log(`${this.nome} é professor`)
    }
}