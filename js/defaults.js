//defaults.js
angular.module('defaults', []).value('gridDefaults' , {                
                sortable: true,
                pageable: true,
				setDataSourceUrl: function(url) {
					this.dataSource.transport.read = url;				
				},
				dataSource: {
                    type: "odata",
                    transport: {
                        read: "http://demos.telerik.com/kendo-ui/service/Northwind.svc/Employees"
                    },
                    pageSize: 5,
                    serverPaging: true,
                    serverSorting: true
                }
            }
			);