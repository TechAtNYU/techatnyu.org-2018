'use strict';

/**
 * @ngdoc function
 * @name techatnyuorgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the techatnyuorgApp
 */
angular.module('techatnyuorgApp')
  .controller('MainCtrl', function ($scope, Restangular) {
	this.section = 1;
    this.setSection = function (dir) {
    	//0 is left arrow
    	// 1 is right arrow
    	if (dir === 0) {
    		if (this.section !== 1 ) {
    			this.section -= 1;
    		}
    	}
    	else {
    		if (this.section !== 6) {
    			this.section += 1;
    		}
    	} 
    };
    this.isSet = function (sectionNo) {
        return this.section === sectionNo;
    };
    /** next event **/
    Restangular.one('events/up-next-publicly')
    .get()
        .then(function(data) {
            console.log('next event:', data.data); 
            var nextEvent = data.data; 
              if (nextEvent) {
                nextEvent = nextEvent.attributes;
                $scope.nextEvent = {
                    title: nextEvent.shortTitle,
                    description: nextEvent.description,
                    rsvpUrl: nextEvent.rsvpUrl
                };
            }
         
    });
    /** job board **/
    /** any way to get just the latest? **/
    Restangular.one('jobs/?include=employer&sort=-created&filter[simple][isApproved]=true')
    .get()
        .then(function(data) {
            var job = data.data[0].attributes;
            $scope.latestJobPost = {
                position: job.positionTitle,
                description: job.description
            }
         
    });
    /** initiatives **/
    /*Restangular.one('teams/?filter[simple][hostsEvents]=true')
    .get()
        .then(function(data) {
            console.log(data.data);
         
    });*/
    // get the next event
    // get latest job board post
    // get data from all the initiatives (name, description, url)
    //if they are accepting applications
  });
