//My module
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

// My routes
weatherApp.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'pages/home.htm',
		controller:'homeController'
	})
	.when('#/forecast',{
		templateUrl:'pages/forecast.htm',
		controller:'forecastController'
	})
	
});

// My services

weatherApp.service('cityService', function(){
	this.city = "New York, NY";
});

// My controllers
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService){
	$scope.city = cityService.city;
	
	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});
	
}]);
weatherApp.controller('forecastController', ['$scope', 'cityService', function($scope, cityService){
	$scope.city = cityService.city;
}]);

