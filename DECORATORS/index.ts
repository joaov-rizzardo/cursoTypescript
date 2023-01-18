// 1 - exemplo decorator

function myDecorator() {
    console.log("Iniciando decorator")
    return function (target: any, propertKey: string, descriptor: PropertyDescriptor) {
        console.log("Executando decorator")
        console.log(target)
        console.log(propertKey)
        console.log(descriptor)
    }
}

class myClass {
    name!: string

    @myDecorator()
    testing(){
        console.log("terminando execução do método")
    }
}

const myObj = new myClass()

myObj.testing()

// 2 - multiploes decorators
function a(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("executou a.")
    }
}

function b(){
    return function(target: any, propertKey: string, descriptor: PropertyDescriptor){
        console.log("executou b.")
    }
}

class MultipleDecorators {
    @a()
    @b()
    testing(){
        console.log("Terminando execução")
    }
}

const multiple = new MultipleDecorators()
multiple.testing()

// 3 - class decorator
function classDec(constructor: Function){
    console.log(constructor)
    if(constructor.name === "User"){
        console.log("Criando usuário!")
    }
}

@classDec
class User {
    name

    constructor(name: string){
        this.name = name
    }
}

const joao = new User("João")

console.log(joao)

// 4 - method decorator
function enumerable(value: boolean){
    return function(target: any, propertKey:string, descriptor: PropertyDescriptor){
        descriptor.enumerable = value
    }
}

class Machine {
    name

    constructor(name: string){
        this.name = name
    }
    @enumerable(false)
    showName(){
        console.log(this)
        return `O nome da máquina é: ${this.name}`
    }
}

const trator = new Machine("Trator")

console.log(trator.showName())