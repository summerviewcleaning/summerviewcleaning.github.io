$(document).ready(function () {
	
//	Copyright (C) Summer View 2016

});

var app = angular.module('app', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'views/home.html',
		controller: 'homeCtrl'
	}).
	when('/about', {
		templateUrl: 'views/about.html',
		controller: 'aboutCtrl'
	}).
	when('/contact', {
		templateUrl: 'views/contact.html',
		controller: 'contactCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});
});

//http://stackoverflow.com/questions/12008908/angularjs-how-can-i-pass-variables-between-controllers
app.service('sharedProperties', function () {
	var allPiecesProperty = false;
	var bases = undefined;

	return {
		getAllPiecesProperty: function () {
			return allPiecesProperty;
		},
		setAllPiecesProperty: function (value) {
			allPiecesProperty = value;
		},
		getBases: function () {
			return bases;
		},
		setBases: function (value) {
			bases = value;
		}
	};
});
