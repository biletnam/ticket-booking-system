(function(){
	var app = angular.module('book');
	app.controller('ConfirmController',function($scope,$rootScope,$state){
		
		$scope.movie = $rootScope.user_booking_detail[0]['my_movie']['name'];
		$scope.date = $rootScope.user_booking_detail[0]['movie_date']['date'];
		$scope.show = $rootScope.user_booking_detail[1]['my_show']['time'];
		$scope.seat = $rootScope.user_booking_detail[1]['total_seats']['seat'];
		console.log($rootScope.user_booking_detail);
		
	});
})();