class Persona{
    public nombre:string;

    public constructor(nombre:string){
        this.nombre = nombre;
    }

    public hablar(mensaje:string):void{
        console.log(mensaje);
    }
}

let instancia = new Persona("Kevin");
console.log(instancia.nombre);
instancia.hablar("hola");

class Jugador{
    private posicion:string;

    constructor(posicion:string) {
        this.posicion = posicion;
    }

    obtenerPosicion():void{
        console.log(this.posicion)
        this.sobreescribirPosicion();
        console.log(this.posicion)
    }

    private sobreescribirPosicion():void{
       this.posicion = "Arquero";
    }
}

let jugador1 = new Jugador("Delantero");
jugador1.obtenerPosicion();


class Instrumento{
    protected nombre:string;

    constructor(nombre:string) {
        this.nombre = nombre;
    }
}

class Piano extends Instrumento{
    private deCuerda:boolean = false;

    constructor(nombre:string) {
        super(nombre);
    }

    public obtenerNombre(){
        console.log(this.nombre);
    }
}

let miPiano = new Piano("Mi piano de cola");
miPiano.obtenerNombre();
