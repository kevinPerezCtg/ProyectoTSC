function entrando(clase:Object) {
    console.log("primer decorador");
}

function imprimiendo(clase:Object) {
    console.log("segundo decorador");
}

@entrando
@imprimiendo
class Animal{
    nombre:string = "Perro";
}

let miAnimal:Animal = new Animal();
console.log(miAnimal);