'use strict';

/**
 * @ngdoc function
 * @name techatnyuorgApp.controller:EventsCtrl
 * @description
 * # EventsCtrl
 * Controller of the techatnyuorgApp
 */
angular.module('techatnyuorgApp')
  .controller('EventsCtrl', function ($scope, Restangular) {
  	var events;
  	var now = moment();
  	$scope.currentMonth = now.get("month");
  	$scope.currentYear = now.get("year");

  	 $scope.options = {
  		clickEvents: {
  			click: function(target) {
		  	 	console.log(target);
		  	 },
  		 	onMonthChange: function (month) {
  		 		console.log('changed month');
  		 		$scope.currentMonth = month;
  		 	},
  		 	onYearChange: function (year) {
  		 		console.log('changed year');
  		 		$scope.currentYear = year;
  		 	}
  		 }
   	 };
   	 /*
  	function isInPast(eventDate) {
		if (eventDate.isAfter(now)) {
		    return false;
		}
		else {
			return true;
		}
	}
	function isInCurrentMonth(eventDate) {
	 	if (eventDate.get("month") === now.get("month") && eventDate.get("year") === now.get("year")) {
	 		return true;
	 	}
	 	else {
	 		return false;
	 	}
	 }*/
 	function urlify(text) {
	    var urlRegex = /(https?:\/\/[^\s]+)/g;
	    return text.replace(urlRegex, function(url) {
	        return url.link(url);
	    });
	}

	function SimpleEvent(start, end, title, description, rsvpUrl) {
	 	var timeDetails = moment(start);
	  	this.date = timeDetails.format("YYYY-MM-DD");
	  	this.month = timeDetails.get("month");
	  	this.year = timeDetails.get("year");
	  	//this.isPast = isInPast(timeDetails);
	  	//this.isInCurrentMonth = isInCurrentMonth(timeDetails );
	  	this.description = description;
	  	this.title = title;
	  	rsvpUrl ? this.rsvpUrl = rsvpUrl : this.rsvpUrl = "http://rsvp.techatnyu.org/";
	}
  	function populateCalendar() {
	 	var nutso = events;
	 	$scope.events = [];
	 	for (var i = 0; i < nutso.length; i++) {
	  		var currentAttr = nutso[i].attributes;
	  		var description = currentAttr.description;
	  		if (description) {
	  			description = urlify(currentAttr.description);
	  		}	
	  		$scope.events.push(new SimpleEvent(currentAttr.startDateTime, currentAttr.endDateTime, currentAttr.title, description, currentAttr.rsvpUrl));
		}
	}
  	Restangular.one('events/?page%5Blimit%5D=10&sort=%2bstartDateTime')
 	.get()
		.then(function(data) {
			events = data.data.filter(function(event) {
			var details = event.attributes;
			var status = details.status;
			var isInternal = details.isInternal;
			return ((!isInternal) && status !== "draft");
		 });
		populateCalendar();
		//setValues();
	});
	/* $scope.showEvents = function(events) {
        //alert(events.map(function(e) { return e.title }).join("\n"));
        console.log(events);
    };*/
    $scope.isInCurrentMonth = function(event) {
    	if (event.month === $scope.currentMonth && event.year === $scope.currentYear) {
    		return true;
    	}
    	else {
    		return false;
    	}
    
    };
});
