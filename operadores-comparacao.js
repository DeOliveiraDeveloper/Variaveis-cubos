// = = = Operador de comparação de igualdade;
// ! = = Operador de comparação de diferença;
// < Operador de comparação de Menor Que;
// > Operador de comparação de Maior Que;
// < = Operador de comparação de Menor ou Igual Que;
// > = Operador de comparação de Maior ou Igual Que;

let num1 = 2;
let num2 = 2;

let comparacao = num1 == num2;

if (comparacao === true) {
    console.log("É igual!");
} else {
    console.log("Não é igual!")
}

if (num1 !== num2)  {
    console.log("Sá porra é diferente :<")
} else {
    console.log("Não é diferente :>")
}

if (num1 < num2) {
    console.log("É menor mano")
} else {
    console.log("É maior mano")
}

if (num1 > num2) {
    console.log("É maior mano")
} else {
    console.log("É menor mano")
}

if (num1 <= num2) {
    console.log(`${num1} é menor ou igual à ${num2} mano`)
} else {
    console.log(`${num1} é maior ou igual à ${num2} mano`)
}

if (num1 >= num2) {
    console.log(`${num1} é maior ou igual à ${num2} mano`)
} else {
    console.log(`${num1} é menor ou igual à ${num2} mano`)
}