'use strict';

angular.module('app.controllers', ['ngCookies','ngRoute','app.factory', 'app.directive', 'ngUpload'])
.controller('HomeCtrl', function($scope, $http) {    
    $scope.dropdown = false;
})
.controller('SignupCtrl', function($scope, $http){
    $scope.dropdown = false;
    $scope.misMatch = false;
    $scope.firstNameRequired = false;
    $scope.emailRequired = false;
    $scope.passwordRequired = false;
    $scope.minLength = false;
    $scope.user = {};
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    $scope.closeAlert = function(index) {
        $scope.alertMessage = null;
    };
    
    $scope.signup = function() {
        /* re-initalize */
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
        
        if ($scope.firstNameRequired || $scope.emailRequired || $scope.invalidEmail || $scope.passwordRequired || $scope.minLength){
            return;
        }
        else{
            $http.post('/api/register', {
                firstName: $scope.user.firstName,
                lastName: $scope.user.lastName,
                email: $scope.user.email,
                password: $scope.user.password
            })
            .success(function(user) {
                $scope.alertType = 'success'
                $scope.alertMessage = 'Thank you for signing up';
            })
            .error(function(err) {
                $scope.alertType = 'error'
                $scope.alertMessage = 'an error occured please try again';
            });
        } 
    };
});
