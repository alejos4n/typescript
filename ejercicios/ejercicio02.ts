//calculadora

/**
 * crear una calculadora usando funciones y clases de ser necesario
 */

//operaciones usando funciones

function suma(a: number, b: number): number {
    return a + b;
}

function resta(a: number, b: number): number {
    return a - b;
}

function muliplica(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
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
console.log("imprimiendo desde funciones anonimas");
const miSuma = (a:number, b: number): number => a + b;
console.log("la suma es: ");
console.log(miSuma(35, 43));