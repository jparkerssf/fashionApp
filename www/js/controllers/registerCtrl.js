angular.module('starter.controllers')
    .controller('registerCtrl', ['$scope', '$state', '$window', 'userRest', function($scope, $state, $window, userRest) {
        $scope.user = {};
        $scope.signupForm = function(form) {
            if (form.$invalid) {
                return alert("Please complete the form before proceeding.");

            }


            userRest.post($scope.user)
                .then(function(response) {
                    if (response.status == 200) {
                        $scope.user = {};

                        $state.go('tabs.home');
                        $window.localStorage.token = response.data.token;
                        $window.localStorage.userID = response.data.id;
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
