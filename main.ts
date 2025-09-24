function saludar(nombre: string) {
    return "Hola, " + nombre;
}
/**
 * el compilador nos muestra un error debido a que no podemos enviar un arreglo a la función
 *  cuando el argumento de esta ha sido definido como un string.
 */
console.log(saludar(["Luis"]));
