angular.module('MyApp.Controllers')
  .controller('MeowController', ['MeowService' , '$scope', '$state', 
    function (MeowService, $scope, $state) {
    $scope.txt = 'meow'
}]);
