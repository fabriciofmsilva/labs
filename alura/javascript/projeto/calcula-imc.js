// peso / altura * altura

// var peso1 = document.getElementById('peso-1').textContent;
// var altura1 = document.getElementById('altura-1').textContent;
// var nome1 = document.getElementById('nome-1').textContent;

// var paciente1 = {
//   peso   : peso1,
//   altura : altura1,
//   nome   : nome1
// };

// var peso2 = document.getElementById('peso-2').textContent;
// var altura2 = document.getElementById('altura-2').textContent;
// var nome2 = document.getElementById('nome-2').textContent;

// var paciente2 = {
//   peso   : peso2,
//   altura : altura2,
//   nome   : nome2
// };

// var pacientes = [paciente1, paciente2];

var trsPacientes = document.getElementsByClassName('paciente'); // Array de trs


for (var posicaoAtual = 0; posicaoAtual <= trsPacientes.length - 1; posicaoAtual++) {
  var pacienteTr = trsPacientes[posicaoAtual];

  var tdNome = pacienteTr.getElementsByClassName('info-nome')[0];
  var tdPeso = pacienteTr.getElementsByClassName('info-peso')[0];
  var tdAltura = pacienteTr.getElementsByClassName('info-altura')[0];

  var paciente = {
    nome: tdNome.textContent,
    peso: tdPeso.textContent,
    altura: tdAltura.textContent
  };

  if (paciente.altura != 0) {
    var imc = paciente.peso / (paciente.altura * paciente.altura); // 25

    var tdImc = pacienteTr.getElementsByClassName('info-imc')[0];
    tdImc.textContent = imc;

    console.log(imc);
  } else {
    console("Não posso executar uma divisão por 0!");
  }
}
