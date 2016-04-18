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
  			title: 'Startup Week to Pair Students With Tech Entrepreneurs | Washington Square News - April 4, 2016',
  			url: 'http://www.nyunews.com/2016/04/04/startup-week-to-pair-students-with-tech-entrepreneurs/'
  		},
  	  	{
  			title: 'IPOed: Tech@NYU Offering the Public More | Huffington Post - Mar 31, 2016',
  			url: 'http://www.huffingtonpost.com/sanjna-verma/ipoed-technyu-offering-th_b_9577970.html'
  		},
  		{
  			title: 'Tech@NYU’s Lady Leadership Is Breaking Industry Barriers | NYU Local - September 10, 2015',
  			url: 'http://nyulocal.com/on-campus/2015/09/10/technyus-lady-leadership-is-breaking-industry-barriers/'
  		},
  		{
	  	 	title: 'Local Went There: Tech@NYU Startup Week | NYU Local - November 10, 2014',
	  	 	url: 'http://nyulocal.com/on-campus/2014/11/10/local-went-technyu-startup-week/'
	  	},
  		{
  			title: 'Local Went There: Leslie eLab Grand Opening | NYU Local - September 17, 2014',
  			url: 'http://nyulocal.com/on-campus/2014/09/17/local-went-there-leslie-elab-grand-opening/'
  		},
  		{
  			title: 'Praise Beysus: NYU Students Create Website That Explains Stocks With Beyoncé GIFs | NYU Local - March 6, 2014',
  			url: 'http://nyulocal.com/on-campus/2014/03/06/praise-beysus-nyu-students-create-website-that-explains-stocks-with-beyonce-gifs/'
  		},
  		{
  			title: 'Bey Trader: New Site Displays Stock Value As Beyonce GIFs | Observer - March 6, 2014',
  			url: 'http://observer.com/2014/03/number-one-new-site-displays-stock-value-as-beyonce-gifs/'
  		},
  		{
  			title: 'Beyonce And Jellyfishing At Tech@NYU’s Latest DemoDays | NYU Local February 24, 2014',
  			url: 'http://nyulocal.com/national/2014/02/24/beyonce-and-jellyfishing-at-technyus-latest-demodays/'
  		},
  		{
  			title: 'Hackathon Sets Out Create A Better NYU Through Code | NYU Local - December 6, 2013',
  			url: 'http://nyulocal.com/national/2013/12/06/hackathon-sets-out-create-a-better-nyu-through-code/'
  		},
  		{
  			title: 'Local Went There: November DemoDays at Spotify HQ | NYU Local - November 25, 2013',
  			url: 'http://nyulocal.com/national/2013/11/25/local-went-there-november-demodays-at-spotify-hq/'
  		},
  		{
  			title: 'Tech@NYU Builds Visionary Hackers | NYU Local - October 18, 2013',
  			url: 'http://nyulocal.com/on-campus/2013/10/18/video-technyu-builds-visionary-hackers/'
  		},
  		{
  			title: 'Apps You Probably Need To Survive School In The City | NYU Local - September 18, 2013',
  			url: 'http://nyulocal.com/national/2013/09/18/apps-you-probably-need-to-survive-school-in-the-city/'
  		},
  		{
  			title: 'At tech@NYU’s DemoDays, Innovation Shines, Confuses J. Sex | NYU Local - April 11, 2013',
  			url: 'http://nyulocal.com/on-campus/2013/04/11/at-technyus-demodays-innovation-shines-confuses-j-sex/'
  		}
  		{
  			title: 'Entrepreneurs Should Stay in School | PandoDaily - October 4, 2012',
  			url: 'https://pando.com/2012/10/04/entrepreneurs-should-stay-in-school/'
  		},
  		{
  			title: 'Charlie O\'Donnell and David Tisch Really Don\'t See the Point of Pivoting | Betabeat - October 4, 2012',
  			url: 'http://observer.com/2012/10/charlie-odonnell-and-david-tisch-hate-on-pivoting-at-nyu/'
  		},
  		{
  			title: 'Will You Create the Next Facebook at Startup Week? | NYU Local - October 1, 2012',
  			url: 'http://nyulocal.com/city/2012/10/01/will-you-found-the-next-facebook-at-startup-week/'
  		},
  		{
  			title: 'NYU and Codecademy Partner to Teach Coding to Undergrads | Observer - September 24, 2012',
  			url: 'http://observer.com/2012/09/nyu-and-codecademy-partner-to-teach-coding-to-undergrads/'
  		},
  		{
  			title: 'Students Push for Tech Entrepreneur Lab at NYU | Observer - April 27, 2012',
  			url: 'http://observer.com/2012/04/students-push-for-dedicated-tech-space-at-nyu/'
  		},
  		{
  			title: 'Tech@NYU\'s First Ever DemoDays is Happening This Saturday | NYU Local - November 17, 2011',
  			url: 'http://nyulocal.com/on-campus/2011/11/17/technyus-first-ever-demodays-is-this-saturday/'
  		},
  		{
  			title: 'Tech@NYU’s Fifth Startup Week Begins | NYU Local - October 3, 2011',
  			url: 'http://nyulocal.com/on-campus/2011/10/03/technyus-fifth-startup-week-begins/'
  		},
  		{
  			title: '"NYU Startup Week," featuring Entrepreneurship and Innovation | NYU - April 5, 2011',
  			url: 'https://www.nyu.edu/about/news-publications/news/2011/04/05/nyu-startup-week-featuring-entrepreneurship-and-innovation-in-nycs-tech-community-april-7-15.html'
  		},
  		{
  			title: 'Hone Your Tech Entrepreneurial Skills at NYU Startup Week Events | NYU Local - October 4, 2010',
  			url: 'http://nyulocal.com/national/2010/10/04/33889/'
  		},
  		{
			title: 'NYU Tech Geeks to Have Best Week Ever | NYU Local - March 31, 2010',
  			url: 'http://nyulocal.com/on-campus/2010/03/31/nyu-tech-geeks-to-have-best-week-ever/'
  		}
  	];
  	 Restangular.one('memberships?include=member,position')
    .get()
        .then(function(data) {
        	console.log(data.included);
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
