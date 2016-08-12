/*  global angular */

angular.module("RESTServices")
 .service('imageRest', ['$http', function($http) {

  var imageRest = this;
  imageRest.get = function() {
   return $http({
    url: "https://myfashion-jadtheparker.c9users.io/api/Images",
    method: 'GET'
   });
  };


  
 imageRest.post = function(picture) {
   
   return $http({
    url: "https://myfashion-jadtheparker.c9users.io/api/Images" ,
    method: 'POST',
    data:picture
   });
  };
  


 }]);
