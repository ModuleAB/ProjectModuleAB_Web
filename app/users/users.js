'use strict';

angular.module('ModuleAB.users', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'users'
  });
}])

.controller('users', [function() {

}]);
