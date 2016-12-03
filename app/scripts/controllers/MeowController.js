angular.module('MyApp.Controllers')
  .controller('MeowController', ['MeowService', '$scope', '$state', 
    function (MeowService, $scope, $state) {
    	var param = {
    		firstName: 'guau',
	        lastName: 'guau'
    	}
    	$scope.guau = MeowService.get( 0);

    	$scope.m=function(){
    		MeowService.add(param);
    		console.log('meow')
    	}
}]);
