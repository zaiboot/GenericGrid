//app.js
 angular.module("GenericGrid", [ "GenericGrid.controller", "GenericGrid.directives" ]);
       
$(function() { 
	angular.bootstrap(document.getElementById('example'), ['GenericGrid']);    
});