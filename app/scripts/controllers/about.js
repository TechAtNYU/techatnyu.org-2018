'use strict';

/**
 * @ngdoc function
 * @name techatnyuorgApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the techatnyuorgApp
 */
angular.module('techatnyuorgApp')
  .controller('AboutCtrl', function ($scope, Restangular) {
  	$scope.team = [];
  	$scope.supporters = [
	  {
	    name: 'Dev Bootcamp',
	    img: 'devbootcamp.png',
	    url: ''
	  },{
	    name: 'Meetup',
	    img: 'meetup.png',
	    url: ''
	  }, {
	    name: 'Rackspace',
	    img: 'rackspace.jpg',
	    url: ''
	  }, {
	    name: 'Quirky',
	    img: 'quirky.gif',
	    url: ''
	  }, {
	    name: 'Pearson',
	    img: 'pearson.png',
	    url: ''
	  }, {
	    name: 'artsicle',
	    img: 'artsicle.png',
	    url: ''
	  }, {
	    name: 'Bitly',
	    img: 'bitly.png',
	    url: ''
	  }, {
	    name: 'Branch',
	    img: 'branch.png',
	    url: ''
	  }, {
	    name: 'chatID',
	    img: 'chatid.png',
	    url: ''
	  }, {
	    name: 'Codecademy',
	    img: 'codecademy.png',
	    url: ''
	  }, {
	    name: 'Craft Coffee',
	    img: 'craftcoffee.jpg',
	    url: ''
	  }, {
	    name: 'Github',
	    img: 'github.png',
	    url: ''
	  }, {
	    name: 'hackNY',
	    img: 'hackny.png',
	    url: ''
	  }, {
	    name: 'Knewton',
	    img: 'knewton.jpg',
	    url: ''
	  }, {
	    name: 'Lean Startup Machine',
	    img: 'leanstartupmachine.png',
	    url: ''
	  }, {
	    name: 'MailChimp',
	    img: 'mailchimp.jpeg',
	    url: ''
	  }, {
	    name: 'Onswipe',
	    img: 'onwsipe.png',
	    url: ''
	  }, {
	    name: 'Pivotal Labs',
	    img: 'pivotal.png',
	    url: ''
	  }, {
	    name: 'PopTip',
	    img: 'poptip.jpg',
	    url: ''
	  }, {
	    name: 'RebelMouse',
	    img: 'rebelmouse.png',
	    url: ''
	  }, {
	    name: 'SeatGeek',
	    img: 'seatgeek.jpg',
	    url: ''
	  }, {
	    name: 'Squarespace',
	    img: 'squarespace.jpg',
	    url: ''
	  }, {
	    name: 'Techstars',
	    img: 'techstars.jpg',
	    url: ''
	  }, {
	    name: 'I Heart NY Tech Week 2013',
	    img: 'tw_nyc.png',
	    url: ''
	  }, {
	    name: 'NYU',
	    img: 'nyu_stacked_color.jpg',
	    url: ''
	  }, {
	    name: 'CaterCow',
	    img: 'catercow.jpg',
	    url: ''
	  }
  	];
  	$scope.press = [
  		{
  			title: 'Entrepreneurs Should Stay in School | PandoDaily - October 4, 2012',
  			url: ''
  		},
  		{
  			title: 'Charlie O\'Donnell and David Tisch Really Don\'t See the Point of Pivoting | Betabeat - October 4, 2012',
  			url: ''
  		},
  		{
  			title: 'Tech@NYU Hosts "Hacking as a Mentality" | NYU Arthur L. Carter Journalism Institute - October 3, 2012',
  			url: ''
  		},
  		{
  			title: 'Will You Create the Next Facebook at Startup Week? | NYU Local - October 1, 2012',
  			url: ''
  		},
  		{
  			title: 'NYU and Codecademy Partner to Teach Coding to Undergrads | Betabeat - September 24, 2012',
  			url: ''
  		},
  		{
  			title: 'Students Push for Tech Entrepreneur Lab at NYU | Betabeat - April 27, 2012',
  			url: ''
  		},
  		{
  			title: 'Tech@NYU DemoDays: Fostering Culture | NYU Entrepreneurs Network - December 3, 2011',
  			url: ''
  		},
  		{
  			title: 'Tech@NYU\'s First Ever DemoDays is Happening This Saturday | NYU Local - November 17, 2011',
  			url: ''
  		},
  		{
  			title: 'NYU Startup Week: Bigger, Faster, Awesomer | NYU Entrepreneurs Network - September 28, 2011',
  			url: ''
  		},
  		{
  			title: '"NYU Startup Week," featuring Entrepreneurship and Innovation | NYU - April 5, 2011',
  			url: ''
  		},
  		{
  			title: 'Hone Your Tech Entrepreneurial Skills at NYU Startup Week Events | NYU Local - October 4, 2010',
  			url: ''
  		},
  		{
			title: 'NYU Tech Geeks to Have Best Week Ever | NYU Local - March 31, 2010',
  			url: ''
  		}
  	];
  	 Restangular.one('memberships?include=member')
    .get()
        .then(function(data) {
        	console.log(data.data);
          /* for (var i=0; i < data.included.length; i++) {
           		console.log(data.included[i].attributes);
           		/*var teamMember = data.included[i].attributes;
           		console.log(teamMember);
           		/*var contact;
           		if (teamMember.contact) {
           			contact = teamMember.contact.twitter ? 'https://www.twitter.com/' + teamMember.contact.twitter: 'https://www.linkedin.com' + teamMember.contact.linkedin;
           		}	
           		$scope.team.push({
           			name: teamMember.name,
           			img: teamMember.imgUrl,
           			title: teamMember.title,
           			contact: contact ? contact : ''
           		})
           };*/
    	})
	    .catch(function(error){
	        //console.log(error);
    });
  	
  });
