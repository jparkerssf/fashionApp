/*  global angular */

angular.module("RESTServices")
 .service('imageRest', ['$http', function($http) {

  var imageRest = this;
  imageRest.get = function() {
   return $http({
    url: "https://myfashion-jadtheparker.c9users.io/api/Images/findOne",
    method: 'GET'
   });
  };


 }]);
