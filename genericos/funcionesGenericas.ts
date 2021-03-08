function elementoRandom<T>(lista:T[]):T{
    let indiceRandom:number = Math.floor(Math.random()*lista.length);
    return lista[indiceRandom];
}

//T en este ejemplo simboliza un numero
let numeros:number[] = [32,54,1,3];
let miNumero: number = elementoRandom(numeros);
console.log(miNumero);

//T en este caso simboliza una letra
let letras: string[] = ["a","b","c","d"];
let miLetra: string = elementoRandom(letras);
console.log(miLetra);