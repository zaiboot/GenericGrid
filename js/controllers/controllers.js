//controllers.js
 angular.module("GenericGrid.controller", ["kendo.directives"])
        .controller("demoGrid", function($scope){
            $scope.mainGridOptions = {
                dataSource: {
                    type: "odata",
                    transport: {
                        read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
                    },
                    pageSize: 5,
                    serverPaging: true,
                    serverSorting: true
                },
                sortable: true,
                pageable: true,
                dataBound: function() {
                    this.expandRow(this.tbody.find("tr.k-master-row").first());
                },
				//Translate this.
                columns: [{
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

          
        });