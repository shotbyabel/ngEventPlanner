angular.module('eventApp', ['ngRoute','ngMessages'])
.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    
	$routeProvider.when('/add-event', {
	   	templateUrl:'templates/add-event.html',
	   	controller: 'formCtrl',
	   	controllerAs:'eventCtl'

	   })
	.when('/event-list', {
	   	templateUrl:'templates/event-list.html',
	   	controller: 'eventManagerCtrl',
	   	controllerAs:'managerCtl'

	   })
	   .otherwise({redirectTo:'/'});
       
       $locationProvider.html5Mode(true);

}])
;