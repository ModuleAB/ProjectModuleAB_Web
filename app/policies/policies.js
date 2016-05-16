'use strict';

angular.module('ModuleAB.policies', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/policies', {
    templateUrl: 'policies/policies.html',
    controller: 'policies'
  });
}])

.controller('policies', [function() {

}]);
