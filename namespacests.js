/**
 * forma de organziar y agrupasr el código en módulos lógicos
 * para evitar colisiones de nombres.
 * En capsula variables, funciones, clases y otros elementos de un contenedor
 */
var MiEspacio;
(function (MiEspacio) {
    function saludar() {
        console.log("hola desde mi espacio");
    }
    MiEspacio.saludar = saludar;
})(MiEspacio || (MiEspacio = {}));
//imprimo el saludo en pantalla
MiEspacio.saludar();
var Despedir;
(function (Despedir) {
    var SubEspacio;
    (function (SubEspacio) {
        function despedir() {
            console.log("adios desde el subespacio");
        }
        SubEspacio.despedir = despedir;
    })(SubEspacio = Despedir.SubEspacio || (Despedir.SubEspacio = {}));
})(Despedir || (Despedir = {}));
Despedir.SubEspacio.despedir();
