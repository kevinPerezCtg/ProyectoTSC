abstract class superClase{
    abstract metodoASobrescribir():void;

    saludar():void{
        console.log("hola");
    }
}

class claseDerivada extends superClase{
    constructor() {
        super()
    }

    metodoASobrescribir():void{
        console.log("codigo nuevo");
    }
}

let instancia = new claseDerivada();
instancia.saludar();
instancia.metodoASobrescribir();