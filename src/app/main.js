(function(){
	var app = angular.module('myApp',[ 'auth' , 'book' ]);

	app.constant('API_URL','http://localhost/polkadot/api');
	app.value('SeatLimit',5);
	
})();