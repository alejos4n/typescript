/* los tipos de typescript permiten crear nuevos tipos usando una variedad de operadores*/
/**La primera forma de combinar tipos es utilziando uniones.
 * los tipos que son parte de una unión se llaman miembros
 */
//impimimos un id que puede ser number o string
function imprimirId(id) {
    console.log("El id es ".concat(id));
}
imprimirId(1); //pasamos un valor númerico
imprimirId("cadena texto"); // pasamos un valor de texto
/**El resultado será:
 *  El id es 1
    El id es cadena texto
 
* ahora usaremos los métodos asociados a id, o sea, number y string.
* como cada tipo tiene diferentes métodos, se validan luego
* Ahora vamos a cambiar a mayúsculas cuando sea un string y a reducir el número de decimales del number
*/
function imprimirId2(id) {
    if (typeof id === "string") {
        console.log("El id es ".concat(id.toUpperCase())); //pasamos a mayúsculas
    }
    else {
        console.log("El id es ".concat(id.toFixed(2)));
    }
}
imprimirId2("este es mi id");
imprimirId2(100.546556438);
