$(function () {
    indexSlider();
});

function indexSlider() {
    var slider = $('.js-index-slider');

    if (slider.length) {
        slider.slick({
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
}