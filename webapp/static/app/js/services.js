'use strict';

/* Services */
var lobsterServices = angular.module('lobsterServices', ['ngResource']);

lobsterServices.factory('Lobster', ['$resource',
				     function($resource){
					 return $resource('create_lobster', 
							  null, {save:
							   {method: 'POST',  isArray:true}
							  });
				     }]);
