angular.module('imageService',[])
.service('imageService',['$window', function ($window) {
    var service = this;
    var pictureInfo = {
        // "image": " ",
        //  "id" : " "
    };
 
   
    service.getPicture = function()
    {
        return pictureInfo;
    };
    service.setPicture = function(picture)
    {
       pictureInfo = picture;
       $window.localStorage.picID = pictureInfo.id;
    };
   
   
    
   
}]);