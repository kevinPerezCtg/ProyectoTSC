let permiso:boolean = true;
class Trabajador{
    nombre:string;

    get nombreCompleto():string{
        return this.nombre;
    }

    set colocarNombre(nombre:string){
        if(permiso){
            this.nombre = nombre;
        }else{
            console.log("Sin permisos");
        }    
    }
}

let trabajador = new Trabajador();
trabajador.nombre = "Pedro";
console.log(trabajador.nombreCompleto);

trabajador.colocarNombre = "Juan";

console.log(trabajador.nombreCompleto);