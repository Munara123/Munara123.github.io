$(document).ready(function() {

    let allItems = $('.hidden-list').hide();
    allItems.first().show();
    $('.item-title').click(function() {
        if ($(this).next().css('display') == 'none') {
            allItems.slideUp();
            $(this).next().slideDown();
        }
    })


    $('.slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        vertical: true,
        verticalSwiping: true,
        responsive: [{
                breakpoint: 1025,
                settings: {
                    vertical: false,
                    verticalSwiping: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    vertical: false,
                    verticalSwiping: false
                }
            }
        ]
    });


    $('.prev').click(function() {
        $('.slider').slick('slickPrev');
    });

    $('.next').click(function() {
        $('.slider').slick('slickNext');
    });

    $('.person > img').on('click', function() {
        $('.person > img').removeClass('active');
        $(this).addClass('active');
        $('.person-info').fadeOut(300);
        $(this).next().fadeIn(300);
    });


    var slideout = new Slideout({
        'panel': document.getElementById('main'),
        'menu': document.getElementById('menu'),
        'padding': 175,
        'tolerance': 70,
        'touch': false
    });

    slideout.once('open', slideout._initTouchEvents);
    slideout.on('open', slideout.enableTouch);
    slideout.on('close', slideout.disableTouch);

    document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
        slideout.toggle();
    });


});