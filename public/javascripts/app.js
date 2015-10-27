angular.module('eventApp', ['ngRoute','ngMessages'])
.filter ('customUpperCase', function () {

	return function (item) {

		return item.toUpperCase();
	}

})
	.config(['$routeProvider','$locationProvider',function($routeProvider, $locationProvider) {
    
	$routeProvider.when('/add-event', {
	   	templateUrl:'templates/add-event.html',
	   	controller: 'formCtrl',
	   	controllerAs:'eventCtl'

	   })
	.when('/event-list', {
	   	templateUrl:'templates/event-list.html',
	   	controller: 'eventManagerCtrl',
	   	controllerAs:'managerCtl',
	   	resolve: {
	   							initialData: function(eventFactory) {
	   								return eventFactory.getAllEvents();
	   							}
	   	}

	   })
	   .otherwise({redirectTo:'/'});
       
       $locationProvider.html5Mode(true);

}])
;