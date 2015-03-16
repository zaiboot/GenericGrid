//controllers.js
 angular.module("GenericGrid.controller", ["kendo.directives", "defaults"])
        .controller("demoGrid", function($scope, gridDefaults){     
                var customSettings =  {
					dataBound : function() {
						this.expandRow(this.tbody.find("tr.k-master-row").first());
					},
				//Translate this.
					columns : [{
                    field: "FirstName",
                    title: "Primer nombre",
                    width: "120px"
                    },{
                    field: "LastName",
                    title: "Apellido",
                    width: "120px"
                    },{
                    field: "Country",
					Title: "Pais",
                    width: "120px"
                    },{
                    field: "City",
                    width: "120px"
                    },{
                    field: "Title"
                }]
				};
            
			$scope.mainGridOptions  = angular.extend({},gridDefaults, customSettings);
        });