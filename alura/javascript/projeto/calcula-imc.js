// peso / altura * altura

var botao = document.getElementById('calcula-imcs');
// botao.onclick = calculaTodosImcs;
// botao.onclick = function() {
//   console.log("Calculando imcs");
// };
botao.addEventListener('click', function() {
  var trsPacientes = document.getElementsByClassName('paciente'); // Array de trs

  percorreArray(trsPacientes, function(pacienteTr) {
    var pacienteAtual = montaPaciente(pacienteTr);

    var imc = pacienteAtual.pegaImc();

    var tdImc = pacienteTr.getElementsByClassName('info-imc')[0];
    tdImc.textContent = imc;

    console.log(imc);
  });
});
// botao.addEventListener('click', function() {
//   console.log('Calculando Imcs');
// });
