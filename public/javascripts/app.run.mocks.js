angular.module('eventApp')
.run(function($httpBackend){

  //define routes
  $httpBackend.whenGET(/templates\/.*/).passThrough(); // route defined, regex
  $httpBackend.whenGET(/services\/.*/).passThrough();

  //simulate backend 
  var events = [];
  $httpBackend.whenGET('events').respond(events);
  
  $httpBackend.whenPOST('addevent').respond(function(method, url, data) {
    var evt = angular.fromJson(data);
    //add and ID
    evt.id = events.length + 1;
    // push into the events array
    events.push(evt);
    //200 is http status
    return [200, { 'addEventResult' : true}, {}];
  
  });

})