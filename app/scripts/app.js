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
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
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
  });
