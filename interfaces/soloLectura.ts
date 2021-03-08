interface Punto{
    readonly coordenadaX: number;
    readonly coordenadaY: number;
}

let punto: Punto = {coordenadaX:34, coordenadaY:23};
console.log("punto ",punto);

//Al ser solo lectura (readonly) no se pueden sobreEscribir sus datos