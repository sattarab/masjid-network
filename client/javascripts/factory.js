'use strict';

angular.module('app.factory', ['ngCookies'])
.factory('UserFactory', function ($cookieStore) {
	var factory = {};

	factory.model = {
		isLogged: false,
		username: null,
		fullname: null,
		organization: null,
		rememberMe: false,
        reports: null
	},

	factory.setUser = function(user) {
		if (user != null) {
			factory.model.isLogged = true;
			factory.model.username = user.username;
			factory.model.fullname = user.fullname;
			factory.model.organization = user.organization;
			factory.model.rememberMe = user.rememberMe;
			$cookieStore.put('user', factory.model);
		}
		else {
			$cookieStore.remove('user');
		}
	}

	factory.getUser = function() {
		return $cookieStore.get('user');
	}
    
    factory.setUserReports = function(user, reports) {
		if (user != null) {
            $cookieStore.remove('user');
			factory.model.isLogged = true;
			factory.model.username = user.username;
			factory.model.fullname = user.fullname;
			factory.model.organization = user.organization;
			factory.model.rememberMe = user.rememberMe;
            factory.model.reports = reports;
			$cookieStore.put('user', factory.model);
		}
		else {
			$cookieStore.remove('user');
		}
    }

	return factory;
})