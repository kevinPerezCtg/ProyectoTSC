//Funciones en TS
function multiplicar(num1, num2) {
    return num1 * num2;
}
var resultado = multiplicar(2, 5);
console.log("resultado: ", resultado);
var laCuenta = 100;
function aumentarCuenta(valor) {
    laCuenta += valor;
}
//Llamar funcion
aumentarCuenta(20);
console.log("cuneta ", laCuenta);
