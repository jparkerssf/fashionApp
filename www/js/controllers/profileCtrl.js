angular.module('starter.controllers')
    .controller('profileCtrl', ['$scope', '$state', '$window', 'postRest', function($scope, $state, $window, postRest) {

        $scope.submitPost = function(form) {

            $scope.comments = []
            postRest.post($scope.user)
                .then(function(response) {
                    if (response.status == 200) {
                        $scope.comments = [];
                        $window.localStorage.commentID = response.data.id;

                    }
                }, function(error) {
                    if (error.status == 404) {
                        console.log("Page not found!");
                    }
                    else if (error.status == 422) {
                        alert("That email has already been taken!");
                    }
                    else if (error.status == 500) {
                        console.log("The world has ended");
                    }
                });

        };
    }]);
