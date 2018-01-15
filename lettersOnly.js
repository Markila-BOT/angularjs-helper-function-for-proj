var app = angular.module('myApp', []);

(function() {

  app.directive('onlyLettersInput', onlyLettersInput);

  function onlyLettersInput() {
      return {
        require: 'ngModel',
        link: function(scope, element, attr, ngModelCtrl) {
          function fromUser(text) {
            var transformedInput = text.replace(/[^a-zA-Z]/g, '');
            //console.log(transformedInput);
            if (transformedInput !== text) {
              ngModelCtrl.$setViewValue(transformedInput);
              ngModelCtrl.$render();
            }
            return transformedInput;
          }
          ngModelCtrl.$parsers.push(fromUser);
        }
      };
    };

})();
