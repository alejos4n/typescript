/**
 * las variables se declaran usando let o const, segudio del nombre y aunque no es obligatorio, 
 * al final el tipo de variable.
 * 
 * let declara variables que tienen ambito de bloque, o sea, solo es accesible en el bloque que se define
 * const, también de bloque, se utilzia para las constantes
 * 
 */

let nombre: string = "Luis";
nombre = "Carlos"; // Correcto
console.log(nombre); // Carlos

const PI: number = 3.1416;
console.log(PI); // 3.1416

//ambito de variable

/**
 * determina dónde se ubica una variable, global, bloque o función
 */

//Ámbito global

let globalVar: string = "soy global";

function mostrarGlobal() {
    console.log(globalVar); //soy global
}

//Ámbito de bloque
//son accesibles dentro de un bloque if, for o {}

if (true) {
    let bloqueLet: string = "Dentro del bloque";
    console.log(bloqueLet); //dentro del bloque
}

//console.log(bloqueLet)  --> daría error

/**
 * Ámbito de función
 * cuando es declara dentro de una función y solo es accesible desde la función
 */

function ejemplofuncion() {
    var funcionVar: string = "Dentro de la función";
    console.log(funcionVar); //dentro de la funcion
}

//console.log(funcionVar); Daría error

let nombre1: string = "Luis";
let edad: number = 25;
let esMayor: boolean = true;
let listaNumeros: number[] = [1, 2, 3, 4, 5];
let persona: { nombre2: string, edad: number } = { nombre2: "Luis", edad: 25 };

//TypeScript, el compilador puede inferir qué tipo de variable es una variable sin especificarle si es strign o number

function sumar(a: number, b: number) {
    return a + b; // Tipo inferido como number
}

let resultado = sumar(1, 2); // Tipo inferido como number