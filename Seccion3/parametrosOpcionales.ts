function nombreCompleto(nombre:string, apellido: string):string{
    return nombre + " "+apellido;
}

let resultado: string = nombreCompleto("Kevin","Perez");
console.log(resultado);


function nombreCompleto2(nombre:string, apellido?: string):string{
    if(apellido){
        return nombre + " "+apellido;
    }else{
        return nombre; 
    }    
}

let resultado2: string = nombreCompleto2("Kevin");
console.log(resultado2);