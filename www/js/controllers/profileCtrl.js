angular.module('starter.controllers')
    .controller('profileCtrl', ['$scope', '$state', '$window', 'mycomments', 'postRest', 'imageRest', 'myimages', function($scope, $state, $window, mycomments, postRest, imageRest, myimages) {
        $scope.myprofile = mycomments;
        $scope.comments = {};
        $scope.commentsArray = [];
        $scope.image = {};
        $scope.image = myimages;

  

        $scope.submitPost = function(form) {

            $scope.comments.imageID = $window.localStorage.picID;
            postRest.post($scope.comments)
                .then(function(response) {
                    if (response.status == 200) {
                        $scope.commentsArray.push(response.data);


                    }
                }, function(error) {
                    if (error.status == 404) {
                        console.log("Page not found!");
                    }

                    else if (error.status == 500) {
                        console.log("The world has ended");
                    }
                });
            $scope.comments = {};
        };
        $scope.commentsArray = mycomments;


    }]);
