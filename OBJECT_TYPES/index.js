"use strict";
// 1 - tipo de objeto para função com interface
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é R$${product.price}`);
    if (product.isAvailable === true) {
        console.log("O produto está disponível");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Tênis", price: 129.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é: ${user.role}`);
    }
}
const u1 = {
    email: "joão@hotmail.com",
    role: "Admin"
};
const u2 = {
    email: "victor@hotmail.com"
};
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4
};
let coords = {
    x: 10,
};
coords.y = 15;
const joao = {
    name: "João",
    age: 22
};
console.log(joao);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"]
};
console.log(goku);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12
};
console.log(arnold);
// 7 - readonly array
let myArray = ["Maçâ", "Laranja", "Banana"];
//myArray[3] = "Mamão"
console.log(myArray);
myArray.forEach(item => {
    console.log("Fruta: " + item);
});
myArray = myArray.map(item => `Fruta: ${item}`);
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
//const myNumberArray2: fiveNumbers = [1,2,3,4,5,6]
//const mixedArray: fiveNumbers = [1, true, false, "teste", 3]
console.log(myNumberArray);
const anotherUser = ["João", 22];
console.log(anotherUser);
anotherUser[0] = "João";
//anotherUser[1] = "teste"
// 9 - tuplas com readonly
function showNumbers(numbers) {
    //numbers[0] = 5
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
