'use strict';

// LOADER-SLIDER
$(window).load(function () {
    $('.flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        controlNav: false,
        slideshow: true,
        directionNav: true,
        pauseOnHover: true,
        pauseOnAction: false,
    });
});

$(function () {
    // AJAX TO PIXABAY.COM
    var arrayWords = ['road sport', 'sunflower', 'football stadion', 'cat', 'dog', 'air balloon', 'sea wave'];
    var randomImage = Math.floor(Math.random() * arrayWords.length);
    var $search_input = $('.ideas__input');
    var $search_query = $('.ideas__input').val();

    loadImages(arrayWords[randomImage]);

    $search_input.on('click', function () {
        $(this).select();
    });

    $search_input.keypress(function (event) {
        if (event.which == 13) {
            $search_query = $search_input.val();
            $search_input.val('');
            loadImages($search_query);
            return false;
        }
    });

    $('#partners_search').on('click', function (event) {
        event.preventDefault();
        $search_query = $search_input.val();

        if ($search_query) {
            $search_input.val('');
            loadImages($search_query);
        }
    });

    function loadImages(query) {
        $('.ideas__cell').each(function (i) {
            $(this).css('background', 'url(img/ideas-img-' + i + '.jpg) center center no-repeat');
            $(this).css('opacity', 0.9);
        });

        $.ajax({
            type: 'GET',
            url: 'https://pixabay.com/api/?key=2778269-54335bd5853c59a5055a0912f&q=' + query + '&per_page=7',
            dataType: 'jsonp',

            success: function (data) {
                $.each(data.hits, function (i) {
                    $('.ideas__cell').each(function (i) {
                        $(this).css('opacity', 1);
                        $(this).css('backgroundImage', 'url(' + data.hits[i].webformatURL + ')');
                    });

                    $('.ideas__title').each(function (i) {
                        $(this).text(data.hits[i].tags)
                    })
                })
            }
        })
    }

    // MASONRY
    if ($(document).width() >= 1440) {
        $('.ideas__container').masonry({
            columnWidth: '.ideas__cell',
            gutter: 20,
            itemSelector: '.ideas__cell'
        })
    } else {
        $('.ideas__container').masonry({
            columnWidth: '.ideas__cell',
            gutter: 16,
            itemSelector: '.ideas__cell'
        })
    }
});