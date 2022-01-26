class Professor7 {
    constructor(public nome: string) { }

    private _titulo: string = ''

    public get titulo() {
        return this._titulo
    }

    public set titulo(valor: string) {
        this._titulo = valor
    }

    public professor() {
        console.log(`${this.nome} é um professor`)
    }
}

// Reflect.defineMetadata("comunicacao-contagem", 0, Professor7);
// Reflect.getMetadata("call-count", Professor7); // will return 0
// Reflect.getMetadata("call-count", Professor7, "teach"); // will return 10