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
 *  El id es 1
    El id es cadena texto
 
* ahora usaremos los métodos asociados a id, o sea, number y string.
* como cada tipo tiene diferentes métodos, se validan luego
* Ahora vamos a cambiar a mayúsculas cuando sea un string y a reducir el número de decimales del number
*/

function imprimirId2(id: number | string) {
    if (typeof id === "string") {
        console.log(`El id es ${(id as string).toUpperCase()}`); //pasamos a mayúsculas
    } else {
        console.log(`El id es ${(id as number).toFixed(2)}`);
    }
}

imprimirId2("este es mi id");
imprimirId2(100.546556438); 


/**el resultado final es 
 * 
 * El id es ESTE ES MI ID
 * El id es 100.55
 */