function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
};
// login-modal-content     login-button-modal
// signup-modal-content
function animateOutSignupContent() {
    $('#signup-modal-content').addClass('animate-out-my');
};
function animateOutLoginContent() {
    $('#login-modal-content').addClass('animate-out-my');
};
function animateInContent(_ELEMENT) {
    $(_ELEMENT).addClass('animate-in-my');
};
function displayNone(_ELEMENT) {
    $(_ELEMENT).css({
        "display": "none"
    });
};
function displayBlock(_ELEMENT) {
    $(_ELEMENT).css({
        "display": "block"
    });
};
function changeToSignupForm() {
    animateOutLoginContent();
    setTimeout("displayNone('#login-modal-content')", 500);
    setTimeout("displayBlock('#signup-modal-content')", 500);
    setTimeout("animateInContent('#signup-modal-content')", 500);
    setTimeout("$('#signup-modal-content').css({'opacity':'1'})", 600);
};
function changeToLoginForm() {
    animateOutSignupContent();
    setTimeout("displayNone('#signup-modal-content')", 500);
    setTimeout("displayBlock('#login-modal-content')", 500);
    setTimeout("animateInContent('#login-modal-content')", 500);
    setTimeout("$('#login-modal-content').css({'opacity':'1'})", 600);
};
$(document).ready(function(){
    $('.change-to-login-button').click(function(){
        $('#login-modal-content').removeClass('animate-out-my');
        $('#signup-modal-content').removeClass('animate-in-my');
        changeToLoginForm();
    });
    $('.change-to-signup-button').click(function(){
        $('#signup-modal-content').removeClass('animate-out-my');
        $('#login-modal-content').removeClass('animate-in-my');
        changeToSignupForm();
    });
    $('.login-button').click(function(){
        $('#signup-modal-content').css({ "display": "none", "opacity": "0" });
        $('#login-modal-content').css({"display": "block"});
        $('#id01').css({"top": "0%"});
    });

    $('.cancelbtn').click(function(){
        $('#id01').css({"top": "-100%"});
        setTimeout("$('#signup-modal-content').css({ 'display': 'block', 'opacity': '1' })", 800);
    });

    $('.signup-button').click(function(){
      $('#login-modal-content').css({ "display": "none", "opacity": "0" });
      $('#signup-modal-content').css({"display": "block"});
      $('#id01').css({"top": "0%"});
    });

    $('.cancelbtn-signup').click(function(){
        $('#id01').css({"top": "-100%"});
        setTimeout("$('#login-modal-content').css({ 'display': 'block', 'opacity': '1' })", 800);
    });
});
