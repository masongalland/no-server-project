angular.module("app").controller("playCtrl", function($scope, mainSrv){
    $scope.animals = mainSrv.animals;
    $scope.getRandom = mainSrv.getRandom;
    $scope.random = $scope.getRandom($scope.animals);
    $scope.count = 0;

    $scope.makeNoise = function(animal){
        var sound = new Audio(animal.sound);
        sound.play();
    }
    $scope.guess = function(animal){
        if($scope.random[$scope.count] === animal){
            if($scope.count < 15){
                $scope.count++
            }
            swal(
                'Good job!',
                'Click the ear to hear a new sound!',
                'success'
            )
        }
        else{
            swal(
                'Oops...',
                'Try Again!',
                'error'
            );
        }
    }
});