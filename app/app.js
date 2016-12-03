var config = {
    apiKey: '<your-api-key>',
    authDomain: '<your-auth-domain>',
    databaseURL: '<your-database-url>',
    storageBucket: '<your-storage-bucket>'
};
firebase.initializeApp(config);

var app = angular.module('MyApp', ['firebase','ui.router','ngStorage','MyApp.Services', 'MyApp.Controllers']);
  
angular.module('MyApp.Controllers', []);
angular.module('MyApp.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('view1');
	$stateProvider
        .state('view1', {
            url: '/view1',
            templateUrl: '/views/view1.html'
        })
        .state('view2', {
            url: '/view2',
            templateUrl: '/views/view2.html'
        })
}])