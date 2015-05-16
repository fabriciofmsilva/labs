// peso / altura * altura

var peso = document.getElementById('peso-2').textContent;
var altura = document.getElementById('altura-2').textContent;
var nome = document.getElementById('nome-2').textContent;

var paciente = {
  peso   : peso,
  altura : altura,
  nome   : nome
};

if (paciente.altura != 0) {
  var imc = paciente.peso / (paciente.altura * paciente.altura); // 25

  var tdImc = document.getElementById('imc-2');
  tdImc.textContent = imc;

  console.log(imc);
} else {
  console("Não posso executar uma divisão por 0!");
}
