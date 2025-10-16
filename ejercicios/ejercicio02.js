//calculadora
/**
 * crear una calculadora usando funciones y clases de ser necesario
 */
//operaciones usando funciones
function suma(a, b) {
    return a + b;
}
function resta(a, b) {
    return a - b;
}
function muliplica(a, b) {
    return a * b;
}
function divide(a, b) {
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
var miSuma = function (a, b) { return a + b; };
console.log("la suma es: ");
console.log(miSuma(35, 43));
var miResta = function (a, b) { return a - b; };
console.log("La resta desde interface:");
console.log(miResta(55, 234));
console.log("Multiplicación usando función anonima");
var miMulti = function (a, b) { return a * b; };
console.log(miMulti(67458, 547348));
var miDivis = function (a, b) { return a / b; };
console.log("imprimiendo desde interface división");
console.log(miDivis(434, 4354));
//usando clases
console.log("imprimiendo desde clases");
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.sumar = function (a, b) {
        return a + b;
    };
    ;
    Calculadora.prototype.restar = function (a, b) {
        return a - b;
    };
    ;
    Calculadora.prototype.multiplica = function (a, b) {
        return a * b;
    };
    ;
    Calculadora.prototype.divide = function (a, b) {
        return a / b;
    };
    return Calculadora;
}());
//instancio la clase, o sea, creo un objeto de ella
var miCalculadora = new Calculadora();
//uso los métodos de la clase
console.log("suma:", miCalculadora.sumar(23, 56));
console.log("Resta: ", miCalculadora.restar(234, 678));
console.log("Multiplicar: ", miCalculadora.multiplica(44, 567));
console.log("División: ", miCalculadora.divide(348, 78));
//usando la clase para no crear un objeto
console.log("usando la clase para no crear un objeto");
var Calculadora2 = /** @class */ (function () {
    function Calculadora2() {
    }
    Calculadora2.sumar = function (a, b) {
        return a + b;
    };
    ;
    Calculadora2.restar = function (a, b) {
        return a - b;
    };
    ;
    Calculadora2.muliplicar = function (a, b) {
        return a * b;
    };
    ;
    Calculadora2.divide = function (a, b) {
        return a / b;
    };
    return Calculadora2;
}());
//uso sin instanciar
console.log("uso sin instanciar de la clase");
console.log("Suma:", Calculadora2.sumar(434, 87));
console.log("Resta:", Calculadora2.restar(876, 5934783));
console.log("Multiplicación:", Calculadora2.muliplicar(34, 657687));
console.log("División:", Calculadora2.divide(98, 354));
