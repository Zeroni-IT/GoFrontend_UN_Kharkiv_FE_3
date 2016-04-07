$(function () {
    var tabItem = $('.tabs_menu_item');
    tabItem.click(function () {
        var $index = $('.tabs_menu_item').index(this);
        $(this).addClass('active_item').siblings().removeClass('active_item');
        $('.tab').eq($index).addClass('active_tab').siblings().removeClass('active_tab');
    });

    tabItem.hover(function () {
        if (!($(this).hasClass('active_item'))) {
            $(this).css('border-color', 'lightblue');
        }
    }, function () {
        $(this).css('border-color', 'transparent');
    });

    $('.tooltip_input').hover(
        function () {
            $('.tip').remove();
            var $tip = '<span class="tip">' + $(this).data('tip') + '</span>';
            $(this).after($tip);
            $('.tip').stop(true).fadeIn(1000);
        }, function () {
            $('.tip').stop(true).fadeOut(1000, function () {
                $(this).remove();
            });
        }
    );

    $('.tooltip_button').click(function () {
        $('.tip').remove();
        $('.tooltip_input').each(function () {
            var $tip = '<span class="tip">' + $(this).data('tip') + '</span>';
            $(this).after($tip);
        });
        $('.tip').stop(true).fadeIn(2000).fadeOut(2000, function () {
            $(this).remove();
        });
    });
});
