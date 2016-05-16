'use strict';

angular.module('ModuleAB.oss', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/oss', {
    templateUrl: 'oss/oss.html',
    controller: 'oss'
  });
}])

.controller('oss', [function() {

}]);
