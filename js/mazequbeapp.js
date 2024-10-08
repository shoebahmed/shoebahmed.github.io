var module = angular.module("mazeqube", ['ngRoute','angular-loading-bar']);

    module.config(['$routeProvider',
        function($routeProvider) {
            $routeProvider.
                when('/', {
                    templateUrl: 'index-00.html'
                   // controller: 'RouteController'
                }).
                when('/about', {
                    templateUrl: 'index-1.html'
					//,controller: 'RouteController'
                }).
				when('/services', {
                    templateUrl: 'index-2.html'
					//,controller: 'RouteController'
                }).
				when('/projects', {
                    templateUrl: 'index-3.html'
					//,controller: 'RouteController'
                }).
				when('/contacts', {
                    templateUrl: 'index-4.html'
					//,controller: 'RouteController'
                }).
                when('/privacy', {
					templateUrl: 'index-5.html'
					//,controller: 'RouteController'
                }).
                otherwise({
                    redirectTo: '/'
                });
        }]);