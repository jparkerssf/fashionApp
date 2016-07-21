// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'RESTServices'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: 'templates/landing.html'
    })
    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'registerCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })

  .state('tops', {
    url: '/tops',
    templateUrl: 'templates/tops.html',
    controller: 'topsCtrl'
  })

  .state('bottoms', {
      url: '/bottoms',
      templateUrl: 'templates/bottoms.html',
      controller: 'bottomsCtrl'
    })
   
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html'
    })


  .state('tabs', {
      url: '/tabs',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })
    .state('tabs.home', {
      url: '/home',
      views: {
        'home': {
          templateUrl: 'templates/home.html'

        }
      }
    })
 .state('tabs.feed', {
    url: '/feed',
    views: {
      'feed': {
        templateUrl: 'templates/feed.html',
        controller: 'feedCtrl',
        resolve: {
          mycomments: ['postRest', '$window',
            function(postRest, $window) {
              return postRest.get($window.localStorage.userID, $window.localStorage.token)
                .then(function(res) {
                  return res.data;
                }, function(err) {
                  alert("There was an error retrieving your information");
                })
            }
          ],

          myimages: ['$window', 'imageRest',
            function( $window, imageRest) {
              return imageRest.get()
                .then(function(response) {
                  if (response.status == 200) {
                    $window.localStorage.picID = response.data.id;
                    return response.data;
                  
                  }
                }, function(error) {
                  if (error.status == 404) {
                    alert("Page not found!");
                  }

                  else if (error.status == 500) {
                    alert("The world has ended");
                  }
                });
            }
          ]
        }
      }
    }
  })
          
          
      
  .state('tabs.profile', {
    url: '/profile',
    views: {
      'profile': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl',
        resolve: {
          mycomments: ['postRest', '$window',
            function(postRest, $window) {
              return postRest.get($window.localStorage.userID, $window.localStorage.token)
                .then(function(res) {
                  return res.data;
                }, function(err) {
                  alert("There was an error retrieving your information");
                })
            }
          ],

          myimages: ['$window', 'imageRest',
            function( $window, imageRest) {
              return imageRest.get()
                .then(function(response) {
                  if (response.status == 200) {
                    $window.localStorage.picID = response.data.id;
                    return response.data;
                  
                  }
                }, function(error) {
                  if (error.status == 404) {
                    alert("Page not found!");
                  }

                  else if (error.status == 500) {
                    alert("The world has ended");
                  }
                });
            }
          ]


        }
      }
    }
  })
});
