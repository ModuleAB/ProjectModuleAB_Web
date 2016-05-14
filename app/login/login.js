'use strict';

var app = angular.module('ModuleAB-Login', []);

app.controller("Login", function($scope, $http){
    $scope.isLoginFailed = true;
    $scope.alertType = "alert-warning";
    $http({
        method: "GET",
        url: "/api/v1/auth/check"
    }).then(function isLogin(response){
        window.location.href = "/";
    }, function isNotLogin(response){
        //console.log(response);
    });
});


