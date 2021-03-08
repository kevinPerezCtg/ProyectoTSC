var casasHP = ["Gryffindor", "Hufflepuff", "Ravenclauw", "Slytherin"];
function sombrero(todasLasCasasHP) {
    var indiceRamdom = Math.floor(Math.random() * todasLasCasasHP.length);
    console.log(indiceRamdom, "indice");
    return todasLasCasasHP[indiceRamdom];
}
var miCasa = sombrero(casasHP);
console.log("Bienvenido a " + miCasa);
var materias = [20, 12, 40, 33];
function materiasSemestre(materias) {
    var indiceRamdom = Math.floor(Math.random() * materias.length);
    return materias[indiceRamdom];
}
var misMaterias = materiasSemestre(materias);
console.log("Debes cursar " + misMaterias + " materias");
