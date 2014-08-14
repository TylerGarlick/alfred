'use strict';
(function (app) {

  app.config(['$routeProvider', '$locationProvider',
    function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {controller: 'dashboard', templateUrl: 'app/dashboard/dashboard.html'})
        .when('/outreach/trainings', { controller: 'trainings', templateUrl: 'app/outreach/trainings/trainings.html'})
        .when('/outreach/trainings/:id', { controller: 'editTraining', templateUrl: 'app/outreach/trainings/editTraining.html'})
        .when('/settings', {controller: 'settingsDashboard', templateUrl: 'app/settings/common/dashboard.html'})
        .when('/settings/training', { controller: 'settingsTraining', templateUrl: 'app/settings/training/training.html'})
        .when('/errors/404', {controller: 'errors', templateUrl: 'app/common/errors/404.html'})
        .otherwise({redirectTo: '/errors/404'});

      $locationProvider.hashPrefix("!");
    }]);

})(angular.module('app', ['ngRoute', 'mgcrea.ngStrap']));