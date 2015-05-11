(function(){
	var app = angular.module('auth');
	app.controller("LoginController",function($scope,UsersService){
			$scope.username = "";
			$scope.password = "";
			var users = UsersService.get_users();
			$scope.users = users;
			console.log($scope.users);
			// $state.go('book.city');
		$scope.login = function(){
			var is_login = UsersService.login($scope.User);
			console.log(is_login);
		};
	});
})();