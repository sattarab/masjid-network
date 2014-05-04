'use strict';

angular.module('app.controllers', ['ngCookies','ngRoute','app.factory', 'app.directive', 'ngUpload'])
.controller('HomeCtrl', function($scope, $http, $modal) {    
    $scope.dropdown = false;
})
.controller('SignupCtrl', function($scope){
    $scope.dropdown = false;
    $scope.misMatch = false;
    $scope.firstNameRequired = false;
    $scope.emailRequired = false;
    $scope.passwordRequired = false;
    $scope.minLength = false;
    $scope.user = {};
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $scope.signup = function() {
        /* re-initalize */
        $scope.misMatch = false;
        $scope.firstNameRequired = false;
        $scope.emailRequired = false;
        $scope.passwordRequired = false;
        $scope.minLength = false;
        $scope.invalidEmail = false;
        
        if ($scope.user.firstName == null || $scope.user.firstName == undefined  || $scope.user.firstName == ""){
            $scope.firstNameRequired = true;
        }
        
        if ($scope.user.email == null || $scope.user.email == undefined || $scope.user.email == ""){
            $scope.emailRequired = true;
        }
        else if (!regex.test($scope.user.email)){
            $scope.invalidEmail = true;
        }
        
        if ($scope.user.password == null || $scope.user.password == undefined || $scope.user.password == ""){
            $scope.passwordRequired = true;
        }
        else if ($scope.user.password.length < 6){
            $scope.minLength = true;
        }
        
        if ($scope.misMatch || $scope.firstNameRequired || $scope.emailRequired || $scope.passwordRequired || $scope.minLength || $scope.invalidEmail){
            return;
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
