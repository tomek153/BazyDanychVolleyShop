
function stickyBackgroundImage() {
    var ScrollY = $(window).scrollTop();
    var FooterY = $(document).height();

    if (ScrollY > FooterY-1100) {
        $('.background-container-my').css({"background-attachment": "local", "background-position": "bottom"});
    } else if (ScrollY <= FooterY-1100 && ScrollY >=230) {
        $('.background-container-my').css({"background-attachment": "fixed", "background-position": "center"});
    } else if (ScrollY < 230) {
        $('.background-container-my').css({"background-attachment": "local", "background-position": "center 150px"});
    }
};

document.addEventListener("DOMContentLoaded", function(event) {
    $(window).on('load', function(){
        $( document ).ready(function() {
            $(window).scroll(function() {
                stickyBackgroundImage();
            });
        });
    });
});
