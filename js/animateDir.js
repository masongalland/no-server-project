angular.module('app')
.directive('animateDir', function(){
    return {
        restrict: 'AE',
        link: function(scope, element, attributes) {
            $(document).ready(function () {
                $('.logo').mouseover(function(){
                    $('#logo-tada').addClass('animated tada');
                    $('#logo-tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $('#logo-tada').removeClass('animated tada');
                    });
                })

                $('#ear').mouseover(function(){
                    $('#ear').addClass('animated tada');
                    $('#ear').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $('#ear').removeClass('animated tada');
                    });
                })
                       
            });
            
        }
    }
})