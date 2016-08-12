angular.module('starter.controllers')
    .controller('feedCtrl', ['$scope', '$state', '$window', 'mycomments', 'postRest', 'imageRest', 'myimages', 'imageService',
        function($scope, $state, $window, mycomments, postRest, imageRest, myimages, imageService) {

            $scope.myprofile = mycomments;
            $scope.comments = {};
            $scope.commentsArray = [];
            // $scope.image = {};
            $scope.image = myimages;

            $scope.picture = {};

            $scope.goTopicture = function(pic) {
                // var pictures = {
                //     "image": pic.image,
                //     "id": pic.id
                // };

                imageService.setPicture(pic);
                $state.go('picView');
               
            };



            $scope.postImage = function(form) {


                imageRest.post($scope.picture)

                .then(function(response) {
                    if (response.status == 200) {
                        alert("Success!");
                        console.log($scope.picture)
                        return response.data;
                    }
                }, function(error) {
                    if (error.status == 404) {
                        alert("Page not found!");
                    }

                    else if (error.status == 500) {
                        alert("The world has ended");
                    }
                });

            };




            $scope.submitPost = function(form) {

                $scope.comments.imageID = $window.localStorage.picID;
                postRest.post($scope.comments)
                    .then(function(response) {
                        if (response.status == 200) {
                            $scope.commentsArray.push(response.data);
                            // $window.localStorage.commentID = response.data.id;

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

        }
    ]);
