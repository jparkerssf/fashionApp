/*  global angular */

angular.module("RESTServices")
 .service('postRest', ['$http', '$window', function($http,$window) {

  var postRest = this;
  postRest.post = function(newComment,token) {
   newComment.userID=$window.localStorage.userID;
   return $http({
    url: "https://myfashion-jadtheparker.c9users.io/api/Comments",
    method: 'POST',
    data: newComment,
    headers:  {
     'Authorization': token
    }
   });

  };

  postRest.get = function(userID,token) {
   token=$window.localStorage.token;
   return $http({
    url: "https://myfashion-jadtheparker.c9users.io/api/Comments/?filter[where][userID]=" + $window.localStorage.userID,
    method: 'GET',
    headers:  {
     'Authorization': token
    }
   });
  };











 }]);
