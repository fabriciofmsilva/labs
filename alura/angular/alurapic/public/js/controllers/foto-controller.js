angular.module('Alurapic')
.controller('FotoController', function ($scope, cadastroDeFotos, recursoFoto, $routeParams) {

  $scope.foto = {};
  $scope.mensagem = '';

  if($routeParams.fotoId) {
    recursoFoto.get({fotoId : $routeParams.fotoId}, function(foto) {
        $scope.foto = foto;
    }, function() {
        console.log(erro);
        $scope.mensagem = 'Não foi possível obter a foto';
    });
  }

  $scope.submeter = function() {
    if($scope.formulario.$valid) {
      cadastroDeFotos.cadastrar($scope.foto)
        .then(function(dados) {
          $scope.mensagem = dados.mensagem;
          // limpa o formulário se for inclusão
          if(dados.inclusao) {
            $scope.foto = {};
          }
        })
        .catch(function(dados) {
          $scope.mensagem = dados.mensagem;
        });
    }
  };

});
