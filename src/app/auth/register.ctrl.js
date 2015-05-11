(function(){
	var app = angular.module('auth');
	app.controller("RegisterController",function($scope,UsersService,$state){
		$scope.register = function(){
			var is_register  = UsersService.register($scope.User);
			console.log(is_register);
			$state.go('auth.login');
		};
	});
})();