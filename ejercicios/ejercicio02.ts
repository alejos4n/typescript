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

//interface para resta
interface resta{
    (a: number, b: number): number;
}

let miResta: resta = (a, b) => a - b;
console.log("La resta desde interface:")
console.log(miResta(55, 234));

console.log("Multiplicación usando función anonima");
const miMulti = (a: number, b: number): number => a * b;
console.log(miMulti(67458, 547348));

//interface para division
interface dividir{
    (a: number, b: number): number;
}
let miDivis: dividir = (a, b) => a / b;
console.log("imprimiendo desde interface división");
console.log(miDivis(434, 4354));
