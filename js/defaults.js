//defaults.js
angular.module('defaults', []).value('gridDefaults' , {                
                sortable: true,
                pageable: true,
				dataSource: {
						transport: {
							pageSize: 5,
							serverPaging: true,
							serverSorting: true,
							read: {
								url: "",
								// the request type
								type: "post",
								// the data type of the returned result
								dataType: "json"
								
							}
						}

					},
				}
			);