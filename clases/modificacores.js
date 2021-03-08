var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.hablar = function (mensaje) {
        console.log(mensaje);
    };
    return Persona;
}());
var instancia = new Persona("Kevin");
console.log(instancia.nombre);
instancia.hablar("hola");
var Jugador = /** @class */ (function () {
    function Jugador(posicion) {
        this.posicion = posicion;
    }
    Jugador.prototype.obtenerPosicion = function () {
        console.log(this.posicion);
        this.sobreescribirPosicion();
        console.log(this.posicion);
    };
    Jugador.prototype.sobreescribirPosicion = function () {
        this.posicion = "Arquero";
    };
    return Jugador;
}());
var jugador1 = new Jugador("Delantero");
jugador1.obtenerPosicion();
var Instrumento = /** @class */ (function () {
    function Instrumento(nombre) {
        this.nombre = nombre;
    }
    return Instrumento;
}());
var Piano = /** @class */ (function (_super) {
    __extends(Piano, _super);
    function Piano(nombre) {
        var _this = _super.call(this, nombre) || this;
        _this.deCuerda = false;
        return _this;
    }
    Piano.prototype.obtenerNombre = function () {
        console.log(this.nombre);
    };
    return Piano;
}(Instrumento));
var miPiano = new Piano("Mi piano de cola");
miPiano.obtenerNombre();
