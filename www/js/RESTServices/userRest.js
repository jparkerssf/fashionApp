/*  global angular */
 
 angular.module("RESTServices", []) 
  .service('userRest', ['$http', function($http){ 
  
var  userRest = this;
userRest.post = function(newUser) {
 return $http({
            url: "https://myfashion-jadtheparker.c9users.io/api/fashUsers",
            method:'POST',
            data: newUser
          });
        };
        
  userRest.get = function(user) {
 return $http({
            url: "https://myfashion-jadtheparker.c9users.io/api/fashUsers/login",
            method:'POST',
             data: user
          });
        };
           

   }]);
   
   
