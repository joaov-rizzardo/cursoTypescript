// 1 - importação de arquivos
import importGreet from "./greet"

importGreet()

// 2 - import de variavel

import { x } from "./variable"

console.log(x)

// 3 - multiplas importacoes
import {a, b, myFunction} from './multiple'

console.log(a)
console.log(b)

myFunction()

// 4 - alias

import { someName as name } from "./changeName"

console.log(name)

// 5 - import all

import * as myNumbers from './numbers'

console.log(myNumbers)

myNumbers.showNumber()

// 6 - importando tipos
import { Human } from "./myType"

class User implements Human {
    name
    age

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
}

const joao = new User("João", 22)

console.log(joao)

