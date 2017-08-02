/**
 * 	@desc comments directive 
 * 	@example <comments-directive></comments-directive>
 */

(function() {
    'use strict';

    angular
        .module('app')
        .directive('commentsDirective', commentsDirective);

    function commentsDirective() {
        return {
		    restrict: 'EA',
		    templateUrl: 'app/templates/comments.html'
	    }
    }	
})();

