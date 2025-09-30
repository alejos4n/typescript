/**
 * tipos confirmación
 * es cuando le indicamos al compilador qué tipo esperar,
 * el compilador asume que sabes lo que estás haciendo.
 * 
 * tiene dos formas:
 * 
 * usando "as" o usando <type> antes de la variable
 */


//declaramso la variavble algun valor como unkown pero sabemos que es una cadena
let algunValor: unknown = "esto es una cadena";
//declaramos la variable longiutd.. que va contar el tamaño de la variable algunValor y la tratamos como string
let longitudDelString: number = (algunValor as string).length;


console.log(`imprimo el valor de algunValor: ${(algunValor)}`);
console.log(`imprimo el valor de longitudDelString ${(longitudDelString)}`);

// lo anterior es usando "as", ahora usaremos type delante de la variable

let algunValor2: unknown = "este es otro valor de texto desde un unkwon";
let longitudDelString2: number = (<string>algunValor2).length;

console.log(`imprimo el valor unknown: ${(algunValor2)}`);
console.log(`imprimo el valor asignado: ${(longitudDelString)}`)