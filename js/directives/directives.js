//directives.js
 angular.module("GenericGrid.directives", [])
	.directive("demoGrid", function() {
		return {	
			controller: 'demoGrid',
			templateUrl: 'js/views/genericGrid.html',
			scope: {}
		};		
	})
	.directive("financialPeriodGrid", function() {
	
	return {	
			controller: 'financialPeriodController',
			templateUrl: 'js/views/genericGrid.html',
			scope: {}
		};
	})
	;	