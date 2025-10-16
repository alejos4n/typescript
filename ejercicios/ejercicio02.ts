//calculadora

/**
 * crear una calculadora usando funciones y clases de ser necesario
 */

//operaciones usando funciones

function suma(a: number, b: number): number {
    return a + b;
}

function resta(a: number, b: number): number {
    return a - b;
}

function muliplica(a: number, b: number): number {
    return a * b;
}

function divide(a: number, b: number): number {
    return a / b;
}

console.log("imprimiendo desde funciones");
console.log("la suma es: ");
console.log(suma(30, 43));
console.log("la resta es: ");
console.log(resta(23, 30));
console.log("la multiplicación es: ");
console.log(muliplica(44, 50));
console.log("la división es: ");
console.log(divide(20, 100));

//funcioens anonimas
console.log("imprimiendo desde funciones anonimas");
const miSuma = (a:number, b: number): number => a + b;
console.log("la suma es: ");
console.log(miSuma(35, 43));

//interface para resta
interface resta{
    (a: number, b: number): number;
}

let miResta: resta = (a, b) => a - b;
console.log("La resta desde interface:")
console.log(miResta(55, 234));

console.log("Multiplicación usando función anonima");
const miMulti = (a: number, b: number): number => a * b;
console.log(miMulti(67458, 547348));

//interface para division
interface dividir{
    (a: number, b: number): number;
}
let miDivis: dividir = (a, b) => a / b;
console.log("imprimiendo desde interface división");
console.log(miDivis(434, 4354));

//usando clases
console.log("imprimiendo desde clases");

class Calculadora {
    sumar(a: number, b: number): number {
        return a + b;
    };
    restar(a: number, b: number): number {
        return a - b;
    };
    multiplica(a: number, b: number): number{
        return a * b;
    };
    divide(a: number, b: number): number {
        return a / b;
    }
}

//instancio la clase, o sea, creo un objeto de ella
const miCalculadora = new Calculadora();

//uso los métodos de la clase
console.log("suma:", miCalculadora.sumar(23, 56));
console.log("Resta: ", miCalculadora.restar(234, 678));
console.log("Multiplicar: ", miCalculadora.multiplica(44, 567));
console.log("División: ", miCalculadora.divide(348, 78));

//usando la clase para no crear un objeto
console.log("usando la clase para no crear un objeto");

class Calculadora2 {
    static sumar(a: number, b: number): number {
        return a + b;
    };
    static restar(a: number, b: number): number {
        return a - b;
    };
    static muliplicar(a: number, b: number): number {
        return a * b;
    };
    static divide(a: number, b: number): number {
        return a / b;
    }
}

//uso sin instanciar
console.log("uso sin instanciar de la clase");
console.log("Suma:", Calculadora2.sumar(434, 87));
console.log("Resta:", Calculadora2.restar(876, 5934783));
console.log("Multiplicación:", Calculadora2.muliplicar(34, 657687));
console.log("División:", Calculadora2.divide(98, 354));


//extendiendo la clase Calculadora
console.log("extendiendo la clase Calculadora");

class CalculadoraMejorada extends Calculadora {
    potencia(base: number, exponente: number): number {
        return Math.pow(base, exponente);
    }
    raizCuadrada(num: number): number {
        return Math.sqrt(num);
    }
    seno(grados: number): number {
        const radianes = (grados * Math.PI) / 180;
        return Math.sin(radianes);
    }
    coseno(grados: number): number {
        const radianes = (grados * Math.PI) / 180;
        return Math.cos(radianes);
    }
}

//creamos una instancia del objeto
const calCientifica = new CalculadoraMejorada();

//muestro los nuevos métodos
console.log("calculadora cientifica que extiende calculadora");

console.log("Ptencia:", calCientifica.potencia(45, 453));
console.log("Raíz cuadrada:", calCientifica.raizCuadrada(54645));
console.log("Seno", calCientifica.seno(90));
console.log("Coseno:", calCientifica.coseno(45));
console.log("Suma:", calCientifica.sumar(45, 45)); //uso la suma que viene de calculadora pero invoco calcientifica