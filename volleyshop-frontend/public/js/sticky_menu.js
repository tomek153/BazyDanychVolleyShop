$(document).ready(function() {
    var NavY = $('.menu').offset().top;
    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();

        if (ScrollY-60 > NavY) {
            $('.menu').addClass('sticky');
            $('.nav').css("margin-bottom", "61px");
        } else if (ScrollY <= NavY) {
            $('.menu').removeClass('sticky');
            $('.nav').css("margin-bottom", "0px");
        }
    };

    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});
