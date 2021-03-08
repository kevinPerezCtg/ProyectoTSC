function nombreCompleto(nombre, apellido) {
    return nombre + " " + apellido;
}
var resultado = nombreCompleto("Kevin", "Perez");
console.log(resultado);
function nombreCompleto2(nombre, apellido) {
    if (apellido) {
        return nombre + " " + apellido;
    }
    else {
        return nombre;
    }
}
var resultado2 = nombreCompleto2("Kevin");
console.log(resultado2);
