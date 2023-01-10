// 1 - arrays
let numbers: number[] = [1,2,3,4,5]

numbers.push(2)

console.log(numbers[3])

const nomes: string[] = ['Jonny', 'Ramon', 'Romeu']
//nomes.push(3)

// 2 - outra sintaxe array
const nums: Array<number> = [1,2,3,4]

// 3 - any

const arr1: any = [1, "teste", true, [], {nome: "João"}]

console.log(arr1)
 
arr1.push([1, 2, 3])

// 4 - parametros tipados

function soma(a: number, b: number){
    console.log(a + b)
}

soma(4, 5)

//soma("a", "b")

// 5 - retorno de função

function greeting(name: string): string{
    return `Olá ${name}`
}

console.log(greeting("João"))

// 6 - função anonima

setTimeout(() => {
    const sallary: number = 1000

    // console.log(parseFloat(sallary))

    // console.log(sallary)
}, 2000)

// 7 - tipos de objeto
function passCoordinates(coord: {x: number, y: number}){
    console.log(`X coordinates: ${coord.x}`)
    console.log(`Y coordinates: ${coord.y}`)
}

const objCoord = {x: 329, y: 84.2}
passCoordinates(objCoord)

const pessoaObj: {name: string, lastName: string} = {name: "João", lastName: "Domingues"}

// 8 - props adicionais

function showNumbers(a:number, b:number, c?:number){
    console.log(`A: ${a}`)
    console.log(`B: ${b}`)

    if(c){
        console.log(`C: ${c}`)
    }
}

showNumbers(1,2,3)
showNumbers(4,5)

// 9 - validando argumento opcional
function advancedGreeting(firstName: string, lastName?: string){
    if(lastName !== undefined){
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("João", "Domingues"))
console.log(advancedGreeting("João"))

// 10 - union type
function showBalance(balance: string | number){
    console.log(`O saldo da conta é R$${balance}`)
}

showBalance(100)
showBalance("500")

const arr2: Array<number | string | boolean> = [1, "Teste", true]

// 11 - avançando em union types

function showUserRole(role: boolean | string){
    if(typeof role === "boolean"){
        return "Usuário não aprovado!"
    }

    return "A função do usuário é " + role
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))
