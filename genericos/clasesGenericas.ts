class Unificador<T>{
    valor:T;
    sumar:(valor1:T, valor2:T) => T;
}

//La T simboliza un numero
let miUniificador = new Unificador<number>();
miUniificador.valor = 20;
miUniificador.sumar = function(valor1,valor2){
    return valor1+valor2;
}

console.log(miUniificador.sumar(2,3));
console.log(miUniificador.valor);


//La T simboliza un string
let miUniificador2 = new Unificador<string>();
miUniificador2.valor = "20";
miUniificador2.sumar = function(valor1,valor2){
    return valor1+valor2;
}

console.log(miUniificador2.sumar("2","3"));
console.log(miUniificador2.valor);