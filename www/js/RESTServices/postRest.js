/*  global angular */
 
 angular.module("RESTServices") 
  .service('postRest', ['$http', function($http){ 
  
var postRest = this;
postRest.post = function(newComment) {
 return $http({
            url: "https://myfashion-jadtheparker.c9users.io/api/Comments",
            method:'POST',
            data: newComment
          });
        };
        
         postRest.get = function(comment) {
 return $http({
            url: "https://myfashion-jadtheparker.c9users.io/api/fashUsers/Comments",
            method:'GET',
             data: comment
          });
        };
          
        
        
        
        
   }]);
   
   
