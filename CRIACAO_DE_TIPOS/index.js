"use strict";
// 1 - generics
function showData(arg) {
    return `O dado é ${arg}`;
}
console.log(showData(4));
console.log(showData("Testando o generic"));
console.log(showData(true));
// 2 - constraints em generic
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
console.log(showProductName(myObj));
const myCar = { name: "Fusca", wheels: 4, engine: 1.0, color: "Verde" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, 'ram'));
function showCharName(obj, name) {
    return `${obj[name]}`;
}
const myChar = {
    name: "João",
    age: 22,
    hasDriveLicense: true
};
console.log(showCharName(myChar, "name"));
// 6 - typeof type operator
const userName = "Matheus";
const userName2 = "João";
const userName4 = "Joaquim";
const newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão para pouca carga"
};
function showKm(km) {
    console.log(`O veículo tem a km de: ${km}`);
}
showKm(newTruck.km);
const newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
const someVar = 5;
const testing = "some text";
