(function(){
	var app = angular.module('auth');
	app.factory('UsersService', function(){
		var _users = [
						{
							name: "Alpesh",
							username: "alpesh.nakrani@actonate.com",
							password: "111111"
						},
						{
							name: "Payal",
							username: "priyesha.rana@actonate.com",
							password: "111111"
						}
					];
		return {
			login: function(_user){
						for (var i = 0; i < _users.length; i++) {
							if(_users[i].username === _user.username && _users[i].password === _user.password){
								return _users[i].name;
							}
						}
						return false;
					},
			register: function(_user){
						if(_users.push(_user)){
							return true;
						}
						return false;
					},
			get_users: function(){
						console.log("get users");
						return _users;
					}
			};
	});
})();