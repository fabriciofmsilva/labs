angular.module('app').controller('zumbisController', function($scope) {
  $scope.ocorrencias = [];

  $scope.adiciona = function(ocorrencia) {
    $scope.ocorrencias.push(angular.copy(ocorrencia));
  };
});
