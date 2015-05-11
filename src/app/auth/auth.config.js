(function(){
	var app = angular.module('auth',[ 'ui.router' ]);
	app.config(function($stateProvider, $urlRouterProvider){

		// $urlRouterProvider.otherwise("/auth/login");

		$stateProvider.
			// state('auth', {
			// 	abstract: true,
			// 	templateUrl: "app/auth/base.tpl.html",
			// 	controller: "AuthBaseController"
			// }).	
			state('login', {
				url: "/auth/login",
				templateUrl: "app/auth/login.tpl.html",
				controller: "LoginController"
			}).
			state('register', {
				url: "/auth/register",
				templateUrl: "app/auth/register.tpl.html",
				controller: "RegisterController"
			})

			console.log("book Routes Configured!");
	});
})();