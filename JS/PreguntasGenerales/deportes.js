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
Deportes [Numero()] = new Preguntas ({
    pregunta: "Año en el cual Maradona gano la copa del mundo",
    opcion1: "1970",
    opcion2: "1975",
    opcion3: "1980",
    opcion4: "1986",
    respuesta: "1986",
    imagen: "https://images.ecestaticos.com/WdsjH-iuX4FmwoFaYHuprKEm1H0=/251x0:1149x633/992x700/filters:fill(white):format(JPG)/f.elconfidencial.com/original/9f6/914/fb9/9f6914fb931ad06438aea74877dce6dc.jpg",
})
Deportes[Numero()] = new Preguntas({
    pregunta: "Año en el cual los Dodgers ganaron su septimo campeonato de serie mundial",
    opcion1: "2004",
    opcion2: "2007",
    opcion3: "2015",
    opcion4: "2020",
    respuesta: "2020",
    imagen: "https://www.mlbstatic.com/team-logos/share/119.jpg", 
});
Deportes[Numero()] = new Preguntas({
    pregunta: "Jugador de NFL con mas anillos de Super Bowl",
    opcion1: "Charles Haley",
    opcion2: "Joe Montana",
    opcion3: "Jesse Sapolu",
    opcion4: "Tom Brady",
    respuesta: "Tom Brady",
    imagenRespuesta: "https://a.espncdn.com/photo/2021/0723/r884242_1296x729_16-9.jpg", 
}); 
Deportes[Numero()] = new Preguntas({
    pregunta: "Fisicoculturista ganador 8 veces del Mr.Olympia",
    opcion1: "Arnold Schwarzenegger",
    opcion2: "Dorian Yates",
    opcion3: "Jay Cutler",
    opcion4: "Ronnie Coleman",
    respuesta: "Ronnie Coleman",
    imagenRespuesta: "https://media.gq.com.mx/photos/605fb98e40c44aa45469e1c7/master/w_3000,c_limit/ronnie%20concurso.jpg", 
}); 


export default Deportes;