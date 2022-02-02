window.onload = function () {

    const glideProductHostingSlider = new Glide('.hosting__glide', {
        type: 'slider',
        autoplay: 3000,
        animationDuration: 500,
        perView: 1,
        gap: 50,
        startAt: 0,
        focusAt: 'center',
        rewind: false,
    keyboard: false,
        breakpoints: {
            1350: {
                perView: 2
            },

            770: {
                perView: 1
            }
        }
    })
    glideProductHostingSlider.mount();

    const glideProductSlider = new Glide('.product-slider__glide', {
        type: 'carousel',
        autoplay: 3000,
        animationDuration: 1000,
        perView: 1,
        startAt: 0,
        focusAt: 'center',
    keyboard: false,
        breakpoints: {
            770: {
                perView: 1
            }
        }
    })
    glideProductSlider.mount();

}