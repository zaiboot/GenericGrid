//controllers.js
angular.module("GenericGrid.controller", ["kendo.directives", "defaults"])

.controller("financialPeriodController", function ($scope, gridDefaults, formatDefaults) {
	
	var customSettings = {
		dataSource : {
			transport : {
				read : {
					// the remote service url
					url : "/data/financialPeriod.json",

				}
			},
			// describe the result format
			"schema" : {
				"data" : "Data",
				"total" : "Total",
				"errors" : "Errors"
			}
		},
		//Translate this.
		columns : [
			{
				field: "Id",				
				template: '<a href="Edit/#: Id #">Edit</a>' ,
				title: " "
			},

			{
				field : "Year",
				title : "A&ntilde;o",
			},
			{
				field : "Period",
				title : "Per&iacute;odo",
			},
			{
				field : "DisplayName",
				title : "Display Name",
			},			
			{
				field : "StartTime",
				title : "Inicio",
				type: "date",
				format: formatDefaults.LongDateFormat
			}, {
				field : "EndTime",
				title : "Fin",
				type: "date",
				format: formatDefaults.LongDateFormat
			}, {
				field : "CertifyEffectiveDate",
				title : "Fecha Efectiva",
				type: "date",
				format: formatDefaults.ShortDateFormat
				
			}, {
				field : "Status",
				title : "Estado",
			},
			{
				field: "Id",				
				template: '<a href="Delete/#: Id #">Delete</a>' ,
				title: " "
			},
		]

	};
	$scope.mainGridOptions = angular.extend({}, gridDefaults, customSettings);
})
.controller("demoGrid", function ($scope, gridDefaults) {
	var customSettings = {
		dataBound : function () {
			this.expandRow(this.tbody.find("tr.k-master-row").first());
		},
		dataSource : {
			transport : {
				read : {
					// the remote service url
					url : "/data/demogrid.json",

				}
			}
			// describe the result format

		},
		//Translate this.
		columns : [{
				field : "FirstName",
				title : "Primer nombre",
				width : "120px"
			}, {
				field : "LastName",
				title : "Apellido",
				width : "120px"
			}, {
				field : "Country",
				Title : "Pais",
				width : "120px"
			}, {
				field : "City",
				width : "120px"
			}, {
				field : "Title"
			}
		]
	};

	$scope.mainGridOptions = angular.extend({}, gridDefaults, customSettings);
});
