'use strict';

angular.module('ModuleAB', [
  'ngRoute',
  'ui.bootstrap',
  '720kb.tooltips',
  'angular-loading-bar',
  'ngAnimate',
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
config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
  cfpLoadingBarProvider.includeSpinner = false;
}]).
controller("topNavBar", ['$scope', '$http', '$rootScope',
  function($scope, $http, $rootScope) {
    $rootScope.dismiss = function() {
      $rootScope.fadein = '';
    };
    $rootScope.dismiss();

    $http({
      method: "GET",
      url: "/api/v1/auth/check"
    }).then(function(response) {
      $scope.showName = response.data.show_name;
      $rootScope.loaded = true;
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
