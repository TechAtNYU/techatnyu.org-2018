'use strict';

/**
 * @ngdoc overview
 * @name techatnyuorgApp
 * @description
 * # techatnyuorgApp
 *
 * Main module of the application.
 */
angular.module('app.services', ['restangular']);
angular.module('app.controllers', ['app.services']);
angular
  .module('techatnyuorgApp', [
    'ngAria',
    'ngRoute',
    'ngSanitize', 
    'tien.clndr', 
    'restangular',
    'app.filters'
  ])
  .config(function ($routeProvider, $locationProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/events', {
        templateUrl: 'views/events.html',
        controller: 'EventsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
      $locationProvider.html5Mode(true);

      RestangularProvider.setBaseUrl('https://api.tnyu.org/v3');
      // Configuring Restangular to work with JSONAPI spec
      RestangularProvider.setDefaultHeaders({
      'Accept': 'application/vnd.api+json, application/*, */*',
      'Content-Type': 'application/vnd.api+json; ext=bulk'
      });
      RestangularProvider.addResponseInterceptor(function(data) {
        return data;
      });
  });
