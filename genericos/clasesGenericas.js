var Unificador = /** @class */ (function () {
    function Unificador() {
    }
    return Unificador;
}());
//La T simboliza un numero
var miUniificador = new Unificador();
miUniificador.valor = 20;
miUniificador.sumar = function (valor1, valor2) {
    return valor1 + valor2;
};
console.log(miUniificador.sumar(2, 3));
console.log(miUniificador.valor);
//La T simboliza un string
var miUniificador2 = new Unificador();
miUniificador2.valor = "20";
miUniificador2.sumar = function (valor1, valor2) {
    return valor1 + valor2;
};
console.log(miUniificador2.sumar("2", "3"));
console.log(miUniificador2.valor);
