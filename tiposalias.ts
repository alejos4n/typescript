//los tipos alias es un nombre dado a cualquier tipo que se utilizan varias veces

//se crea el alias, en este caso tipo number pero no quiere decir que sean siempre le mismo tipo
type Punto = {
    x: number;
    y: number;
};

function imprimirCoordenada(punto: Punto) {
    console.log(`La coordenada x es: ${punto.x}`);
    console.log(`La coordenmada y es: ${punto.y}`);
}

imprimirCoordenada({x: 10, y: 25});

//alias de texto
type TextoMayusculas = string;

function convertirMayusculas(texto: string): TextoMayusculas {
    return texto.toUpperCase();
}

console.log(convertirMayusculas("hola mundo TypeScript"))