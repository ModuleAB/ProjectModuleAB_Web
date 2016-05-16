'use strict';

angular.module('ModuleAB.backupsets', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/backupsets', {
    templateUrl: 'backupsets/backupsets.html',
    controller: 'backupSets'
  });
}])

.controller('backupSets', [function() {

}]);
