/**
 * Los tipos en TypeScript son una herramienta básica para defginir caracteristicas y comportamiento de la variables
 * define qué tipo de valores puede contener una variable.
 * qué tipos de argumentos recibe una función.
 * 
 * 
 * 
 * TypeScript a diferencia de otros lenguajes tiene alguans caracteristicas:
 * Estática: verifica en la compilación, por lo que evita errores antes de ejecutar
 * Opcional: la tipificación es opcional y se puede tipificar despues.
 * Estructural: los tipos son compatibles si tienen la misma forma o estructura
 * 
 * Tipos:
 * 
 * Estáticos:
 *  -Primitivos:    number	Representa tanto números enteros como de punto flotante
                    bigint	Representa números enteros grandes
                    string	Representa cadenas de texto
                    boolean	Representa valores lógicos: true o false
                    symbol	Representa un valor único y mutable
                    any	Representa un tipo compatible con todos los demás
                Primitivos especiales:
                    void	Representa la ausencia de un valor de retorno
                    undefined	Representa una variable que ha sido declarada pero no inicializada
                    null	Representa la ausencia de un valor
                    never	Representa el tipo de valor que nunca ocurre
 *  -Definidos por el usuario:
                    literal	Representa un elemento que admite una serie de valores concretos
                    enum	Representa un conjunto de constantes con nombre
                    class	Representa una plantilla para crear objetos con propiedades y métodos definidos
                    array	Representa una lista de valores
                    tuple	Representa una colección con un número fijo de elementos
                    function	Representa una referencia función
                    union	Representa un valor que puede ser uno de varios tipos especificados
                    intersection	Representa un valor que debe cumplir con todos los tipos especificados
 * Genericos:
            Se determina en tiempo de ejecución.
 * Decoradores:
            añaden metadatos a las clases y sus miembros
 */