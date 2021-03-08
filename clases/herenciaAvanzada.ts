class Animall{
    nombre:string;

    constructor(nombre:string) {
        console.log("Entre al constructor de Animall");
        this.nombre = nombre;
    }

    caminar(distancia:number = 0):void{
        console.log(this.nombre+" camino "+distancia+" metros");        
    }
}

class Serpiente extends Animall{
    longitud:number;
    constructor(nombre:string, longitud:number){
        console.log("Entre al constructor de serpiente");
        super(nombre);
        this.longitud = longitud;
    }

    caminar(distancia:number = 5){
        console.log(" Deslizando "+distancia+" metros");
        //super.caminar(distancia);
    }
}

class Caballo extends Animall{    
    constructor(nombre:string){
        console.log("Entre al constructor de caballo");
        super(nombre);
    }
}

let san = new Serpiente("San ",23);
let zeus = new Caballo("Zeus el caballo");

san.caminar();
san.caminar(33);
console.log(san.longitud);

zeus.caminar();

