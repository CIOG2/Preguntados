import Preguntas from "./preguntas.js";
const Deportes  = [];

//Funcion para autoSumar y evitar conflictos al generar preguntas
let NUM = 0;


/*
SINTAXIS DE LAS PREGUNTAS
    Deportes[Numero()] = new Preguntas({
        pregunta: "",
        opcion1: "",
        opcion2: "",
        opcion3: "",
        opcion4: "",
        respuesta: "",
        imagen: "",
        imagenRespuesta: "url", 
    }); 
*/

const Numero = () => NUM++;

Deportes[Numero()] = new Preguntas({
    pregunta: "¿Quien es el hombre mas veloz de la historia?",
    opcion1: "Lamont Marcell",
    opcion2: "Johnny Weissmuller",
    opcion3: "Justin Gatlin",
    opcion4: "Usain Bolt",
    respuesta: "Usain Bolt",
    imagenRespuesta: "https://as01.epimg.net/masdeporte/imagenes/2019/08/16/atletismo/1565957973_435409_1565958289_noticia_normal.jpg", 
});
Deportes[Numero()] = new Preguntas({
    pregunta: "Jugador de futbol con mas copas del mundo",
    opcion1: "Raul",
    opcion2: "Maradona",
    opcion3: "Platini",
    opcion4: "Pele",
    respuesta: "Pele",
    imagen: "",
    imagenRespuesta: "https://www.guinnessworldrecords.es/Images/Hall-of-Fame-Pele_tcm29-478317.jpg", 
}); 



export default Deportes;