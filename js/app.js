angular.module("app", ['ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/#!');
        $stateProvider
            .state('home',{
                url:'/',
                templateUrl: "./views/home/home.html"
            })
            .state('play',{
                url:'/play',
                templateUrl: "./views/play/play.html",
                controller: "playCtrl"
            })
            .state('learn',{
                url:'/learn',
                templateUrl: "./views/learn/learn.html",
                controller: "learnCtrl"
            });
    })