'use strict';

var app = angular.module('ModuleAB.users', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/users', {
    templateUrl: 'users/users.html',
    controller: 'users'
  });
}]);

app.controller('users', function($scope, $http, $uibModal) {
    $http({
        method: "GET",
        url: "/api/v1/users"
    }).then(function(response){
        $scope.users = response.data;
    }, function(response){
    });

    $scope.userEdit = function(type, user){
        var modal = $uibModal.open({
            templateUrl: 'userModal.html',
            controller: 'userModal',
            resolve: {
                type: function(){return type;},
                user: function(){return user;}
            }
        });
    };

});

app.controller('userModal', function($scope, $http, $uibModalInstance, type, user){
    switch(type){
    case 'new':
        $scope.type = "新增";
        $scope.jobType = "fa-plus";
        $scope.job = "新增"
        break;
    case 'modify':
        $scope.type = "修改";
        $scope.jobType = "fa-pencil";
        $scope.job = "修改";
        break;
    }
    if (user === undefined) {
        user = {
            loginname: "",
            password: "",
            name: "",
            Roles: []
        };
    }
    $scope.user = user
    $scope.cancel = function(){
        $uibModalInstance.dismiss('cancel');
    }
});
