    /**
 * 	@desc app header directive 
 * 	@example <header-directive></header-directive>
 */

(function() {
    'use strict';

    angular
        .module('app')
        .directive('userDirective', userDirective);     

    function userDirective() {
        return {
		    restrict: 'E',
		    templateUrl: 'app/templates/user.html'
	    }
    };
})();