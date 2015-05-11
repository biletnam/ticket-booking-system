(function(){
	var app = angular.module('book');
	app.factory('MovieService', function(){
		var _movies = [
						{
							name: "Avengers (Gujarati)",
						},
						{
							name: "Be Yarr (English)",
						},
						{
							name: "2 States (Punjabi)",
						},
						{
							name: "3 Idiots (Chinese)",
						}
					];
		var _movies_dates = [
						{
							date: "09-05-2015",
						},
						{
							date: "10-05-2015",
						},
						{
							date: "11-05-2015",
						}
					];
		return {
			movie_list: function(){
						return _movies;
					},
			date_list: function(){
						return _movies_dates;
					}
			};
	});
})();