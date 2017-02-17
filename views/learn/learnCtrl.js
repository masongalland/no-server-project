angular.module("app").controller("learnCtrl", function($scope, mainSrv){
    $scope.animals = mainSrv.animals;

    $scope.makeNoise = function(animal){
        var noise = new Audio(animal.sound);
        noise.play();
    }
});