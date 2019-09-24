'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

    .controller('View1Ctrl', function ($scope, HttpService) {
      HttpService.getFacts()
          .then(function(response) {
            $scope.facts = response;
          });
    }).service('HttpService', function($http) {
  return {
    getFacts: function() {
      return $http.get('api/data.json')
          .then(function (response) {
            return response.data;
          });
    }
  };
});