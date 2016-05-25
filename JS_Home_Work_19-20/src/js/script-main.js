'use strict';

$(function() {

    // MENU
    $('.nav-menu__link').on('click',function () {
        $('.nav-menu__link--active').removeClass('nav-menu__link--active');
        $(this).addClass('nav-menu__link--active');
    });

    // SEARCH FIELD
    $('.menu-search__input').on('click', function(){
        $(this).select();
    });

    // SLIDER - settings here: https://github.com/stevenwanderski/bxslider-4
    $('.bxslider').bxSlider({
        auto: true,
        mode: 'fade',
        infiniteLoop: true,
        autoHover: true
    });

    // ACCORDION-PANEL
    $('.accordion-item__content').hide();
    $('.accordion-item__panel').on('click', function (event) {
        event.preventDefault();
        $('.accordion-item__content').slideUp();

        if ($(this).hasClass('accordion-item__panel--active')) {
            $('.accordion-item__panel').removeClass('accordion-item__panel--active')
        } else {
            $('.accordion-item__panel').removeClass('accordion-item__panel--active');
            $(this).addClass('accordion-item__panel--active');
            $(this).next().slideDown();
        }
    })
});