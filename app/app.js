var config = {
    apiKey: "AIzaSyACeyiZGokIXDhh5ilDQMBK8mG53EjyFxs",
    authDomain: "huaweifleetmanager.firebaseapp.com",
    databaseURL: "https://huaweifleetmanager.firebaseio.com",
    storageBucket: "huaweifleetmanager.appspot.com",
    messagingSenderId: "997504850718"
};
firebase.initializeApp(config);

var app = angular.module('MyApp', ['firebase','ui.router','ngStorage','MyApp.Services', 'MyApp.Controllers']);
  
angular.module('MyApp.Controllers', []);
angular.module('MyApp.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('login');
	$stateProvider
        .state('login', {
            url: '/login',
            params: {content:undefined},
            templateUrl: '/views/login.html'
        })
        .state('view2', {
            url: '/view2',
            params: {content:undefined},
            templateUrl: '/views/view2.html'
        })
}])