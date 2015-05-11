(function(){
	var app = angular.module('book');
	app.factory('ShowService', function(){
		var _shows = [
						{
							time: "9 AM",
						},
						{
							time: "12 PM",
						},
						{
							time: "3 PM",
						},
						{
							time: "9 PM",
						}
					];
		var _seats = [
						{
							seat: "1",
						},
						{
							seat: "2",
						},
						{
							seat: "3",
						}
						,
						{
							seat: "4",
						}
						,
						{
							seat: "5",
						}
					];
		return {
			show_list: function(){
						return _shows;
					},
			seat_list: function(){
						return _seats;
					}
			};
	});
})();