/**
 * @desc Container directive to load a list of post-directive
 */
(function() {
    'use strict';

    angular
        .module('app')
        .directive('postsList', postsList);

    postsList.$inject = [];

    function postsList() {
        return {
            restrict: 'AE',
            templateUrl: 'app/templates/posts-list.html'
        }
    }
})();