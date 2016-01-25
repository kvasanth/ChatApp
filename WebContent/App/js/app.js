/*var myApp = angular.module('myapp',[]);


myApp.controller('myctrl', function($scope){

	$scope.loginuser = function()
	{
	console.log("Entered app");
	}
}
);
//app.js

//var PMApp = {};

var App = angular.module('myapp', []);

// Declare app level module which depends on filters, and services
App.config(['$routeProvider', '$locationProvider', function($routeProvider) {
        $routeProvider.when('/login', {
            templateUrl: 'login/layout',
            controller: LoginController
        });

        $routeProvider.when('/main', {
            templateUrl: 'main/layout',
            controller: MainController
        });

        $routeProvider.otherwise({redirectTo: '/login'});

    }]);

//Login validation. 
//!!!!!! ATTENTION !!!!!!!
//If session id is expired, $rootScope.SessionID should be set to null or empty string!!!
App.run(function($rootScope, $location) {

    // register listener to watch route changes
    $rootScope.$on("$routeChangeStart", function(event, next, current) {

        console.log("Routechanged sessionId="+$rootScope.SessionId);

        if ($rootScope.SessionId == '' || $rootScope.SessionId == null) {

            // no logged user, we should be going to #login
            if (next.templateUrl == "login/Login.html") {
                // already going to #login, no redirect needed
            } else {
                // not going to #login, we should redirect now
                $location.path("/login");
            }
        }
    });
});

/*
//LoginController.js
function LoginController($scope, $http, $location, $rootScope) {
    $scope.user = {};
    $scope.user.email = '';
    $scope.user.password = '';

    $scope.loginUser = function(user) {
        $scope.resetError();

        $http.post('login/authenticate', user).success(function(login) {                       
            if(login.sessionId===null) {
                $scope.setError(login.status);

                return;
            }
            $scope.user.email = '';
            $scope.user.password = '';  

            $rootScope.SessionId=login.sessionId;

            $location.path("main");

        }).error(function() {
            $scope.setError('Invalid user/password combination');
        });
        
        
        
*/





var myApp = angular.module('myapp', []);

//
//myapp.factory('myctrl', ['$resource', 'Data', function ($resource, Data) {
//  return $resource( 
//    {
//      query: {
//        isArray: true,
//        method: 'POST'
//      }
//    }
//  );
//}]);

myApp.controller('myctrl', function ($scope,$http) {
	$scope.loginuser = function()
	{
		console.log($scope.user);
		$http({
			method: 'POST',
			url	  :	'',
			data  : JSON.stringify($scope.user),
			headers : { 'Content-Type': 'application/json'
			}				
		})
		/*$http({ method: 'GET',
				url: ' ',
				data: ' ',
				headers: { 'Content-Type': 'application/json'}
		})*/.
		success( function($routeProvider, $locationProvider)
				{
			$routeProvider.when('', { templateUrl: 'design.html',
											controller: 'myctrl'});
			/*console.log("Sucess");
	              console.log("status - " + status);
	              console.log("data - " + data);
	                console.log("header - " + header);
	                console.log("config - " + config);
	                */
				}).error(function(data)
						{console.log("Error")
					});
	};
});


