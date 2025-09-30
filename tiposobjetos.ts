/*el tipo objeto representa un tipo no primitivo, o sea, cualquier cosa que no sea number,
string, booleano, bigint, symbol, null o undefined

Con este tipo las APIs pueden ser mejor representadas

*/

declare function crear(o: object): void;

crear({prop: 0});
//tipo null, dará error
crear(null);
//tipo undefined, dará error
crear(undefined);
crear([]);

//tipo primitivo false por lo cual dará error
crear(false);

