'use strict';

/**
 * 	@desc app header directive 
 * 	@example <header-directive></header-directive>
 */

app.directive('headerDirective', function headerDirective() {
	return {		
		restrict: 'E',
		templateUrl: 'src/templates/header.html'
	}
});


/**
 * 	@desc post directive 
 * 	@example <post-directive></post-directive>
 */
app.directive('postDirective', function postDirective() {	
	return {
		restrict: 'EA',
		scope: { post: '=' },
		controller: 'PostController',
		controllerAs: 'postCtrl',
		bindToController: true,
		templateUrl: 'src/templates/post.html',
		link: function(scope, element, attrs) {

		}
	}
});


/**
 * 	@desc comment directive 
 * 	@example <comment-directive></comment-directive>
 */

app.directive('commentDirective', function commentDirective() {
	return {
		restrict: 'EA',
		templateUrl: 'src/templates/comments.html'
	}
});