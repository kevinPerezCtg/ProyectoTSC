//Funciones en TS
function multiplicar(x, y) {
    return x * y;
}
var result = multiplicar(2, 4);
console.log("result ", result);
var sumatoria = 0;
console.log("Suamtoria antes de ejecutar ", sumatoria);
function sumar() {
    sumatoria++;
}
sumar();
console.log("Suamtoria despues de ejecutar ", sumatoria);
