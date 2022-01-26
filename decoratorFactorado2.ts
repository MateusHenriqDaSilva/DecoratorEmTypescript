function classDecoratorFactory(mensagem: string) {
    console.log(`${mensagem} inside factory`)
    return function (constructor: Function) {
        console.log(`${mensagem} inside decorator`)
    }
}

@classDecoratorFactory('Oi')
class DecoratedUm { }

@classDecoratorFactory("Ola")
class DecoratedDois { }

