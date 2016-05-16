'use strict';

angular.module('ModuleAB.oas', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/oas', {
    templateUrl: 'oas/oas.html',
    controller: 'oas'
  });
}])

.controller('oas', [function() {

}]);
