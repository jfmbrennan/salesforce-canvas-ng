'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('home.controllers.HomeCtrl'));

  var HomeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope: scope
    });
  }));

  it('should expect scope to be defined', function () {
    expect(scope).toBeDefined();
  });
});
