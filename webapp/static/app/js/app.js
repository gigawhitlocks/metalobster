'use strict';


// Declare app level module which depends on filters, and services
var Metalobster = angular.module('Metalobster', [
    'ngRoute',   
    'lobsterControllers',
    'lobsterServices'
]);

Metalobster.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/phone-list.html',
        controller: 'AddLobster'
      }).

      otherwise({
        redirectTo: '/'
      });
  }]);
