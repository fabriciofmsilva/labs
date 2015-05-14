// peso / altura * altura

var peso = 100;
var altura = 2.0;
var nome = 'Fulano da Silva';

if (altura != 0) {
  var imc = peso / (altura * altura); // 25
  console.log(imc);
} else {
  console("Não posso executar uma divisão por 0!");
}
