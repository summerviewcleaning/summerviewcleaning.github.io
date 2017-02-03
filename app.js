$(document).ready(function () {
	
//	Copyright (C) Summer View 2016
	$('.nav a').on('click', function(){
        	$('.btn-navbar').click(); //bootstrap 2.x
        	$('.navbar-toggle').click() //bootstrap 3.x by Richard
    	});

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
	when('/freequote', {
		templateUrl: 'views/freequote.html',
		controller: 'freequoteCtrl'
	}).
	otherwise({
		redirectTo: '/'
	});
});
