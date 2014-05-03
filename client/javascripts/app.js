'use strict';

var app = angular.module('app', ['app.controllers','ngRoute','ngResource', 'ui.bootstrap', 'ngCookies', 'ngAnimate'])
  .config(function($routeProvider, $locationProvider, $httpProvider) {

    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope) {
      var deferred = $q.defer();

      $http.get('/api/loggedin')
      .success(function(user) {
        if (user !== '0')
          $timeout(deferred.resolve, 0);
        else {
          $rootScope.message = 'You need to log in.';
          $timeout(function (){deferred.reject();}, 0);
          $location.url('/signin');
        }
      });

      return deferred.promise;
    };

    $httpProvider.responseInterceptors.push(function ($q, $location, $rootScope) {
      return function(promise) {
        return promise.then(
          function(response) {
            return response;
          }, 
          function(response) {
            if (response.status === 401 && $location.path() == "/home" ) {
                $location.url('/signin');
            }
            
            return $q.reject(response);
          }
        );
      }
    });

    $routeProvider
      .when('/', {
          templateUrl: '/views/partials/home.html',
          controller: 'HomeCtrl'
      })
      .when('/dropdown', {
          templateUrl: '/views/partials/dropdown.html',
          controller: 'DropdownCtrl'
      })
      .otherwise({
          redirectTo: '/'
      });

  })
  .run(function($rootScope, $http, $location, $anchorScroll, $modal) {
    $rootScope.message = '';

    $rootScope.isActive = function(viewLocation) { 
        return viewLocation === $location.path();
    };
    
    $rootScope.scrollTo = function(id) {
      var old = $location.hash();
      $location.hash(id);
      $anchorScroll();
      $location.hash(old);
    };
    
    $rootScope.open = function() {
        var modalInstance = $modal.open({
            templateUrl: '/views/partials/dropdown.html',
            controller: 'DropdownCtrl'
        });
    };
    
    $rootScope.logout = function() {
      $rootScope.message = 'Logged out.';
      $http.post('/api/logout')
      .error(function (err){
        console.log('error while logging out');
      })
      .success(function (){
        $location.url('/');
      })
    };    
  })