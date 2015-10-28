angular.module('eventApp').run(function($httpBackend) {
    $httpBackend.whenGET(/templates\/.*/).passThrough();
    $httpBackend.whenGET(/services\/.*/).passThrough();
    $httpBackend.whenGET(/backend\/.*/).passThrough();
    var errorCounter = 0;
    var events = [{

        "id": "1",
        "name": "Confederations Cup",
        "location": "Russia",
        "description": "Football Tournament",
        "date": "2017-06-10",
        "category": {
            "id": "4",
            "name": "Sports"
        },
        "email": "'fifa@mail.com'"
    },
    {
        "id": "2",
        "name": "Kendrick Lamar",
        "location": "Paris",
        "description": "Music Concert",
        "date": "2015-12-31",
        "category": {
            "id": "1",
            "name": "Arts"
        },
        "email": "rap@mail.com"
    },
    {
        "id": "3",
        "name": "LA County Fair",
        "description": "Family Festival",
        "location": "San Bernadio",
        "date": "2016-02-11",
        "category": {
            "id": "3",
            "name": "Family"
        },
        "email": "la@mail.com"
    },
    {
        "id": "4",
        "name": "Civic LA Lab",
        "description": "Tech Hackathon",
        "location": "Los Angeles",
        "date": "2016-04-02",
        "category": {
            "id": "2",
            "name": "Tech"
        },
        "email": "tech@mail.com"
    },
    {
        "id": "5",
        "name": "Graffiti Fine Arts",
        "location": "Sao Paulo",
        "description": "Street Art Festival",
        "date": "2016-04-29",
        "category": {
            "id": "1",
            "name": "Arts"
        },
        "email": "'binho@mail.com'"
    },
    {
        "id": "6",
        "name": "Beach TechMeet",
        "location": "Venice",
        "description": "Tech Hackathon",
        "date": "2015-12-31",
        "category": {
            "id": "2",
            "name": "Tech"
        },
        "email": "meet@mail.com"
    },
    {
        "id": "7",
        "name": "Food Truck Fun",
        "description": "Food Festival",
        "location": "Seattle",
        "date": "2016-08-11",
        "category": {
            "id": "3",
            "name": "Family"
        },
        "email": "foods@mail.com"
    },
    {
        "id": "8",
        "name": "Ballers",
        "description": "Basketball Tournament",
        "location": "Madrid",
        "date": "2018-03-02",
        "category": {
            "id": "4",
            "name": "Sports"
        },
        "email": "balls@mail.com"
    },
    {
        "id": "9",
        "name": "World Cup",
        "location": "Russia",
        "description": "FIFA World Football Tournament",
        "date": "2018-06-10",
        "category": {
            "id": "4",
            "name": "Sports"
        },
        "email": "'fifa@mail.com'"
    },
    {
        "id": "10",
        "name": "Andrea Bocelli",
        "location": "Warsaw",
        "description": "Music Concert",
        "date": "2016-10-10",
        "category": {
            "id": "1",
            "name": "Arts"
        },
        "email": "andrea@mail.com"
    },
    {
        "id": "11",
        "name": "Reptile Expo",
        "description": "Family Festival",
        "location": "Anaheim",
        "date": "2016-06-30",
        "category": {
            "id": "3",
            "name": "Family"
        },
        "email": "reps@mail.com"
    },
    {
        "id": "12",
        "name": "ArcGIS Convention",
        "description": "Tech Expo",
        "location": "Palm Springs",
        "date": "2016-04-25",
        "category": {
            "id": "2",
            "name": "Tech"
        },
        "email": "esrii@mail.com"
    },
    {
        "id": "13",
        "name": "Polanco Graffestival",
        "location": "Valparaiso",
        "description": "Street Art Festival",
        "date": "2018-07-22",
        "category": {
            "id": "1",
            "name": "Arts"
        },
        "email": "valpo@mail.com"
    },
    {
        "id": "14",
        "name": "Bitcoin Fair",
        "location": "Berlin",
        "description": "Tech Expo",
        "date": "2016-05-29",
        "category": {
            "id": "2",
            "name": "Tech"
        },
        "email": "bitcoin@mail.com"
    },
    {
        "id": "15",
        "name": "Cirque de Solei",
        "description": "Performance Show",
        "location": "Dallas",
        "date": "2017-03-05",
        "category": {
            "id": "3",
            "name": "Family"
        },
        "email": "solei@mail.com"
    },
    {
        "id": "16",
        "name": "Rose Bowl",
        "description": "NCAA Football Final",
        "location": "Pasadena",
        "date": "2016-01-02",
        "category": {
            "id": "4",
            "name": "Sports"
        },
        "email": "ncaaf@mail.com"
    }
]

  //simulate backend 
  // var events = [];
  $httpBackend.whenGET('api/events').respond(events);
  
  $httpBackend.whenPOST('api/events/new').respond(function(method, url, data) {
    var evt = angular.fromJson(data);
    //add and ID
       errorCounter = errorCounter + 1;
        if (errorCounter % 3 == 0) {
            return [404, {}, {}, 'WOW ERROR' ];
        }
        // Generate an ID
        evt.id = events.length + 1;
        events.push(evt);
        return [200, {
            'addEventResult': true
        }, {}];
    });
    // removes the from the current list of events
    $httpBackend.whenPOST('api/events/delete').respond(function(method, url, data) {
        var eventToDelete = angular.fromJson(data);
        errorCounter = errorCounter + 1;
        if (errorCounter % 3 == 0) {
            return [404, {}, {}];
        }
        
        for (i = 0; i < events.length; i++) {
            if (events[i].name == eventToDelete.name) {
                events.splice(i, 1);
            }
        };
        
        return [200, {

            'deleteEventResult': true

        }, {}];
    
    });

});