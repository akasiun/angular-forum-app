/**
 * TODO: description
 * @desc The 'postService' factory allows to get/update/delete data from/to DB (temporary from FS)
 * @return Promise Object
 */

(function() {
    'use strict';

    angular
        .module('app')
        .factory('postService', postService);

    postService.$inject = ['$http'];

    function postService($http) {
        // mock url, TODO: set up db with test data
        var dataUrl = '../data/db_truncated.json';
        var service = {
            getPostsAll: getPostsAll,
            getPost: getPost,
            updatePost: updatePost,
            deletePost: deletePost
        };
        return service;

        function getPostsAll() {
            // get all published posts
            return $http.get(dataUrl)
                .then(getPostsAllComplete)
                .catch(function (message) {
                    console.warn('Failed to getPostsAll');
                });

            function getPostsAllComplete(response) {
                return response.data.posts;
            }
        };

        function getPost(postId) {
            // get single post
        };

        function updatePost(postId, userId) {
            // update post
        }

        function deletePost(postId) {
            // delete post
        }
    };
})();