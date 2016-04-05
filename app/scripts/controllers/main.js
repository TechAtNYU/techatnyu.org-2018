'use strict';

/**
 * @ngdoc function
 * @name techatnyuorgApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the techatnyuorgApp
 */
angular.module('techatnyuorgApp')
  .controller('MainCtrl', function () {
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
  });
