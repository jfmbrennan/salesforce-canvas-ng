/**
 * Home Module
 */

angular.module('salesforce-canvas-ng.home', [
    'templates-app',
    'templates-common',
    'ui.router',
    'home.controllers',
    'home.directives',
    'home.filters',
    'home.services'
  ])
  .config(function config($stateProvider) {
    $stateProvider.state('home', {
      url: '/home',
      templateUrl: 'home/partials/home.tpl.html',
      data : { pageTitle: 'Home Page' }
    });
  });
