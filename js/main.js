$(window).on('load', function() {
    new WOW().init();
    jQuery('.preloader').fadeOut('slow', function() {
        jQuery(this).remove();
    });


});
$(document).ready(function() {
    // Add a click event handler to all buttons with class "link"
    $(".inner_item .AboutIconBg").click(function() {
        // Find the closest parent with class "box" and add a class to it
        $(this).closest(".inner_item").toggleClass("opened");
    });

    $(".toggle-menu").click(function() {
        $(this).toggleClass('clicked');
        $('.navbar-collapse').toggleClass('open-menu');
        $('body').toggleClass('menu-opened');
    })
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("header").addClass("scrolled");
    } else {
        $("header").removeClass("scrolled");
    }
});