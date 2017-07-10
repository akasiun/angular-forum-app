/**
 * 	@desc comment directive 
 * 	@example <comment-directive></comment-directive>
 */

app.directive('commentDirective', commentDirective);

function commentDirective() {
	return {
		restrict: 'EA',
		templateUrl: 'src/templates/comments.html'
	}
}