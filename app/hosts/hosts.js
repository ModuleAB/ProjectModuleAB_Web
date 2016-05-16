'use strict';

angular.module('ModuleAB.hosts', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/hosts', {
    templateUrl: 'hosts/hosts.html',
    controller: 'hosts'
  });
}])

.controller('hosts', [function() {

}]);
