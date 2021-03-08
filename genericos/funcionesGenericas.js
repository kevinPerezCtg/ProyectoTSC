function elementoRandom(lista) {
    var indiceRandom = Math.floor(Math.random() * lista.length);
    return lista[indiceRandom];
}
//T en este ejemplo simboliza un numero
var numeros = [32, 54, 1, 3];
var miNumero = elementoRandom(numeros);
console.log(miNumero);
//T en este caso simboliza una letra
var letras = ["a", "b", "c", "d"];
var miLetra = elementoRandom(letras);
console.log(miLetra);
