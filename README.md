# ngEventPlanner
Angular JS app with a mix of directives and services to dynamically store and set events

Check..


###updates from first Sprint 1 
####(before MAMP took a crap)

1. Form field validations (Red for required and Green for completed)
- this was done with boostrap 'has error' classes and `ng-message`

**add-event.html**

```
  <script type="text/ng-template" id="error-messages">
          <div ng-message='required'> This Field is required </div> 
          <div ng-message='minlength'> Too short </div> 
          <div ng-message='maxlength'> Too long </div> 
  </script>

```

2. added a new `.controller` `eventManagerCtrl` :
- 

3. added a new Manage Events route .. 

It has the table that binds events data and it's on controller woop!

```

.when('/event-list', {
      templateUrl:'templates/event-list.html',
      controller: 'eventManagerCtrl',
      controllerAs:'managerCtl'

     })

```

