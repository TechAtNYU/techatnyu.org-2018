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
    $scope.links = {
        'careerFair': 'http://fair.nyusw.com/',
        'demodays': 'http://demodays.co/',
        'designdays': 'http://www.meetup.com/nydesigndays/',
        'gamedays': 'http://www.meetup.com/gamedays',
        'hackdays': 'http://www.meetup.com/nyhackdays/',
        'jobs': 'http://jobs.techatnyu.org/',
        'learn': 'http://learn.techatnyu.org',
        'resumeDrop': 'https://balloon.io/techatnyuresumedrop',
        'startupWeek': 'http://nyusw.com/',

        'ship': 'http://ship.techatnyu.org/',
        'applications': {
            'demodays': '',
            'freshmanCircuit': ''
        }
    };
    $scope.followTechInitiatives = [
        {
            name: 'Startup Week',
            description: 'A weeklong conference with technical, design, and entrepreneurship worskshops and talks. We bring in the best and brightest to share their skills and stories. Past speakers include Josh Kushner of Oscar, Dennis Crowley of Foursquare, David Karp of Tumblr, Scott Heiferman of Meetup, David Tisch of Box Group, and Chris Dixon of Andreessen Horowitz.',
            meetupUrl: $scope.links.startupWeek
        },
        {
            name: 'Demo Days',
            description: 'Students from all over NYC show off hacks or projects they’ve been working on. Demo your work, get inspired, or meet other students doing incredible things. We’ve hosted events at Tumblr, Microsoft, Stack Exchange, Spotify, and more.',
            meetupUrl: $scope.links.demodays
        }
    ];
    $scope.skillInitiatives = [
        {
            name: 'Hack Days',
            description: 'Lectures on web technologies, covering everything from Angular to Zepto.',
            url:  $scope.links.hackdays
        },
        {
            name: 'Design Days',
            description: 'Workshops on design thinking, user research, and advanced topics in digital product design (e.g. designing for mobile)',
            url:  $scope.links.designdays
        },
        {
            name: 'Game Days',
            description: 'Workshops on design thinking, user research, and advanced topics in digital product design (e.g. designing for mobile)',
            url:  $scope.links.gamedays
        }
    ];

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
            };
    })
    .catch(function(error){
        console.log(error);
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
