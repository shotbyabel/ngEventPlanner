angular.module('eventApp').controller('formCtrl', ['eventFactory', function(eventFactory) {
     
	var self = this;
	this.eventForm = {};
	//this.eventForm.date = new Date(2016,0,1);
   
    this.categories = [{
        id: 1,
        name: 'Music'
    }, {
        id: 2,
        name: 'Cinema'
    }, {
        id: 3,
        name: 'Games'
    }, {
        id: 4,
        name: 'Special Category'
    }];
    this.selectedOption = {
        id: 1,
        name: 'Music'
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
    	
        form.category = this.selectedOption;

        eventFactory.createEvent(angular.copy(form), this.event);

        alert("Event Added Succesfully");
    }
}])
.controller('eventManagerCtrl', ['eventFactory', function(eventFactory) { 
    
     this.eventList = eventFactory.getAllEvents();
  
}])