(function(){
	var app = angular.module('book');
	app.controller('ShowController',function($scope,$rootScope,ShowService,$state){
		$scope.shows = ShowService.show_list();
		$scope.seats = ShowService.seat_list();
		// console.log($rootScope.user_booking_detail);
		$scope.movie = $rootScope.user_booking_detail[0]['my_movie']['name'];
		$scope.date = $rootScope.user_booking_detail[0]['movie_date']['date'];
		
		$scope.select_show_seat = function(){
			if($scope.show === undefined){
				$scope.error = "Sorry! Select show and seat";
			}	
			else{
				$rootScope.user_booking_detail.push($scope.show);
				console.log($rootScope.user_booking_detail);
				$state.go('confirm');
			}
			console.log($scope.movie);
		};
	});
})();