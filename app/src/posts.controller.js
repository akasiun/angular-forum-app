/**
 * 	@desc app controller 
 */

app.controller('PostsController', ['$scope', '$http', function ($scope, $http) {
    var dataUrl = '../data/db_truncated.json';
	var data = {};

    $http.get(dataUrl).then(function(result) {
            data.posts = result.data.posts;
            data.comments = result.data.comments;
            data.users = result.data.users;
            // console.log(result.data);
    });

	this.getPosts = function() {        
		return data.posts;
	}

    this.getUser = function(id) {
        var user = data.users.find(function(usr) {
            return usr.id === id
        });
        return user ? user.name : 'Anonymous';
    }
	
    this.getComments = function(postId) {
        return data.comments.filter(function(comment) {
            return comment.postId === postId;
        })
    }
}]);
