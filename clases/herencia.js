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
//Clase padre
var Animal = /** @class */ (function () {
    function Animal() {
    }
    Animal.prototype.caminar = function (distancia) {
        console.log("Se mueve " + distancia + " metros");
    };
    return Animal;
}());
//Clase hija
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Gato.prototype.maullar = function () {
        console.log("miauuuu");
    };
    return Gato;
}(Animal));
var gato = new Gato();
gato.maullar();
gato.caminar(20);
