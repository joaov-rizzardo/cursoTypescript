// 1 - tipo de objeto para função com interface

interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product){
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`)

    if(product.isAvailable === true){
        console.log("O produto está disponível")
    }
}

const shirt:Product = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name: "Tênis", price: 129.99, isAvailable: false})

// 2 - propriedade opcional em interface
interface User {
    email:string
    role?: string
}

function showUserDetails(user: User){
    console.log(`O usuário tem o e-mail: ${user.email}`)

    if(user.role){
        console.log(`A função do usuário é: ${user.role}`)
    }
}

const u1:User = {
    email: "joão@hotmail.com",
    role: "Admin"
}

const u2:User = {
    email: "victor@hotmail.com"
}

showUserDetails(u1)
showUserDetails(u2)

// 3 - readonly
interface Car {
    brand: string
    readonly wheels: number
}

const fusca: Car = {
    brand: "VW",
    wheels: 4
}

//fusca.wheels = 5

// 4 - index signature
interface CoordObject {
    [index: string]: number
}

let coords: CoordObject = {
    x: 10,
}

coords.y = 15

//coords.z = "teste"

// 5 - extending interfaces
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const joao: Human = {
    name: "João",
    age: 22
}

console.log(joao)

const goku: SuperHuman = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
}

console.log(goku)

// 6 - intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
}

console.log(arnold)

// 7 - readonly array

let myArray: ReadonlyArray<string> = ["Maçâ", "Laranja", "Banana"]

//myArray[3] = "Mamão"
     

console.log(myArray)

myArray.forEach(item => {
    console.log("Fruta: " + item)
})

myArray = myArray.map(item => `Fruta: ${item}`)

console.log(myArray)

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1,2,3,4,5]
//const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
//const mixedArray: fiveNumbers = [1, true, false, "teste", 3]

console.log(myNumberArray)

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["João", 22]

console.log(anotherUser)

anotherUser[0] = "João"

//anotherUser[1] = "teste"

 // 9 - tuplas com readonly
 
 function showNumbers(numbers: readonly [number, number]){
    //numbers[0] = 5
    console.log(numbers[0])
    console.log(numbers[1])
 }

 showNumbers([1,2])
