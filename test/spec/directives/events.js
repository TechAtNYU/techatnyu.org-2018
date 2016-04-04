'use strict';

describe('Directive: events', function () {

  // load the directive's module
  beforeEach(module('techatnyuorgApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<events></events>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the events directive');
  }));
});
