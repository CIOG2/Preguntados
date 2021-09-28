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
Deportes[Numero()] = new Preguntas({
    pregunta: "Seleccion con mas mundiales de Futbol",
    opcion1: "Francia",
    opcion2: "Italia",
    opcion3: "Alemania",
    opcion4: "Brasil",
    respuesta: "Brasil",
    imagenRespuesta: "https://libretilla.com/wp-content/uploads/2019/09/brasil-bandera.png", 
});
Deportes[Numero()] = new Preguntas({
    pregunta: "Es conciderada una posicion de un equipo de Basketball",
    opcion1: "Filder",
    opcion2: "Portero",
    opcion3: "Delantero",
    opcion4: "Escolta",
    respuesta: "Escolta",
    imagenRespuesta: "https://asisejuega.com/wp-content/uploads/2021/05/las-posiciones-del-basquetbol.jpg", 
});
Deportes[Numero()] = new Preguntas({
    pregunta: "Rafael Nadal forma parte de la historia del  __________",
    opcion1: "Voleibol",
    opcion2: "Golf",
    opcion3: "Beisbol",
    opcion4: "Tenis",
    respuesta: "Tenis",
    imagen: "https://www.elsoldemexico.com.mx/deportes/tenis/560zw4-nadal3.jpg/ALTERNATES/LANDSCAPE_400/nadal3.jpg",
}); 
Deportes[Numero()] = new Preguntas({
    pregunta: "Equipo de Beisbol con mas campeonatos en los juegos olimpicos",
    opcion1: "Estados Unidos",
    opcion2: "Japon",
    opcion3: "Republica Dominicana",
    opcion4: "Cuba",
    respuesta: "Cuba",
    imagenRespuesta: "https://gtimg.tokyo2020.org/image/private/t_article-image-desktop/production/y2gcphhvippzvajtupys", 
}); 
Deportes[Numero()] = new Preguntas({
    pregunta: "¿En que año se disputo la primera copa mundial de futbol?",
    opcion1: "1934",
    opcion2: "1935",
    opcion3: "1940",
    opcion4: "1930",
    respuesta: "1930",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Tour_da_Taça_da_Copa_do_Mundo_%2814231974005%29.jpg/245px-Tour_da_Taça_da_Copa_do_Mundo_%2814231974005%29.jpg", 
});
Deportes[Numero()] = new Preguntas({
    pregunta: "¿Que deporte practicaba Julio Cesar Chavez?",
    opcion1: "Futbol",
    opcion2: "Voleibol",
    opcion3: "Beisbol",
    opcion4: "Boxeo",
    respuesta: "Boxeo",
    imagenRespuesta: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Tour_da_Taça_da_Copa_do_Mundo_%2814231974005%29.jpg/245px-Tour_da_Taça_da_Copa_do_Mundo_%2814231974005%29.jpg", 
});
Deportes[Numero()] = new Preguntas({
    pregunta: "¿A que encuentro de futbol se le denomino el 'MARACANAZO'?",
    opcion1: "Alemania vs Brasil",
    opcion2: "Uruguay vs Argentina",
    opcion3: "Argentina vs Brasil",
    opcion4: "Brasil vs Uruguay",
    respuesta: "Brasil vs Uruguay",
    imagenRespuesta: "https://media.historiahoy.com.ar/adjuntos/231/imagenes/000/077/0000077923.jpeg", 
});
Deportes[Numero()] = new Preguntas({
    pregunta: "¿A que equipo de basketball se le apodo 'Dream Team'?",
    opcion1: "Alemania",
    opcion2: "Lituania",
    opcion3: "Croacia",
    opcion4: "Estados Unidos",
    respuesta: "Estados Unidos",
    imagenRespuesta: "https://phantom-marca.unidadeditorial.es/6da2d2fb970bb0d736cf089e941af99f/resize/1320/f/jpg/assets/multimedia/imagenes/2021/09/22/16322929694121.jpg", 
});
Deportes[Numero()] = new Preguntas({
    pregunta: "¿Quien fue el autor de 'La mano de dios'?",
    opcion1: "Gerhard Muller",
    opcion2: "Ronaldo",
    opcion3: "Pele",
    opcion4: "Maradona",
    respuesta: "Maradona",
    imagenRespuesta: "https://images.mediotiempo.com/6h9Gdx-OKajnbIpeTKo1DpJsOcY=/958x596/uploads/media/2017/06/01/mano-de-dios.jpg", 
});
Deportes[Numero()] = new Preguntas({
    pregunta: "¿Que deporte practicaba Babe Ruth?",
    opcion1: "Futbol Americano",
    opcion2: "Lucha",
    opcion3: "Baloncesto",
    opcion4: "Beisbol",
    respuesta: "Beisbol",
    imagenRespuesta: "https://cadenaser00.epimg.net/ser/imagenes/2021/06/30/ser_madrid_sur/1625057662_253558_1625058148_noticia_normal.jpg", 
});
Deportes[Numero()] = new Preguntas({
    pregunta: "¿Quien es el maximo goleador de la copa mundial de futbol?",
    opcion1: "Cristiano Ronaldo",
    opcion2: "Ronaldo",
    opcion3: "Pele",
    opcion4: "Miroslav Klose",
    respuesta: "Miroslav Klose",
    imagenRespuesta: "https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2GLIRXJ6RKVH5UEQ7ZOLMUNUYU.jpg", 
});
Deportes[Numero()] = new Preguntas({
    pregunta: "¿En que equipo jugaba Michael Jordan?",
    opcion1: "Golden state",
    opcion2: "Celtics",
    opcion3: "Lakers",
    opcion4: "Chicago Bulls",
    respuesta: "Chicago Bulls",
    imagenRespuesta: "https://phantom-elmundo.unidadeditorial.es/3519c50eb24f9ecdc6ddfbdd22d70f4f/crop/29x0/572x362/f/jpg/assets/multimedia/imagenes/2021/04/20/16189530885380.jpg", 
});
Deportes[Numero()] = new Preguntas({
    pregunta: "¿A que equipo de futbol le corresponde el lote de los 'Galacticos'?",
    opcion1: "Barcelona",
    opcion2: "Liverpool",
    opcion3: "Milan",
    opcion4: "Real Madrid",
    respuesta: "Real Madrid",
    imagenRespuesta: "https://as01.epimg.net/futbol/imagenes/2021/08/10/primera/1628590630_974363_1628590696_noticia_normal_recorte1.jpg", 
});
Deportes[Numero()] = new Preguntas({
    pregunta: "¿Quien tiene el record de cuadrangulares en las grandes ligas?",
    opcion1: "Pete Rose",
    opcion2: "Loe Gehrig",
    opcion3: "Jackie Robinson",
    opcion4: "Babe Ruth",
    respuesta: "Babe Ruth",
    imagenRespuesta: "https://upload.wikimedia.org/wikipedia/commons/8/86/Babe_Ruth_1922.jpeg", 
});
export default Deportes;