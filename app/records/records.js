'use strict';

angular.module('ModuleAB.records', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/records', {
    templateUrl: 'records/records.html',
    controller: 'records'
  });
}])

.controller('records', [function() {

}]);
