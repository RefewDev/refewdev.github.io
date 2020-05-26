jQuery(window).on("load", function () {

    "use strict";
    /* =============== PRELOADER =============== */
    $(".preloader").fadeOut("slow");

    /* =============== ISOTOP =============== */
    $('.portfolioItems').isotope({
        itemSelector: 'li',
        layoutMode: 'masonry'
    });


});
jQuery(function ($) {
    "use strict";

    $('a').addClass('transition'); /* add transition class to every a */

    /* =============== CUSTOM SCROLLBAR STYLE =============== */

    jQuery('#nav').singlePageNav({
        offset: jQuery('#nav').outerHeight(),
        filter: ':not(.external)',
        speed: 1200,
        currentClass: 'current',
        easing: 'easeInOutExpo',
        updateHash: true,
        beforeStart: function () {
            console.log('begin scrolling');
        },
        onComplete: function () {
            console.log('done scrolling');
        }
    });


    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 400) {
            $("#navigation").css("background-color", "rgba(51,52,57,1)");
        } else {
            $("#navigation").css("background-color", "rgba(51,52,57,.4)");
        }
    });

    /* auto close nav menu on mobile  */

    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a') && ($(e.target).attr('class') != 'dropdown-toggle')) {
            $(this).collapse('hide');
        }
    });

    /* =============== SECTION Story about  =============== */
    $(".story_images").slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

    /* =============== counting  =============== */

    var section = $('#counting');
    var cc = 1;


    $(window).on('scroll', function () {
        var elemPos = section.offset().top;
        var elemPosBottom = section.offset().top + section.height();
        var winHeight = $(window).height();
        var scrollToElem = elemPos - winHeight;
        var winScrollTop = $(this).scrollTop();

        if (winScrollTop > scrollToElem) {
            if (elemPosBottom > winScrollTop) {
                if (cc < 2) {
                    cc = cc + 2;
                    $('.number').each(function () {
                        $(this).prop('Counter', 0).animate({
                            Counter: $(this).text()
                        }, {
                            duration: 3500,
                            easing: 'swing',
                            step: function (now) {
                                $(this).text(Math.ceil(now));
                            }
                        });
                    });
                }
            }
        }
    });

    /* =============== whatWeDo features =============== */
    $('.slideshow').slick({
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });



    /* =============== TESTIMONIAL SLIDER =============== */
    $('.testimonialSlider').unslider({
        nav: false,
        arrows: {
            //  Unslider default behaviour
            prev: '<a class="unslider-arrow prev"><i class="mdi mdi-chevron-left"></i></a>',
            next: '<a class="unslider-arrow next"><i class="mdi mdi-chevron-right"></i></a>',
        }
    });


    /* =============== PORTFOLIO HOVER EFFECT =============== */
    $('.portfolioItems > li').each(function () {
        $(this).hoverdir();
    });

    /* =============== PERTTYPHOTO =============== */
    $("a.prettyPhoto").prettyPhoto();


    /* =============== SHOW / HIDE GO TO TOP =============== */
    /* Check to see if the window is top if not then display go top button */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('#scrollToTop').fadeIn();
        } else {
            $('#scrollToTop').fadeOut();
        }
    });
    /* Click event to scroll to top */
    $('#scrollToTop').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, "easeInOutExpo");
        return false;
    });


});