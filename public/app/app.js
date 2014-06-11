'use strict';
(function (app) {

  app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {controller: 'dashboard', templateUrl: 'app/dashboard/dashboard.html'})
      .when('/errors/404', {controller: 'errors', templateUrl: 'app/common/errors/404.html'})
      .otherwise({redirectTo: '/errors/404'});

    $locationProvider.hashPrefix("!");
  }]);

})(angular.module('app', ['ngRoute']));
