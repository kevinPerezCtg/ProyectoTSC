interface Perro{
    nombre:string;
}

function adoptar(mascota:Perro): void{
    console.log("Yo adopte a "+mascota.nombre);
}

let miMascota = {nombre:"Tobby"};
adoptar(miMascota);

