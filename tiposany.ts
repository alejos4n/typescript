/**usar any hace que se pierdan los beneficios del tipado
la idea de usar TypeScript es por el tipado. 
Por lo cual se recomienda usar any en casos estrictamente necesarios
*/


let variablesintipo: any = "Hola Lector";
variablesintipo = 100;

console.log(variablesintipo);

// como se ve, recibe un string e imprime un number