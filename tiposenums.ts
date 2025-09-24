//enumeradores

//un enum es una forma  de dar nombres sencillos a un grupo de sets de valores númericos

enum MarcasDeCarro {
    Toyota = 100,
    Chevrolet,
    Ford
}

let prius: MarcasDeCarro = MarcasDeCarro.Chevrolet;
console.log(prius);
//lo anterior imprime cero pues los enums inician en cero, pero se puede parametrizar

//let sandero: MarcasDeCarro = MarcasDeCarro.Ford;
//console.log(sandero);

//imprimos el valor del nombre, en este caso del indice 0
console.log(MarcasDeCarro[2]);