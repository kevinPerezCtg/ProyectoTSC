var EspacioTrabajo;
(function (EspacioTrabajo) {
    var Persona = /** @class */ (function () {
        function Persona() {
        }
        return Persona;
    }());
    EspacioTrabajo.Persona = Persona;
    EspacioTrabajo.repetida = 2;
    console.log("Hello");
})(EspacioTrabajo || (EspacioTrabajo = {}));
var persona = new EspacioTrabajo.Persona();
persona.nombre = "Kevin";
console.log(persona);
