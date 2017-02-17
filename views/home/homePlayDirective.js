angular.module('app')
.directive('homePlayDirective', function(){
    return {
        templateUrl: './views/home/homePlayTemplate.html',
        restrict: 'AE'
    }
})