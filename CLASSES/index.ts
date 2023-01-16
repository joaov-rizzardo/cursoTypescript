// 1 - campos em classe
class User {
    name!: string
    age!: number
}

const joao = new User()

console.log(joao)

joao.name = "João"
//joao.job = "Programmer"

// 2 - constructor
class NewUser {
    name
    age

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

const matheus = new NewUser("Matheus", 30)

console.log(matheus)

// 3 - campo readonly
class Car{
    name
    readonly wheels = 4

    constructor(name:string){
        this.name = name
    }
}

const fusca = new Car("Fusca")

console.log(fusca)

//fusca.wheels = 3

// 4 - herança e super
class Machine {
    name

    constructor(name: string){
        this.name = name
    }
}

const trator = new Machine("Trator")

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number){
        super(name)
        this.guns = guns
    }
}

const destroyer = new KillerMachine("Destroyer", 4)

console.log(trator)
console.log(destroyer)

// 5 -  métodos

class Dwarf {
    name

    constructor(name: string){
        this.name = name
    }

    greeting(){
        console.log("Hey Stranger!")
    }
}

const jimmy = new Dwarf("Jimmy")

console.log(jimmy.name)
jimmy.greeting()

console.log(jimmy)

// 6 - this
class Truck {
    model
    hp

    constructor(model: string, hp: number){
        this.model = model
        this.hp = hp
    }

    showDetails(){
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`)
    }
}

const volvo = new Truck("Volvo", 400)
const scania = new Truck("Scania", 500)

volvo.showDetails()
scania.showDetails()

// 7 - getters
class Person {
    name
    surname

    constructor(name:string, surname:string){
        this.name = name
        this.surname = surname
    }

    get fullName(){
        return this.name + " " + this.surname
    }

}

const joaoDomingues = new Person("João", "Domingues")

console.log(joaoDomingues.fullName)

// 8 - setter
class Coords {

    x!: number
    y!: number

    set fillx(x: number){
        if(x === 0){
            return
        }

        this.x = x

        console.log("X inserido com sucesso")
    }

    set filly(y: number){
        if(y === 0){
            return
        }

        this.y = y

        console.log("Y inserido com sucesso")
    }

    get getCoords(){
        return `X: ${this.x} e Y: ${this.y}`
    }
}

const myCoords = new Coords()
myCoords.fillx = 15
myCoords.filly = 0
myCoords.filly = 16

console.log(myCoords)
console.log(myCoords.getCoords)