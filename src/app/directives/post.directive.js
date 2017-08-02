/**
 * 	@desc post directive 
 * 	@example <post-directive></post-directive>
 */

(function() {
    'use strict';
    
    angular
        .module('app')
        .directive('postDirective', postDirective);
        
    function postDirective() {
        return {
            restrict: 'EA',
            scope: { 
                post: '=' 
            },
            controller: 'PostController',
            controllerAs: 'postCtrl',
            bindToController: true,
            templateUrl: 'app/templates/post.html',
            link: link       
        };

        function link(scope, element, attrs) {

        };
    };
})();