function PreguntaAleatoria(Tema,NumerosUsados) {
    let repetido = true;
    let NUMERO = numeroAzar(Tema.length);

    while (repetido) {
        NUMERO = numeroAzar(Tema.length);
        if (NumerosUsados.includes(NUMERO)){
            repetido = true;
        } else {
            repetido = false;
        }
    }
    return NUMERO;
}

function numeroAzar(max){
    return parseInt(Math.random() * ( max - 0) + 0);
}

export default PreguntaAleatoria;