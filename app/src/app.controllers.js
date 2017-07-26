'use strict';

/**
 *  @desc Header Controller - deals with user profile/session data
 */
app.controller('HeaderController', ['dataFactory', (dataFactory) => {
    let user;    
    
    // TODO: get data from service -->
    // ...

    // console.log('HeaderCtrl is loaded!');

    this.getUser = function(id) {
        return dataFactory.getUser()
            .then(function(result) {
                
        })

        var user = data.users.find(function(usr) {
            return usr.id === id
        });
        return user ? user.name : 'Anonymous';
    }
}]);


/**
 * 	@desc Posts Controller - posts logic
 */
app.controller('PostsController', ['dataFactory', function(dataFactory) {
    var ctrl = this;
    var posts = [];

    console.log('PostsCtrl is loaded!');
    console.log('PostsCtrl this: ' + this);
    console.log('PostsCtrl this: ' + ctrl);

	ctrl.getPosts = function() {
        console.log('getting posts...')
        return posts = dataFactory.getPosts();
    }
}]);

app.controller('PostController', ['dataFactory', function(dataFactory) {

}]);


/**
 *  @desc Comments Controller
 */
app.controller('CommentsController', ['dataFactory', function(dataFactory) {
    // TODO: get data from service -->
    console.log('CommentsCtrl is loaded!');

    this.getComments = function(postId) {
        return data.comments.filter(function(comment) {
            return comment.postId === postId;
        })
    }
}])