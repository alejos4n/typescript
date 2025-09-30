/* los tipos de typescript permiten crear nuevos tipos usando una variedad de operadores*/

/**La primera forma de combinar tipos es utilziando uniones.
 * los tipos que son parte de una unión se llaman miembros
 */

//impimimos un id que puede ser number o string

function imprimirId(id: number | string) {
    console.log(`El id es ${id}`);
}

imprimirId(1); //pasamos un valor númerico
imprimirId("cadena texto"); // pasamos un valor de texto

/**El resultado será:
 * El id es 1
    El id es cadena texto
 */