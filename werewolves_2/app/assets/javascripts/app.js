angular.module('werewolvesTwo',[ 'ui.router', 'templates', 'ng-token-auth'])
  .config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'home/_home.html',
          controller: 'MainCtrl'
        })
        .state('posts', {
          url: '/posts/{id}',
          templateUrl: 'posts/_posts.html',
          controller: 'PostsCtrl'
        })
        .state('sign_in',{
          url: '/sign_in',
          templateUrl: 'views/user_sessions/new.html',
          controller: 'UserSessionsCtrl'
        })
      $urlRouterProvider.otherwise('home');
    }
  ]);
