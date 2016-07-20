angular.module('starter.controllers')
    .controller('profileCtrl', ['$scope', '$state','$window','mycomments', 'postRest','imageRest', function($scope,$state,$window,mycomments, postRest,imageRest){
    $scope.myprofile=mycomments;
      $scope.comments={};
      $scope.commentsArray=[];
      
      
        $scope.submitPost = function(form) {
   
    
            postRest.post($scope.comments)
                .then(function(response) {
                    if (response.status == 200) {
                      $scope.commentsArray.push(response.data);
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
    $scope.comment=mycomments;
    // $scope.loadPage=function(){
    //  $route.reload();
                    
    //     };

    }]);
