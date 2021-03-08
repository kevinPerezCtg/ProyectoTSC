import { pi, saludar, Jugador, Mascota, palabras } from "./exportar";
console.log(pi);
saludar();
let messi:Jugador = new Jugador;
messi.nombre = "Messi";

let zeus:Mascota = {nombre: "Zeus"};

console.log(messi, zeus);

palabras();


//Importar default
import periodista from "./default";
console.log(periodista.nombre+ " "+ periodista.apellido);
periodista.preguntar("Que edad tienes?");