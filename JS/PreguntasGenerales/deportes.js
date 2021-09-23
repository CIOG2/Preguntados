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
    imagenRespuesta: "https://www.guinnessworldrecords.es/Images/Hall-of-Fame-Pele_tcm29-478317.jpg", 
}); 
Deportes[Numero()] = new Preguntas({
    pregunta: "¿Cual es el Pais con mayor cantidad de medallas olimpicas?",
    opcion1: "Francia",
    opcion2: "Brasil",
    opcion3: "China",
    opcion4: "Estados Unidos",
    respuesta: "Estados Unidos",
    imagen: "https://zonaj.net/imgupload/deportes-eliminados-en-la-historia-de-los-juegos-olimpicos_VpXPOu.jpg",
    imagenRespuesta: "https://www.eluniversal.com.co/juegos-olimpicos-2012/sites/default/files/ESTADOS%20UNIDOS.jpg", 
}); 
Deportes[Numero()] = new Preguntas({
    pregunta: "¿Quien es el mayor medallista olimpico de la historia?",
    opcion1: "Usain Bolt",
    opcion2: "Muhammad Ali",
    opcion3: "Jesse Owens",
    opcion4: "Michael Phelps",
    respuesta: "Michael Phelps",
    imagenRespuesta: "https://swimswam.com/wp-content/uploads/2016/07/Michael-Phelps-by-Mike-Lewis-3.jpg", 
});




export default Deportes;