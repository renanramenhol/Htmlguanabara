function calculaDuracaoDoJogoEmHoras(horaInicio, horaFim) {
  if (horaInicio > 24 || horaFim > 24) {
    alert("A hora não pode ser maior que 24");
    return;
  }
  let duracaoDoJogo = 0;
  if(horaFim < horaInicio){
      duracaoDoJogo = 24 - (horaInicio - horaFim);
    } else {
      duracaoDoJogo = horaFim - horaInicio;
  }


  alert(duracaoDoJogo);
}



const horaInicio = 23;
const horaFim = 3;
calculaDuracaoDoJogoEmHoras(horaInicio, horaFim);
