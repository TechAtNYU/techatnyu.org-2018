'use strict';

/**
 * @ngdoc directive
 * @name techatnyuorgApp.directive:events
 * @description
 * # events
 */
angular.module('techatnyuorgApp')
  .directive('events', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the events directive');
      }
    };
  });
