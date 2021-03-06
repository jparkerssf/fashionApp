angular.module('starter.controllers')

.controller("bottomsCtrl", ['$scope', '$cordovaCamera',  '$ionicHistory', function($scope, $cordovaCamera,$ionicHistory) {

    $scope.takePicture = function() {
        var options = {
            quality: 75,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 300,
            targetHeight: 300,
            popoverOptions: CameraPopoverOptions,
            saveToPhotoAlbum: false
        };

        $cordovaCamera.getPicture(options).then(function(imageData) {
            $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
         
        });
    };
    

   

   $scope.goBack = function() {

      $ionicHistory.goBack();
 };
  

}]);