let app = angular.module("app", ['ui.router']);

app.config(function ($stateProvider, $urlRouteProvider, $locationProvider) {
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('login', {
      url: 'login',
      controller: "LoginController",
      templateUrl: "views/login.html"
    })
    .state('posts', {
      url: 'posts',
      controller: 'PostsController',
      templateUrl: "views/posts.html"
    });

  $locationProvider.html5Mode(true);
});
