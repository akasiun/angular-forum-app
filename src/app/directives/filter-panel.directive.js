/**
 * @desc TODO:
 */
(function() {
    'use strict';

    angular
        .module('app')
        .directive('filterPanel', filterPanel);

    filterPanel.$inject = [];
    
    function filterPanel() {
        return {
            restrict: 'AE',
            templateUrl: 'app/templates/filter-panel.html'
        }
    }

})();