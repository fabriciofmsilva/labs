var trsPacientes = document.getElementsByClassName('paciente'); // Array de trs

percorreArray(trsPacientes, function (pacienteTr) {
  var pacienteAtual = montaPaciente(pacienteTr);

  console.log(pacienteAtual.nome);
});
