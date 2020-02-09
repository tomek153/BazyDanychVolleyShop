document.addEventListener("DOMContentLoaded", function(event) { 

    var NavY = $('.menu-my').offset().top;
    var stickyNav = function(){
        var ScrollY = $(window).scrollTop();

        if (ScrollY-60 > NavY) {
            $('.menu-my').addClass('sticky-my');
            $('.nav-my').css("margin-bottom", "60px");
        } else if (ScrollY <= NavY) {
            $('.menu-my').removeClass('sticky-my');
            $('.nav-my').css("margin-bottom", "0px");
        }
    };

    stickyNav();
    $(window).scroll(function() {
        stickyNav();
    });
});
