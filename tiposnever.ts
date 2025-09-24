/**
 * representa valores que nunca ocurren, por ejemplo una función que siempre lanza una excepción
 * subtipo asignable a cualquier tipo sin embargo ningun tipo es subtipo de never
 */

//ewsta función no tiene punto final ya que dispara una excepción

function error(mensaje: string): never {
    throw new Error(mensaje);
}

// no tiene punto final por dispara un error
function fallo(): never {
    return error("Reportar fallo");
}


//no finalzia ya que posee un loop infinito
function loopinfinito(): never {
    while (true) {}
}