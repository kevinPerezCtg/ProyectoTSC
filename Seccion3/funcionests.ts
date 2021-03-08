//Funciones en TS
function multiplicar(x:number,y:number):number{
    return x*y;
}

let result:number = multiplicar(2,4);
console.log("result ",result);


let sumatoria: number = 0;
console.log("Suamtoria antes de ejecutar ",sumatoria);

function sumar():void{
    sumatoria++;
}

sumar();
console.log("Suamtoria despues de ejecutar ",sumatoria);