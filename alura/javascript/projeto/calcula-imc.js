// peso / altura * altura

var trsPacientes = document.getElementsByClassName('paciente'); // Array de trs

percorreArray(trsPacientes, function(pacienteTr) {
  var pacienteAtual = montaPaciente(pacienteTr);

  var imc = pacienteAtual.pegaImc();

  var tdImc = pacienteTr.getElementsByClassName('info-imc')[0];
  tdImc.textContent = imc;

  console.log(imc);
});
