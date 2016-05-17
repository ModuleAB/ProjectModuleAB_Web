'use strict';

// Declare app level module which depends on views, and components
//var app = angular.module('ModuleAB', [
//'ngRoute',
//'myApp.view1',
//'myApp.view2',
//'myApp.version'
//]).
//config(['$routeProvider', function($routeProvider) {
//$routeProvider.otherwise({redirectTo: '/view1'});
//}]);

angular.module('ModuleAB', [
  'ngRoute',
  'ui.bootstrap',
  '720kb.tooltips',
  'ModuleAB.appsets',
  'ModuleAB.records',
  'ModuleAB.policies',
  'ModuleAB.hosts',
  'ModuleAB.paths',
  'ModuleAB.backupsets',
  'ModuleAB.oss',
  'ModuleAB.oas',
  'ModuleAB.users'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({
    redirectTo: '/records'
  });
}]).
controller("topNavBar", ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {
    $rootScope.dismiss = function() {
      $rootScope.fadein = 'fadein';
    };
    $rootScope.dismiss();
    $http({
      method: "GET",
      url: "/api/v1/auth/check"
    }).then(function(response) {
      $scope.showName = response.data.show_name;
    }, function(response) {
      window.location.href = "/login";
    });
    $scope.logout = function() {
      $http({
        method: "GET",
        url: "/api/v1/auth/logout"
      }).then(function(response) {
        window.location.href = "/login";
      }, function(response) {
        switch (response.status) {
          case 401:
            window.location.href = "/login";
            break
        }
      });
    };
  }
]);
