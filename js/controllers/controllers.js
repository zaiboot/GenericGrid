//controllers.js
 angular.module("GenericGrid.controller", ["kendo.directives", "defaults"])
 
		.controller("financialPeriodController" , function($scope, gridDefaults){
				var customSettings =  {	
						
				//Translate this.
					columns : [
					{						
						field: "Year",
						title: "A&ntilde;o",
					},
					{
						field: "Period",
						title: "Per&iacute;odo",
					},					
					{
						field: "Start",
						title: "Inicio",
					},					
					{
						field: "End",
						title: "Fin",
					},
					{
						field: "EffectiveDate",
						title: "Fecha Efectiva",
					},
					{
						field: "Status",
						title: "Estado",
					},					
					{
						field: "Year",
						title: "Año",
					},					
					]
					
				};			
			$scope.mainGridOptions  = angular.extend({},gridDefaults, customSettings);
		})		
        .controller("demoGrid", function($scope, gridDefaults){     
                var customSettings =  {
					dataBound : function() {
						this.expandRow(this.tbody.find("tr.k-master-row").first());
					},
					dataSource: new kendo.data.DataSource( {
						transport: {
							read: {
								// the remote service url
								url: "/data/demogrid.json",

								// the request type
								type: "get",

								// the data type of the returned result
								dataType: "json"

								// additional custom parameters sent to the remote service
								/*data: {
									lat: 42.42,
									lon: 23.20,
									cnt: 10
								}*/
							}
						},
						// describe the result format
						schema: {
							// the data, which the data source will be bound to is in the "list" field of the response
							data: "list"
						}
					}),
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