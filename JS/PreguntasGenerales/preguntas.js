class Preguntas{
    constructor({
        pregunta,
        opcion1,
        opcion2,
        opcion3,
        opcion4,
        respuesta,
        imagen = "none",
        imagenRespuesta  = "none", 
    }){
        this.pregunta = pregunta;
        this.opcion1 = opcion1;
        this.opcion2 = opcion2;
        this.opcion3 = opcion3;
        this.opcion4 = opcion4;
        this.respuesta = respuesta;
        this.imagen = imagen;    
        this.imagenRespuesta = imagenRespuesta;
    }
}
export default Preguntas;