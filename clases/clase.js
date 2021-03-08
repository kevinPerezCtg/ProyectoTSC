var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, fechaCreacion_, color_, puertas_, kilometraje_) {
        console.log(this, "This antes");
        this.marca = marca_;
        this.fechaCreacion = fechaCreacion_;
        this.color = color_;
        this.puertas = puertas_;
        this.kilometraje = kilometraje_;
        console.log(this, "This despues");
    }
    Vehiculo.prototype.avanzar = function () {
        this.kilometraje = this.kilometraje + 100;
    };
    return Vehiculo;
}());
var vehiculo1 = new Vehiculo("ford", "2019", "negro", 2, 0);
console.log("Kilometraje antes ", vehiculo1.kilometraje);
vehiculo1.avanzar();
console.log("kilometraje despues ", vehiculo1.kilometraje);
