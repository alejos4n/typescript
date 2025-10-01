/**
 * forma de organziar y agrupasr el código en módulos lógicos
 * para evitar colisiones de nombres.
 * En capsula variables, funciones, clases y otros elementos de un contenedor
 */

namespace MiEspacio {
    export function saludar() { //función saludar accesible fuera del namespace gracias al export
        console.log("hola desde mi espacio");
    }
}
//imprimo el saludo en pantalla
MiEspacio.saludar();

namespace Despedir {
    export namespace SubEspacio {
        export function despedir() {
            console.log("adios desde el subespacio");
        }
    }
}

Despedir.SubEspacio.despedir();
