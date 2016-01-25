var app = angular.module('myApp', []);



app.controller('MainCtrl',function($scope, $http) {
    $scope.user = {};
    $scope.createUser = function() {
        $http({
            method : 'POST',
            url : '/create',
            data : $scope.user
        })
    }
