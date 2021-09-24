function opcionesAleatorias() {
  let numerosAleatorios = [];

  for(let i = 0; i < 4; i++){
    let verificador = true, num;
    while(verificador){
      num = parseInt(Math.random() * (5 - 1) + 1);
      if(numerosAleatorios.includes(num)){
        verificador = true;   
      } else {
        verificador = false;
      }
    }
    numerosAleatorios[i] = num;
  }
  return numerosAleatorios
}

export default opcionesAleatorias;