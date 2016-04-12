'use strict';

/**
 * @ngdoc overview
 * @name techatnyuorgApp
 * @description
 * # techatnyuorgApp
 *
 * Main module of the application.
 */
angular
  .module('techatnyuorgApp', [
    'ngAria',
    'ngRoute',
    'ngSanitize', 
    'tien.clndr', 
    'restangular'
  ])
  .config(function ($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
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
