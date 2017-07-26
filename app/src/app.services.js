'use strict';

/**
 * TODO: description
 * @desc The 'dataFactory' factory allows to get/post data from/to DB (temporary to FS)
 * @return JSON object
 */
app.factory('dataFactory', ['$http', '$log', function($http, $log) {
    // mock url, TODO: set up db with test data
    var dataUrl = '../data/db_truncated.json';
	var data = {};
    
    $http.get(dataUrl).then(function(result) {
            data.posts = result.data.posts;
            data.comments = result.data.comments;
            data.users = result.data.users;
            // console.log(result.data);
    });

    // mock requests to api
    data.getPosts = function() {
        var posts = [];
        $log.log('- getPosts was called!');
        
        $http.get(dataUrl).then(function(response) {
            posts = response.posts;
        }, function(error) {
            console.log('Error while loading data: ' + error.message);
        })

        // TODO: generated data check?
        return posts;
    };

    data.getPost = function(id) {
        return $http.get(dataUrl);
    };

    data.getComments = function(postId) {
        return $http.get(dataUrl);
    };    

    data.getUser = function(id) {

    };

    return data;    
}]);

