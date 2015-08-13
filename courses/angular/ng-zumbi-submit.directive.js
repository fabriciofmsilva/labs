angular.module('app').directive('ngZumbiSubmit', function() {
  return {
    restrict: 'E',
    require: '^form',
    scope: {
      submit: '&'
    },
    template: '<button class="btn btn-primary" type="submit">Salvar</button>',
    link: function($scope, $element, $attrs, formCtrl) {
      $element.on('click', function() {
        if(formCtrl.$valid) {
          $scope.submit();
        } else {
          alert('Formulário está inválido');
        }
      });
    }
  }
});
