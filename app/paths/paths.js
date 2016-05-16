'use strict';

angular.module('ModuleAB.paths', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/paths', {
    templateUrl: 'paths/paths.html',
    controller: 'paths'
  });
}])

.controller('paths', [function() {

}]);
