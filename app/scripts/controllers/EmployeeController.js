angular.module('MyApp.Controllers')
  .controller('EmployeeController', ['EmployeeService', '$scope', '$state', 
    function (EmployeeService, $scope, $state) {
		$scope.employee = {};
		$scope.employees = [];

		$scope.all = function(){
    		$scope.employees = EmployeeService.All();
    	}

    	$scope.get = function(data){
    		$scope.employee = EmployeeService.Get(data);
    	}

    	$scope.add = function(data){
    		var param = {
	    		firstName: data.firstName,
		        lastName: data.lastName
	    	};
    		EmployeeService.Add(param);
            $scope.employee = {};
    	}

    	$scope.delete = function(id){
    		EmployeeService.Delete(id);
    	}

    	$scope.update = function(data){
    		EmployeeService.Update(data);
            $scope.employee = {};
    	}

}]);
