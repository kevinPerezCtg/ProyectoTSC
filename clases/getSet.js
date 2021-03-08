let permiso = true;
class Trabajador {
    get nombreCompleto() {
        return this.nombre;
    }
    set colocarNombre(nombre) {
        if (permiso) {
            this.nombre = nombre;
        }
        else {
            console.log("Sin permisos");
        }
    }
}
let trabajador = new Trabajador();
trabajador.nombre = "Pedro";
console.log(trabajador.nombreCompleto);
trabajador.colocarNombre = "Juan";
console.log(trabajador.nombreCompleto);
