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

//muestro los nùmeros del 1 al 100
for (let i: number = 0; i < 100; i++) {
    //defino si es multiplo de tres
    if (i % 3 === 0) {
        console.log(multiploTres);
    };
    //defino si es multiplo de 5, sino, es multiplo de 3 y 5
    if (i % 5 === 0) {
        console.log(multiploCinco);
    } else {
        console.log(multiploTresCinco);
    }
}