angular.module('app')
.directive('animateDir', function(){
    return {
        restrict: 'AE',
        link: function(scope, element, attributes) {
            $(document).ready(function () {
                $('.logo').click(function(){
                    $('#logo-tada').addClass('animated tada');
                    $('#logo-tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $('#logo-tada').removeClass('animated tada');
                    });
                })

                $('#ear').click(function(){
                    $('#ear').addClass('animated tada');
                    $('#ear').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                        $('#ear').removeClass('animated tada');
                    });
                })

                $('.menu-button').click(function(){
                    $('.mobile-menu').addClass('animated fadeInRightBig display');
                })
                $('#close, .mobile-menu-items').on('click',function(){                    
                    $('.mobile-menu').removeClass('animated fadeInRightBig display');
                })

                // $('.play-btn').on('click', function(){
                //     $('.home-hero').addClass('animated bounceOutLeft');
                // })
                       
            });
            
        }
    }
})