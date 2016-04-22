(function ($) {

    $.fn.carousel = function () {

        var leftUIEl = $('.carousel-arrow-left');
        var rightUIEl = $('.carousel-arrow-right');
        var elementsList = $('.carousel-list');

        var pixelsOffset = 225;
        var currentLeftValue = 0;
        var elementsCount = elementsList.find('li').length;
        var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
        var maximumOffset = 0;

        leftUIEl.click(function(elem) {
            if(currentLeftValue == maximumOffset) {
                currentLeftValue = minimumOffset;
                elementsList.animate({
                        left: currentLeftValue + 'px'
                    }, 10,
                    function() {
                        elementsList.stop(true);
                    });
            };


            if (currentLeftValue != maximumOffset) {
                currentLeftValue += pixelsOffset;
                elementsList.animate({
                    left : currentLeftValue + "px"
                }, 750);
            }

        });

        rightUIEl.click(function(elem) {

            if(currentLeftValue == minimumOffset) {
                currentLeftValue = 0;
                elementsList.animate({
                    left: currentLeftValue + 'px'
                }, 10,
                    function() {
                        elementsList.stop(true);
                    });
            };

            if (currentLeftValue != minimumOffset) {
                currentLeftValue -= pixelsOffset;
                elementsList.animate({
                    left : currentLeftValue + "px"
                }, 750);
            }

        });

        return this;
    }

})(jQuery);
