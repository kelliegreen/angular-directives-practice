var app = angular.module('directivePractice', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

	
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/js/home/homeTmpl.html',
			controller: 'homeCtrl'
		});
	$urlRouterProvider.otherwise('/');
});
