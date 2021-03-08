//Clase padre
class Animal{
    caminar(distancia:number):void{
        console.log("Se mueve "+distancia+" metros");
    }
}

//Clase hija
class Gato extends Animal{
    maullar():void{
        console.log("miauuuu");
    }
}

let gato = new Gato();
gato.maullar();
gato.caminar(20);
