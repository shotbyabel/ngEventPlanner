angular.module('eventApp')
.factory('eventFactory', ['$http', '$q', function($http, $q) {
    
    var eventFactory = {};
    var events = [];
    
    eventFactory.getAllEvents = function() {
      
      // console.log('Start Get')

      return $http.get('api/events'); //caught by $httpBackEnd GET' events' array

    }

    eventFactory.createEvent = function(event, eventList) {
        // events.push(event);
        // eventList = events;
        // console.log(eventList);
        return $http.post('api/events/new',event); 
        // return eventList;
    }
    return eventFactory;
}])      


      // var deferred = $q.defer() //$q  - we are going to have a promise and defer response manullay.    
      // var event1 = $http.get('events.json') //moved it from .then(function(response)
      // var event2 = $http.get('events2.json')
//implementing $q
     //$q returns - last steps (concats [])

/////////////////////////////////////////////||
///////|||$q METHODS and FUNCTIONSREMOVED||||||
/////////////////////////////////////////////||
      // return $q.all([event1, event2]).then(function(result) {
      //   var tempEvents = [];
      // //loop through results!   
      //   angular.forEach(result, function(response) {
      //     //pushing data inside our response, from each of our $http calls. inside our events array
      //     tempEvents.push(response.data)

      //   });

      //   return tempEvents; 
      // //chaining promises .then ....
      // }).then(function(tempEvents){
      //   //matching data. defined a finalResults array. it will be the concatenation of 0,1 events
      //   // and return it - we need to defined what we are going to RETURN to the 'caller', the $q.all! 
      //   var finalResults = tempEvents[0].concat(tempEvents[1]);

      //   return finalResults;

      // })
/////////////////////////////////////////////||
///////|||$q METHODS and FUNCTIONSREMOVED||||||
/////////////////////////////////////////////||  


    ///////////////////////////////
    //|||REPLACED WITH above $q /\ ||    
    //**1st. first refactor    
    //**var events =(*deleted*)/**.then/brought it in from controller.js  
     // .then(function(response) {
  
     //  //**var data = response.data;**
     //  console.log('Returning Fulfilled Promise')
     //  deferred.resolve(response.data); //**from var data - refactor 
     //    //**return data**
     //  }, function(error) { 
     //    deferred.reject('Error! please refresh browser');
     //  })
     //    console.log('Returning Initial Promise')
     //    return deferred.promise;
     ///////////////////////////////
     //|||REPLACED||||||||||||||||| 

    
