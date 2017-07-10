/**
 * 	@desc post directive 
 * 	@example <post-directive></post-directive>
 */

app.directive('postDirective', postDirective);

function postDirective() {
	function link(scope, element, attrs) {

	}
	
	return {
		link: link,
		restrict: 'EA',
		templateUrl: 'src/templates/post.html'
	}
}