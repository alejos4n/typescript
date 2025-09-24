//enumeradores
//un enum es una forma  de dar nombres sencillos a un grupo de sets de valores númericos
var MarcasDeCarro;
(function (MarcasDeCarro) {
    MarcasDeCarro[MarcasDeCarro["Toyota"] = 100] = "Toyota";
    MarcasDeCarro[MarcasDeCarro["Chevrolet"] = 101] = "Chevrolet";
    MarcasDeCarro[MarcasDeCarro["Ford"] = 102] = "Ford";
})(MarcasDeCarro || (MarcasDeCarro = {}));
var prius = MarcasDeCarro.Chevrolet;
console.log(prius);
//lo anterior imprime cero pues los enums inician en cero, pero se puede parametrizar
//let sandero: MarcasDeCarro = MarcasDeCarro.Ford;
//console.log(sandero);
//imprimos el valor del nombre, en este caso del indice 0
console.log(MarcasDeCarro[2]);
