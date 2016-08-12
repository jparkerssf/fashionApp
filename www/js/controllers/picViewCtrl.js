angular.module('starter.controllers')
    .controller('picViewCtrl', ['$scope', '$state', 'imageService', 'postRest', '$window','mycomments',
        function($scope, $state, imageService, postRest, $window,mycomments) {
            $scope.myprofile = mycomments;
            $scope.comments = {};
            $scope.commentsArray = [];

            $scope.showPicture = imageService.getPicture();


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


        }
    ]);