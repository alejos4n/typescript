/**
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

//defino variables
let multiploTres: string = "fizz";
let multiploCinco: string = "buzz";
let multiploTresCinco: string = "fizzbuzz";

//defino si es multiplo de tres
let esMultiploTres: number;

if (esMultiploTres % 3 === 0) {
    console.log(multiploTres);
}

//muestro los nùmeros del 1 al 100
for (let i: number = 0; i < 100; i++) {
    console.log(`mostrando numeros del 1 al 100, número: ${i}`)}

