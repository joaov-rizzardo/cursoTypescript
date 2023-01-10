// 1 - arrays
var numbers = [1, 2, 3, 4, 5];
numbers.push(2);
console.log(numbers[3]);
var nomes = ['Jonny', 'Ramon', 'Romeu'];
//nomes.push(3)
// 2 - outra sintaxe array
var nums = [1, 2, 3, 4];
// 3 - any
var arr1 = [1, "teste", true, [], { nome: "João" }];
console.log(arr1);
arr1.push([1, 2, 3]);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//soma("a", "b")
// 5 - retorno de função
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
console.log(greeting("João"));
// 6 - função anonima
setTimeout(function () {
    var sallary = 1000;
    // console.log(parseFloat(sallary))
    // console.log(sallary)
}, 2000);
// 7 - tipos de objeto
function passCoordinates(coord) {
    console.log("X coordinates: ".concat(coord.x));
    console.log("Y coordinates: ".concat(coord.y));
}
var objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
var pessoaObj = { name: "João", lastName: "Domingues" };
// 8 - props adicionais
function showNumbers(a, b, c) {
    console.log("A: ".concat(a));
    console.log("B: ".concat(b));
    if (c) {
        console.log("C: ".concat(c));
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 9 - validando argumento opcional
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    }
    return "Ol\u00E1, ".concat(firstName, ", tudo bem?");
}
console.log(advancedGreeting("João", "Domingues"));
console.log(advancedGreeting("João"));
// 10 - union type
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
showBalance(100);
showBalance("500");
var arr2 = [1, "Teste", true];
// 11 - avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return "A função do usuário é " + role;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
