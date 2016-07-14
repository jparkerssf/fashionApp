// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic','ngCordova', 'starter.controllers'])

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
      templateUrl: 'templates/register.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html'
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
    .state('feed', {
      url: '/feed',
      templateUrl: 'templates/feed.html'
    })
.state('home', {
      url: '/home',
      templateUrl: 'templates/home.html'
    })
 .state('profile', {
      url: '/profile',
      templateUrl: 'templates/profile.html'
    })
    
     .state('comments', {
      url: '/comments',
      templateUrl: 'templates/comments.html'
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
        templateUrl: 'templates/feed.html'
      
      }
    }
  })
  .state('tabs.profile', {
    url: '/profile',
    views: {
      'profile': {
        templateUrl: 'templates/profile.html'
      
      }
    }
  })
 
  
  
  
 
    
});

