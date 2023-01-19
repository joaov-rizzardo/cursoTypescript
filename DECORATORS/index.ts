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

// 5 - acessor decorator
class Monster {
    name?
    age?

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName(){
        return `Nome do monstro: ${this.name}`
    }

    @enumerable(false)
    get showAge(){
        return `Idade do monstro: ${this.age}`
    }
}

const charmander = new Monster("Charmander", 10)

console.log(charmander)

// 6 - property decorator
//1 - 00005
function formatNumber (){
    return function(target: Object, propertKey: string){

        let value: string

        const getter = function() {
            return value
        }

        const setter = function(newVal: string){
            value = newVal.padStart(5, "0")
        }

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        })
    }
}
class ID {
    @formatNumber()
    id

    constructor(id: string){
        this.id = id
    }
}

const newItem = new ID("1")

console.log(newItem)