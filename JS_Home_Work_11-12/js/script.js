$(function () {

    var $html = $('#sample-template').html();
    var $clubs = [
        {
            name: 'Manchester United',
            emblem: 'img/img_01.jpg',
        },
        {
            name: 'Shakhtar Donetsk',
            emblem: 'img/img_02.jpg',
        },
        {
            name: 'Barcelona',
            emblem: 'img/img_03.jpg',
        },
        {
            name: 'Borussia Dortmund',
            emblem: 'img/img_04.jpg',
        },
        {
            name: 'Dynamo Kyiv',
            emblem: 'img/img_05.jpg',
        },
        {
            name: 'Real Madrid',
            emblem: 'img/img_06.jpg',
        },
        {
            name: 'Arsenal',
            emblem: 'img/img_07.jpg',
        },
        {
            name: 'PSG',
            emblem: 'img/img_08.jpg',
        },
        {
            name: 'Bayern Munchen',
            emblem: 'img/img_09.jpg',
        },
        {
            name: 'Juventus',
            emblem: 'img/img_10.jpg',
        },
    ];
    var $content = tmpl($html, {
        data: $clubs,
    });

    $('body').append($content);

    $('carousel-list').carousel();

});
