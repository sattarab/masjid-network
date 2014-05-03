'use strict';

angular.module('app.controllers', ['ngCookies','ngRoute','app.factory', 'app.directive', 'ngUpload'])
.controller('HomeCtrl', function($scope, $http, $modal) {    
    $scope.user = {};
    $scope.dropdown = false;

    $scope.signup = function(isValid) {
        if (isValid) {
            $http.post('/api/register', {
                username: $scope.user.username,
            })
            .success(function(user) {
                $scope.alertMessage = 'We will inform you soon'
            })
            .error(function(err) {
               
            });
        }
    };
    
})
.controller('DropdownCtrl', function($scope, $http, $modalInstance){
    $scope.close = function(){
        $modalInstance.close();
    }
});
