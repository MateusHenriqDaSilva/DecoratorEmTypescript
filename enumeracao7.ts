function Enumerable(value: boolean) {
    return function (target: any, propriedadeNome: string, descricao: PropertyDescriptor) {
        descricao.enumerable = value;
    }
};

class Professor6 {
    constructor(public nome: string) { }

    private _titulo: string = "";

    @Enumerable(true)
    @logMetodo('log titulo')
    public get titulo() {
        return this._titulo;
    }

    public set titulo(value: string) {
        this._titulo = value;
    }

    @Enumerable(true)
    @logMetodo('acesso a funcao de professor')
    public professor() {
        console.log(`${this.nome} é professor`)
    }

    public static mostrarMensagem() {
        console.log('essa e uma classe de professores')
    }
}

const prof = new Professor6("John Smith");
for (const key in prof) {
    console.log(key);
}


prof.professor()
prof.titulo
console.log(`${prof.titulo} ${prof.nome}`)

const logger = {
    info: (message: string) => {
        console.log(`[INFO]: ${message}`);
    },
};

function logMetodo(mensagem: string) {
    return function (target: any, propriedadeNome: string, descricao: PropertyDescriptor) {
        if (descricao.value) {
            const original = descricao.value
            descricao.value = function (...args: any[]) {
                logger.info(`${mensagem}: Metodo ${propriedadeNome} invocada`)
                return original.apply(this, args)
            }
        }
        if (descricao.get) {
            const original = descricao.get
            descricao.get = function () {
                logger.info(`${mensagem}: get para ${propriedadeNome} invocada`)
                return original.apply(this, [])
            }
        }
        if (descricao.set) {
            const original = descricao.set
            descricao.set = function (value: any) {
                logger.info(`${mensagem}: set por ${propriedadeNome} invocada`)
                return original.apply(this, [value])
            }
        }
    }
}

