/**
 * 	@desc Post Controller ...
 */

(function(){
    'use strict';

    angular
        .module('app')
        .controller('PostController', PostController);
    
    PostController.$inject = [postService];

    function PostController(postService) {
        var ctrl = this;
        ctrl.posts = [];
        ctrl.getPosts = getPosts;

        function getPosts() {
            return postService.getPosts()
                .then(function(data) { 
                    console.dir(data);
                    ctrl.posts = data;
                    return ctrl.posts;
                });           
        };
    };
})();