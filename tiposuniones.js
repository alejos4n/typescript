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
