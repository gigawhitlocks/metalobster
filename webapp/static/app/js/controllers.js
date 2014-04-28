'use strict';

var lobsterControllers = angular.module('lobsterControllers', []);
/* Controllers */

lobsterControllers.controller('AddLobster', ['$scope', 'Lobster', '$http', function($scope, Lobster, $http ) {

    $scope.getoutput = function(lobster) { 
	var lobster = angular.copy(lobster);
	console.log(lobster.name);
	$http({url: '/create_lobster', 
	       data: {'name': lobster.name},
	       method: 'POST'}).success(function(data, status, headers, config) {
		   console.log(data);
		   $scope.lobster = data;
	       });
	
    }

}]);
