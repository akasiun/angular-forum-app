/**
 * 	@desc app header directive 
 * 	@example <header-directive></header-directive>
 */

app.directive('headerDirective', headerDirective);

function headerDirective() {
	return {		
		restrict: 'E',
		templateUrl: 'src/templates/header.html'
	}
}