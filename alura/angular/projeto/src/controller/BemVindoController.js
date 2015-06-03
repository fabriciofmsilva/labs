app.controller('BemVindoController', function($scope, FuncionarioService) {
  $scope.funcionarios = [];

  function listaFuncionario() {
    FuncionarioService.query(function(retorno) {
      $scope.funcionarios = retorno;
      $scope.mostra = true;
    });
  }
  listaFuncionario();
});
