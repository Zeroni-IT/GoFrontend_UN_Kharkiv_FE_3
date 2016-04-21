$(function () {

    var showDropdown = function () {
        $(this).children('.sub_menu_level_1')
            .show(200)
            .animate({
                backgroundColor: "green",
            }, 200)
        ;
    };

    var hideDropdown = function () {
        $(this).children('.sub_menu_level_1')
            .hide(200)
            .animate({
                backgroundColor: "lime",
            }, 200)
        ;
    };

    $('li.main_dropdown').hover(showDropdown, hideDropdown);

    var changeColor = function () {
        $(this).animate({
            color: 'white',
            fontWeight: 900,
        }, 100);
    };

    var changeColorBack = function () {
        $(this).animate({
            color: 'white',
            fontWeight: 100,
        }, 100);
    };

    $('.sub_menu_level_1--link').hover(changeColor, changeColorBack);
    $('.sub_menu_level_2--link').hover(changeColor, changeColorBack);


    var show_sub_menu_level_2 = function () {
        var $item = $(this).children('.sub_menu_level_2');
        var top_position = parseInt($(this).css('top'));

        $item.css('top', + top_position + 'px');

        $(this).children('.sub_menu_level_2')
            .toggle(200)
            .animate({
                backgroundColor: "green",
            }, 200)
        ;
    };

    $('li.sub_menu_level_1--item').hover(show_sub_menu_level_2);
    



    $('.jcarousel')
        .jcarousel({
            animation: 'slow',
            wrap: 'circular'
        })

        .jcarouselAutoscroll({
            interval: 3000,
            target: '+=1',
            autostart: true
        })
    ;

    $('.jcarousel_prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel_next').jcarouselControl({
        target: '+=1'
    });

    $('.jcarousel_pagination')
        .jcarouselPagination({
            item: function (page) {
                return '<a class = "jcarousel_page" href="#' + page + '"></a>';
            }
        })

        .on('jcarouselpagination:active', 'a', function () {
            $(this).addClass('active');
        })

        .on('jcarouselpagination:inactive', 'a', function () {
            $(this).removeClass('active');
        })
    ;

    $('.jquery_checkbox input, select').styler();

});