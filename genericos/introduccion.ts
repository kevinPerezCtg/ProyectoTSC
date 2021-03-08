let casasHP: string[] = ["Gryffindor","Hufflepuff","Ravenclauw","Slytherin"];

function sombrero(todasLasCasasHP:string[]):string{
    let indiceRamdom:number = Math.floor(Math.random()*todasLasCasasHP.length);
    console.log(indiceRamdom,"indice");
    return todasLasCasasHP[indiceRamdom];
}

let miCasa: string = sombrero(casasHP)
console.log("Bienvenido a "+miCasa);

let materias:number[] = [20,12,40,33];

function materiasSemestre(materias:number[]):number{
    let indiceRamdom:number = Math.floor(Math.random()*materias.length);
    return materias[indiceRamdom];
}

let misMaterias: number = materiasSemestre(materias);
console.log("Debes cursar "+misMaterias+" materias");