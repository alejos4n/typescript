/**
 * La interfaces en TypeScript permiten definir la estructura y el comportamiento de un objeto.
 * 
 * permite especificar nombre, tipos de las propiedades y métodos
 * 
 * cuando la propiedad tiene un ? es porque es opcional
 */

//declaro la interface

interface Persona { //nombre del a interface
    //propiedades
    nombre: string;
    edad: number;
    saludar(): void;
}

//interface en una clase
//toma la interface Persona  y la clase debe definir las propiedades
class Estudiante implements Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`);
    }
}

//extensión de interfaces
//se permite crear interfaces más específicos basados en una interface
//la interface Mascota extiende la interface Animal
interface Animal {
    nombre: string;
}

interface Mascota extends Animal {
    vacunas: boolean;
}

const mascota: Mascota = {nombre: "firulais", vacunas: true};
console.log(mascota); 

//propiedades opcionales, se definen con "?"

interface Libro {
    titulo: string;
    autor?: string;
}

const libro1: Libro = {titulo: "TypeScript básico"};
const libro2: Libro = {titulo: "TypeScript avanzado", autor: "Pepito perez"};


//propiedades de solo lectura
//tiene la palabra readonly y asegura que la propiedad no puede ser modificada

interface Punto2 {
    readonly x: number;
    readonly y: number;
}

const punto: Punto2 = {x: 10, y: 20};
//lo anterior debe dar error pues es de solo lectura


//otro ejemplo
console.log("otro ejemplo");

//creo una funcion de muestra
function imprimirEtiqueta(etiqueta: {label: string}) {
    console.log(etiqueta.label);
}

let miEtiqueta = {numero: 10, label: "Esta es la etiqueta"};
imprimirEtiqueta(miEtiqueta);
//console.log(imprimirEtiqueta(miEtiqueta));

//reescribimos la función ahora con uan interface usaremos la funcion imprimirEtiqueta2 para no generar duplicado

interface Etiqueta {
    label: string;
}

function imprimirEtiqueta2(etiqueta: Etiqueta) {
    console.log(etiqueta.label);
}

let miEtiqueta2 = {numero: 10, label: "Esta es mi etiquetaa"};

imprimirEtiqueta2(miEtiqueta2);