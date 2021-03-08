class Vehiculo{
    //Atributos o propiedades
    marca:string;
    fechaCreacion:string;
    color:string;
    puertas:number;
    kilometraje:number;

    constructor(marca_:string, fechaCreacion_:string,color_:string,puertas_:number,kilometraje_:number){
        console.log(this, "This antes");
        this.marca = marca_;
        this.fechaCreacion = fechaCreacion_;
        this.color = color_;
        this.puertas = puertas_;
        this.kilometraje = kilometraje_;
        console.log(this, "This despues");
    }

    avanzar(){
        this.kilometraje = this.kilometraje+100;
    }
}


let vehiculo1 = new Vehiculo("ford","2019","negro",2,0);
console.log("Kilometraje antes ",vehiculo1.kilometraje);
vehiculo1.avanzar();
console.log("kilometraje despues ",vehiculo1.kilometraje);