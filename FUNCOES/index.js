"use strict";
// 1 - void
function withoutReturn() {
    console.log("Esta função não tem retorno!");
}
withoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "João");
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3, 4]));
console.log(firstElement(["a", "b", "t"]));
//console.log(firstElement("teste"))
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "João" }, { age: 22, job: "Programmer" });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 23));
console.log(biggestNumber("12", "5"));
//console.log(biggestNumber("1", 4))
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [1, 12, 15]));
console.log(mergeArrays([1, 2, 3], ["joão", "3", "7"]));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("João", "Senhor"));
console.log(modernGreeting("João"));
// 7 - parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(15, 25));
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    console.log(x);
}
doSomething(1);
doSomething([1, 2, 3]);
// 9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("Algum erro!")
// 10 - rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
//console.log(sumAll(1,2,3,"teste"))
// 11 - destructuring com parametro
function showProductDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa R$${price}`;
}
const shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));
//console.log(showProductDetails({name: "teste", age: 30}))
