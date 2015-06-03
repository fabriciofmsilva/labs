var app = angular.module('Funcionarios',['ngRoute', 'ngResource', 'services', 'minhasDiretivas']);

app.config(function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'partials/bem-vindo.tpl.html',
    controller: 'BemVindoController'
  });

  $routeProvider.when('/funcionarios', {
    templateUrl: 'partials/funcionarios.tpl.html',
    controller: 'FunctionariosController'
  });

  $routeProvider.otherwise({
    redirectTo: '/'
  });
});
