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
var Animall = /** @class */ (function () {
    function Animall(nombre) {
        console.log("Entre al constructor de Animall");
        this.nombre = nombre;
    }
    Animall.prototype.caminar = function (distancia) {
        if (distancia === void 0) { distancia = 0; }
        console.log(this.nombre + " camino " + distancia + " metros");
    };
    return Animall;
}());
var Serpiente = /** @class */ (function (_super) {
    __extends(Serpiente, _super);
    function Serpiente(nombre, longitud) {
        var _this = this;
        console.log("Entre al constructor de serpiente");
        _this = _super.call(this, nombre) || this;
        _this.longitud = longitud;
        return _this;
    }
    Serpiente.prototype.caminar = function (distancia) {
        if (distancia === void 0) { distancia = 5; }
        console.log(" Deslizando " + distancia + " metros");
        //super.caminar(distancia);
    };
    return Serpiente;
}(Animall));
var Caballo = /** @class */ (function (_super) {
    __extends(Caballo, _super);
    function Caballo(nombre) {
        var _this = this;
        console.log("Entre al constructor de caballo");
        _this = _super.call(this, nombre) || this;
        return _this;
    }
    return Caballo;
}(Animall));
var san = new Serpiente("San ", 23);
var zeus = new Caballo("Zeus el caballo");
san.caminar();
san.caminar(33);
console.log(san.longitud);
zeus.caminar();
