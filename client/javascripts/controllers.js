'use strict';

angular.module('app.controllers', ['ngCookies','ngRoute','app.factory', 'app.directive', 'ngUpload'])
.controller('HomeCtrl', function($scope, $http, $modal) {    
    $scope.dropdown = false;
})
.controller('SignupCtrl', function($scope){
    $scope.dropdown = false;
    $scope.misMatch = false;
    $scope.user = {};
    $scope.signup = function(isValid) {
        if (isValid){
            if ($scope.user.password.localeCompare($scope.user.confirmPassword) != 0){
                $scope.misMatch = true;
            } 
        }
            /*$http.post('/api/register', {
                firstName: $scope.user.firstName,
                lastName: $scope.user.lastName,
                email: $scope.user.email,
                password: $scope.user.password
            })
            .success(function(user) {
                $scope.alertMessage = 'We will inform you soon'
            })
            .error(function(err) {
               
            });*/
    };
});
