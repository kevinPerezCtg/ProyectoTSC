"use strict";
exports.__esModule = true;
var Periodista = /** @class */ (function () {
    function Periodista() {
    }
    Periodista.prototype.preguntar = function (mensaje) {
        console.log(mensaje);
    };
    return Periodista;
}());
var periodista = new Periodista();
periodista.nombre = "Marcos";
periodista.apellido = "Gonzales";
exports["default"] = periodista;
