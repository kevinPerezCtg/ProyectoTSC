let pelicula:string = "Piratas del Caribe";
let serie:string = 'Hannibal';
let poema:string = `
Lordlksnlksnffnslkfvnslkfvnsklvnsklvnsklnsdfklnsdflknslfknsfklnsdflksnflknfklfnkfklfsdklanfl,
lkdfkadlkfnadlkfndalkfnadlkfnadlkfnadlkfnadlkfnadlfknadflknadfkandfkldnafkladnfklnlfknadlfnadlfk,
dlfhadlfhadlfkhadklfhadlkfhadlfhaldfhladfhladfhladkfhalkdfhadlkfhadlkfhadlkfhadlkfhadkahflkdfkldaf.
`;

//Operaciones

let programas: string = "Mis programas favoritos son: "+ pelicula + " y "+ serie;
console.log(programas);

let programas2: string = `
    Mis programas favoritos son: ${pelicula} y ${serie}
`;

console.log(programas2);

let edadActual = 25;
let edadFutura: string =`
    El siguiente mes mi edad sera : ${edadActual + 1}
`;
console.log(edadFutura);


//metodos
console.log(programas.charAt(0));
console.log(programas.toLocaleUpperCase());







