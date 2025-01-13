
$(function () {
    "use strict";

    $(function () {
        $(".preloader").fadeOut();
    });
 
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })

    $(function () {
        $('[data-toggle="popover"]').popover()
    })

    jQuery(document).on('click', '.mega-dropdown', function (e) {
        e.stopPropagation()
    });
    jQuery(document).on('click', '.navbar-nav > .dropdown', function (e) {
        e.stopPropagation();
    });
    $(".dropdown-submenu").click(function () {
        $(".dropdown-submenu > .dropdown-menu").toggleClass("show");
    });

    $("body").trigger("resize");

    var wind = $(window);
    wind.on("load", function () {
        var bodyScroll = wind.scrollTop(),
            navbar = $(".topbar");
        if (bodyScroll > 100) {
            navbar.addClass("fixed-header animated slideInDown")
        } else {
            navbar.removeClass("fixed-header animated slideInDown")
        }
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('.topbar').addClass('fixed-header animated slideInDown');
            $('.bt-top').addClass('visible');
        } else {
            $('.topbar').removeClass('fixed-header animated slideInDown');
            $('.bt-top').removeClass('visible');
        }
    });

    AOS.init();

    $('.bt-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });

});
