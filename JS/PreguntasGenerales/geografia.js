import Preguntas from "./preguntas.js";
const Geografia  = [];

//Funcion para autoSumar y evitar conflictos al generar preguntas
let NUM = 0;
const Numero = () => NUM++;


Geografia[Numero()] = new Preguntas({
    pregunta: '¿Cuantos conteninetes exiseten?',
    opcion1: 3,
    opcion2: 4,
    opcion3: 6,
    opcion4: 5,
    respuesta: 6,
    imagen: "",
    imagenRespuesta: "url", 
});

export default Geografia;