angular.module('eventApp').factory('eventFactory', ['$http', function($http) {
    
    var eventFactory = {};
    var events = [];
    
    eventFactory.getAllEvents = function() {
      
      console.log('Start Get')
                      // moved 
      var events =  $http.get('events.json').then(function(response) {

      var data = response.data;
        
        console.log('Returning Fulfilled Promise')
        return data;
      
      })
        
        console.log('Returning Initial Promise')
        return events;
    }
    
 eventFactory.createEvent = function(event, eventList) {
        events.push(event);
        eventList = events;
        console.log(eventList);
        return eventList;
    }
    return eventFactory;
}])