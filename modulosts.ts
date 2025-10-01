/**
 * Es un archivo que contiene código y se puede exportar a otros partes del código y proyecto
 * 
 * la palabra clave es "export"
 * Se debe usar antes de la declaración de una clase, función, constante, variable
 * 
 */

//creamos el módulo modulosts.ts

export function sum(a: number, b: number): number {
    return a + b;
}

export const PI = 3.1416;

export default class Person {
    constructor(public name: string) {}
}

//creamos el modulo, exportamos la clase Person y la función sum() y la constante PI

/**
 * exportación por defecto:
 * desde un módulo usando la palabra clave "export default". 
 * Esto nos permite importar esa entidad sin usar llaves de desestructuración
 * ejemplo:
 * export default class MiClase {
 *  //codigo de la clase
 * }
 * 
 * Para importar:
 * 
 * import MiClase from './ruta/del/modulo';
 * 
 * 
 * Exportación nombrada:
 * usando export seguido del nombre de la entidad a exportar
 * 
 * export class Clase1 {
 *      //código de la clase
 * }
 * 
 * export interface Interfaz1 {
 *      //código de la interfaz
 * }
 * 
 * Exportación con Alias:
 * Usando la palabra "as"
 * 
 * export { nombreEntidad as alias } from './ruta/al/modulo';
 * 
 * 
 * 
 */


/**
 * Importar modulos:
 * 
 * usamos import seguido del nombre del modulo
 * 
 * import { nombreModulo } from './ruta/al/modulo';
 * 
 * para suar elementos exportados desde otro archivo de TS
 * 
 * import Person from './utils';
 * 
 * en el ejemplo anterior se importa la clase Person
 * 
 * importar varios elementos:
 * 
 * import { Clase1, Interfaz1 } from './ruta/'
 */