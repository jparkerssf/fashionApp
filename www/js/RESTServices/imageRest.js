/*  global angular */
 
 angular.module("RESTServices") 
  .service('imageRest', ['$http', function($http){ 
  
var  imageRest = this;
  imageRest.get = function(image) {
 return $http({
            url: "https://myfashion-jadtheparker.c9users.io/api/Images",
            method:'GET',
             data: image
          });
        };
           

   }]);
   
   
