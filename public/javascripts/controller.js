angular.module('eventApp').controller('formCtrl', ['eventFactory', function(eventFactory) {
     
	var self = this;
	this.eventForm = {};
	//this.eventForm.date = new Date(2016,0,1);
   
    this.categories = [{
        id: 1,
        name: 'Arts'
    }, {
        id: 2,
        name: 'Tech'
    }, {
        id: 3,
        name: 'Family'
    }, {
        id: 4,
        name: 'Sports'
    }];
    this.selectedOption = {
        id: 1,
        name: 'Arts'
    };

    
    this.specialEvent = 'false';
    this.specialValue = {
            id: 1,
            value: 'somethingSpecial'
        }
        //Initialize Special types checkboxes
    this.specialType = [{
        name: 'Age Restricted',
        checked: false
    }, {
        name: 'Luxury',
        checked: false
    }];
    this.selectAllTypes = function() {
        if (self.bothSelected) {
            self.bothSelected = true;
        } else {
            self.bothSelected = false;
        }

        angular.forEach(this.specialType, function(item) {

        	 item.checked = self.bothSelected;
        })
    }
    this.submitForm = function(form) {
    	
        form.category = this.selectedOption; //displays the name of the category. ID and the name

        eventFactory.createEvent(angular.copy(form), this.event);

        alert("Event Added Succesfully");
    }
}])                                               //injected from app.js resolve function      
.controller('eventManagerCtrl', ['eventFactory', 'initialData', function(eventFactory, initialData) { 
  // this.eventList = 
    var self = this;// so our data can be visible (dealing with scope)
    console.log('Start;')

    this.eventList = initialData;//new refactor from abb.js resolve function
    // eventFactory.getAllEvents().then(function(result) {        
    //     self.eventList = result;       
    //     console.log(this.eventList);
    // });

    console.log('End');
    console.log(self.eventList); 
     // this.eventList = eventFactory.getAllEvents();
     // this.eventList = $filter('orderBy')(this.eventList, 'category.name', true)
     // this.eventList = $filter('orderBy')(this.eventList, 'name')
        //specifc filters works on directives and services.. OLD filterFilter
     // this.eventList = filterFilter(this.eventList, {name: 'Graffiti Fine Art', category: {name: 'Arts' } } )
  
}])