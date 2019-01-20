$(function () {
    indexSliders();
});

function indexSliders() {
    var sliderTop = $('.js-index-slider-top'),
        sliderMain = $('.js-index-slider-main'),
        sliderMainPrev = $('.js-index-slider-main-prev'),
        sliderMainNext = $('.js-index-slider-main-next');

    if (sliderTop.length) {
        sliderTop.slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoPlay: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 481,
                    settings: {
                        slidesToShow: 1
                    }
                },
            ],


        });
    }

    if (sliderMain.length) {
        sliderMain.slick({
            arrows: false,
            adaptiveHeight: true
        });
    }

    sliderMainPrev.on('click', function (e) {
        e.preventDefault();
        sliderMain.slick('slickPrev');
    });

    sliderMainNext.on('click', function (e) {
        e.preventDefault();
        sliderMain.slick('slickNext');
    });
}