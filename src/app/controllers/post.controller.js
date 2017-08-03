/**
 * 	@desc Post Controller ...
 */

(function () {
    'use strict';

    angular
        .module('app')
        .controller('PostController', PostController);

    PostController.$inject = ['postService'];

    function PostController(postService) {
        var ctrl = this;
        var posts = [];
        ctrl.getPosts = getPosts;

        preloadAll();

        function preloadAll() {
            return postService.getPostsAll()
                .then(function (data) {
                    console.dir(data);
                    posts = data;                    
                });
        }

        function getPosts() {
            return posts;
        };
    };
})();