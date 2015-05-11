(function(){
 	var app = angular.module('book',[ 'ui.router' ]);
 	app.config(function($stateProvider,$urlRouterProvider){
 		console.log("test 1111");
 		$urlRouterProvider.otherwise('/book/movie');

 		$stateProvider.
 			state('movie',{	
 				url: '/book/movie',
 				templateUrl: 'app/book/movie.tpl.html',
 				controller: 'MovieController'
 			}).
 			state('show',{
 				url: '/book/show',
 				templateUrl: 'app/book/show.tpl.html',
 				controller: 'ShowController'
 			}).
 			state('confirm',{
 				url: '/book/confirm',
 				templateUrl: 'app/book/confirm.tpl.html',
 				controller: 'ConfirmController'
 			})
 	});
})();