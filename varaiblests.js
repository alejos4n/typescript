/**
 * las variables se declaran usando let o const, segudio del nombre y aunque no es obligatorio,
 * al final el tipo de variable.
 *
 * let declara variables que tienen ambito de bloque, o sea, solo es accesible en el bloque que se define
 * const, también de bloque, se utilzia para las constantes
 *
 */
var nombre = "Luis";
nombre = "Carlos"; // Correcto
console.log(nombre); // Carlos
var PI = 3.1416;
console.log(PI); // 3.1416
//ambito de variable
/**
 * determina dónde se ubica una variable, global, bloque o función
 */
//Ámbito global
var globalVar = "soy global";
function mostrarGlobal() {
    console.log(globalVar); //soy global
}
//Ámbito de bloque
//son accesibles dentro de un bloque if, for o {}
if (true) {
    var bloqueLet = "Dentro del bloque";
    console.log(bloqueLet); //dentro del bloque
}
//console.log(bloqueLet)  --> daría error
/**
 * Ámbito de función
 * cuando es declara dentro de una función y solo es accesible desde la función
 */
function ejemplofuncion() {
    var funcionVar = "Dentro de la función";
    console.log(funcionVar); //dentro de la funcion
}
//console.log(funcionVar); Daría error
var nombre1 = "Luis";
var edad = 25;
var esMayor = true;
var listaNumeros = [1, 2, 3, 4, 5];
var persona = { nombre2: "Luis", edad: 25 };
//TypeScript, el compilador puede inferir qué tipo de variable es una variable sin especificarle si es strign o number
function sumar(a, b) {
    return a + b; // Tipo inferido como number
}
var resultado = sumar(1, 2); // Tipo inferido como number
