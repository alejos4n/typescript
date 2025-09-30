//los tipos alias es un nombre dado a cualquier tipo que se utilizan varias veces
function imprimirCoordenada(punto) {
    console.log("La coordenada x es: ".concat(punto.x));
    console.log("La coordenmada y es: ".concat(punto.y));
}
imprimirCoordenada({ x: 10, y: 25 });
function convertirMayusculas(texto) {
    return texto.toUpperCase();
}
console.log(convertirMayusculas("hola mundo typescript"));
