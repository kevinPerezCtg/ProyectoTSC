interface Datos<T=string> {
    nombre:T;
}

let personaLibre: Datos = {nombre: "Juan"};
let personaPresa: Datos<number> = {nombre: 325};