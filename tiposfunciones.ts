//uan función es el componente más básico en como los datos son transferidos

function saludar(nombre: string) {
    console.log(`Hola ${nombre}`);
}

saludar("Alejandro");

//una función tiene un retorno y estos retornan valores
//los tipos de valor de retorno también pueden ser definidos

//función para elevar una base 10
function elevarAlCuadrado(base: number): number{
    return base * base
}

let numeroBase = 10; //asigno el valor a la variable
let numeroAlcuadrado = elevarAlCuadrado(numeroBase); //paso como argumento la variable numeroBase y lo asigno a la varible numeroAñCuadrado
//imprimo
console.log(numeroAlcuadrado);

//no siempre es necesario 

/**funciones anónimas
 * son algo diferentes a las funciones declarativas, cuando la función aparece en un lugar
 * donde Typescript determina que va a ser invocada los parámetros son asignados automaticamente
 * 
*/

const nombres = ["Juan", "Pedro", "Luiws"];

//iteramos la variable nombres mediante función anónima
nombres.forEach(function (s) {
    console.log(s.toUpperCase());
});

//función anónima tipo flecha
nombres.forEach((s) => {
    console.log(s.toUpperCase());
});

//typescript recibe la función y determina el tipo de los argumentos, enm este caso strings
