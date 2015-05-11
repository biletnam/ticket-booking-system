(function(){
	var app = angular.module('book');
	app.controller('MovieController',function($scope,$rootScope,MovieService,$state){
		$scope.movies = MovieService.movie_list();
		$scope.dates = MovieService.date_list();
		$rootScope.user_booking_detail = [];
		$scope.select_movie_date = function(){
			if($scope.movie === undefined){
				$scope.error = "Sorry! Select movie and date";
			}	
			else{
				$rootScope.user_booking_detail.push($scope.movie);
				console.log($rootScope.user_booking_detail);
				$state.go('show');
			}
			// console.log($scope.movie);
		};
	});
})();