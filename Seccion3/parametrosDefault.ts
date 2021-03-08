function asignarPosicion(nombre:string, numero:number, posicion:string="Defensa"):string{
    return nombre+ " jugara con el numero "+numero+" en la posicion de "+posicion;
}

//En TSC todos los parametros son requeridos 
let jugador1: string = asignarPosicion("Pedro",10,"Delantero");
/*Los parametros por default son tratados como opcionales
si pasas un valor ste sobreescribe el parametro por defecto
*/
let jugador2: string = asignarPosicion("Pedro",23);
console.log(jugador1);
console.log(jugador2);