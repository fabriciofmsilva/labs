app.controller('FunctionariosController', function($scope, $http, $resource) {
  $scope.funcionarios = [];
  // $scope.mostra = true;

  // $http.get('/funcionarios').success(function(retorno) {
  //   $scope.funcionarios = retorno;
  // }).error(function(msg) {
  //   $scope.mensagem = 'Houve um problema ao acessar o serviço. Tente mais tarde.';
  //   console.log(msg);
  // });

  // $http.get('/funcionarios/1').success(function(retorno) {
  //   console.log(retorno);
  // });

  // $http.delete('/funcionarios/1').success(function(retorno) {
  //   console.log(retorno);
  // });

  var resource = $resource('/funcionarios/:id');

  function listaFuncionarios() {
    resource.query(function(retorno) {
      $scope.funcionarios = retorno;
      $scope.mostra = true;
    });
  }

  listaFuncionarios();

  $scope.remove = function(funcionario) {
    resource.delete({id: funcionario.id}, function(status) {
      listaFuncionarios();
    });
  }
});
