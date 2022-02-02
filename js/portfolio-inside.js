window.onload = function () {

    const glidePortfolioTopSlider = new Glide('.portfolio-slider__glide_top', {
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
    glidePortfolioTopSlider.mount();

    const glidePortfolioBottomSlider = new Glide('.portfolio-slider__glide_bottom', {
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
    glidePortfolioBottomSlider.mount();


}

