// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('leitor', ['leitor.controllers', 'ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('signin', {
      url: "/sign-in",
      templateUrl: "sign-in.html",
      controller: 'leitorController'
    })
    .state('forgotpassword', {
      url: "/forgot-password/:mesa",
      templateUrl: "forgot-password.html",
      controller: 'cardapioController',
    });


   $urlRouterProvider.otherwise("/sign-in");

});