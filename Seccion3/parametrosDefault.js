function asignarPosicion(nombre, numero, posicion) {
    if (posicion === void 0) { posicion = "Defensa"; }
    return nombre + " jugara con el numero " + numero + " en la posicion de " + posicion;
}
//En TSC todos los parametros son requeridos 
var jugador1 = asignarPosicion("Pedro", 10, "Delantero");
/*Los parametros por default son tratados como opcionales
si pasas un valor ste sobreescribe el parametro por defecto
*/
var jugador2 = asignarPosicion("Pedro", 23);
console.log(jugador1);
console.log(jugador2);
