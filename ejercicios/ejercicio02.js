//calculadora
/**
 * crear una calculadora usando funciones y clases de ser necesario
 */
//operaciones usando funciones
function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function muliplica(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
console.log("imprimiendo desde funciones");
console.log("la suma es: ");
console.log(suma(30, 43));
console.log("la resta es: ");
console.log(resta(23, 30));
console.log("la multiplicación es: ");
console.log(muliplica(44, 50));
console.log("la división es: ");
console.log(divide(20, 100));
//funcioens anonimas
var miSuma = function (a, b) { return a + b; };
console.log("imprimiendo desde funciones anonimas");
console.log("la suma es: ");
console.log(miSuma(30, 43));
