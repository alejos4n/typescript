/**
 * TypeScript incluye una serie de tipos primitivos: 
 * number, string, boolean, null, undefined, any.
 * 
 */

let edad: number = 36;
let nombre: string = "Alejandro";
let esEstudiante: boolean = false;

//arrays, se definen con el tipo y []
let arrayNumero: number[] = [1, 2, 3];
let arrayCadena: string[] = ["luis", "maria", "firewall"];

//tuplas, definen un array con tipos especificos
let tuplaPersona: [string, number] = ["Alejandro", 36];

//enums, permiten definir constantes con nombres
enum Color {rojo, verde, azul};

enum colores {
    rojo,
    verde,
    azul
}

let colorFavorito: colores.azul;
let coloAdicional: Color.rojo;

//tipo any desactiva el chequeo de tipos permitiendo cualquiera
let valor: any = 5;
valor = "holita";

//tipos union. Variables con varios tipos
let tipoUnion: number | string = "hola";
tipoUnion = 80;

//tipo null y undefined
let unionnodef: string | null | undefined;

//interseccion de tipos, cuando se combinan varios tipos en uno solo
interface ConNombre {
    nombre: string;
}

interface conEdad {
    edad: number;
}

type PersonaCompleta = ConNombre & conEdad;

//tipos literales, pueden tener valores especificos
type Coloreslit = "azul" | "verde" | "amarillo";
let colorli: Coloreslit = "verde";

//aserciones de tipo, permiten decirle a compilar cómo tratar el tipo
let valorcualquiera: any = "Hola mundo";
let tamano: number = (valorcualquiera as string).length;


//funciones

//funcion de suma con dos parametros tipo nùmero y valor de retorno numero

function sumas(a: number, b: number): number {
    return a + b;
}

//parametros opcionales y valores por defecto
//se definen usando ?

function saludar(nombre: string, saludo?: string): string {
    return `${saludo || "holaaa"}, ${nombre}`;
}

//funcion void, no devulve nada
function logMensaje(mensaje: string): void {
    console.log(mensaje);
}

//funciones anonimas
const multiplica = (x: number, y: number): number => x * y;

//interfaces, permiten definir la estructura de un objeto

interface Persona {
    nombre: string;
    edad: number;
}

const persona1: Persona = {
    nombre: "alejandro",
    edad: 36
};

//interface de una funcion, define la esctructura de la funcion

interface Suma {
    (a: number, b: number): number;
}

let miSuma: Suma = (x, y) => x + y;

//extender interfaces, se pueden extender para heredar propiedades

interface Estudiante extends Persona {
    matricula: number;
}


/**POO
 * clases que incluyen propiedades y mètodos
 */

class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number){
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar(): string {
        return `hola, mi nombre es ${this.nombre}`;
    }
}

/**modificadores de acceso
 * public, private, protected. controlan la visibilidad de los metodos y propiedades
 * 
*/

class Estudiante {
    public nombre: string;
    private matricula: number;

    constructor(nombre: string, matricula: number) {
        this.nombre = nombre;
        this.matricula = matricula;
    }

    obtenerMatricula(): number {
        return this.matricula;
    }
}


//herencia, las clases pueden heredar de otras clases usando extends

class Profesor extends Persona {
    especialidad: string;

    constructor(nombre: string, edad: number, especialidad: string) {
        super(nombre, edad);
        this.especialidad = especialidad;
    }
}

//clases abstractas. no pueden ser instanciadas directamente.

abstract class Animal {
    abstract sonido(): void;
}

class Perro extends Animal {
    sonido() {
        console.log("guauu");
    }
}

//generics,  codigo reutilizable que funciona con multiples tipos de datos

function identidad<T>(arg: T): T{
    return arg;
}

//generics en clases, para permitir diferentes tipos de propiedades

class Caja<T> {
    contenido: T;
    constructor(contenido: T) {
        this.contenido = contenido;
    }

    obtenerContenido(): T {
        return this.contenido;
    }
}

const cajaNumero = new Caja<number>(123);


//modulos y namespaces, se puede dividir el codigo en diferentes archivos
// y usar import y export para compartir código

//archivoA.ts
export const PI = 3.1415;

//ArchivoB.ts
import { PI } from './archivoA';
console.log(PI);

/**namespaces.
 * permiten agrupar codigo relacionado bajo un mismo nombre
 */

namespace Geometria {
    export function areaCirculo(radio: number): number{
        return Math.PI * radio * radio;
    }
}

console.log(Geometria.areaCirculo(5));


//**decoradores
// es una funcion especial que puede modificar el comportamiento de una clases y sus miembros
//  */


function log(target: any) {
    console.log(`Clase decorada: ${target.name}`);
}

@log
class MiClase {
    constructor() {
        console.log("Instancia creada");
    }
}

//decoradores de metodos. permiten interceptar la ejeucion de metodos

function logLlamada(target: any, key: string, descriptor: PropertyDescriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]) {
        console.log(`metodo llamado: ${key}`);
        return metodoOriginal.apply(this, args);
    };
}

class Calculadora {
    @logLlamada
    sumar(a: number, b: number): number {
        return a + b;
    }
}

/** Mamejo de promesas y asincronia
 * usando async y await para un codigo mas limpio
 */

async function obtenerDatos(): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Datos obtenidos"), 1000);
    });
}

async function mostrarDatos() {
    const datos = await obtenerDatos();
    console.log(datos);
}

//manejo de errores con async t await

async function obtenerDatosconError() {
    try {
        const datos = await obtenerDatos();
        console.log(datos);
    } catch (error) {
        console.error("Error al obtener los datos", error);
    }
}
