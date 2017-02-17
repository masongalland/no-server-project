angular.module('app')
.directive('homeLearnDirective', function(){
    return {
        templateUrl: './views/home/homeLearnTemplate.html',
        restrict: 'AE'
    }
})