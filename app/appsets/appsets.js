'use strict';

angular.module('ModuleAB.appsets', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/appsets', {
    templateUrl: 'appsets/appsets.html',
    controller: 'appSets'
  });
}])

.controller('appSets', [function() {

}]);
