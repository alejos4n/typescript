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
var algunValor = "esto es una cadena";
//declaramos la variable longiutd.. que va contar el tamaño de la variable algunValor y la tratamos como string
var longitudDelString = algunValor.length;
console.log("imprimo el valor de algunValor: ".concat((algunValor)));
console.log("imprimo el valor de longitudDelString ".concat((longitudDelString)));
// lo anterior es usando "as", ahora usaremos type delante de la variable
var algunValor2 = "este es otro valor de texto desde un unkwon";
var longitudDelString2 = algunValor2.length;
console.log("imprimo el valor unknown: ".concat((algunValor2)));
console.log("imprimo el valor asignado: ".concat((longitudDelString)));
