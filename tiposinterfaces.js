/**
 * La interfaces en typescript permiten definir la estructura y el comportamiento de un objeto.
 *
 * permite especificar nombre, tipos de las propiedades y métodos
 *
 * cuando la propiedad tiene un ? es porque es opcional
 */
//interface en una clase
//toma la interface Persona  y la clase debe definir las propiedades
var Estudiante = /** @class */ (function () {
    function Estudiante(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    Estudiante.prototype.saludar = function () {
        console.log("Hola mi nombre es ".concat(this.nombre, " y tengo ").concat(this.edad, " a\u00F1os"));
    };
    return Estudiante;
}());
var mascota = { nombre: "firulais", vacunas: true };
console.log(mascota);
var libro1 = { titulo: "Typescrip básico" };
var libro2 = { titulo: "Typescript avanzado", autor: "Pepito perez" };
var punto = { x: 10, y: 20 };
//lo anterior debe dar error pues es de solo lectura
//otro ejemplo
console.log("otro ejemplo");
//creo una funcion de muestra
function imprimirEtiqueta(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta = { numero: 10, label: "Esta es la etiqueta" };
imprimirEtiqueta(miEtiqueta);
function imprimirEtiqueta2(etiqueta) {
    console.log(etiqueta.label);
}
var miEtiqueta2 = { numero: 10, label: "Esta es mi etiquetaa" };
imprimirEtiqueta2(miEtiqueta2);
