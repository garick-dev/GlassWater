window.onload = function () {

    const glideTop = new Glide('.works__glide_top', {
        type: 'carousel',
        autoplay: 3000,
        perView: 2,
        animationDuration: 500,
        focusAt: 'center',
        keyboard: false,
        breakpoints: {
            1350: {
                perView: 1
            },
            770: {
                perView: 1
            },

        }
    })
    glideTop.mount();
    const glideBottom = new Glide('.works__glide_bottom', {
        type: 'carousel',
        direction: "rtl",
        autoplay: 3000,
        animationDuration: 500,
        perView: 2,
        focusAt: 'center',
        keyboard: false,
        breakpoints: {
            1350: {
                perView: 1
            },
            770: {
                perView: 1
            },
        }
    })
    glideBottom.mount();

    const glideServices = new Glide('.services__glide', {
        type: 'carousel',
        autoplay: 3000,
        animationDuration: 1000,
        perView: 4,
        startAt: 0,
        focusAt: 'center',
        keyboard: false,
        breakpoints: {
            1350: {
                perView: 3
            },
            770: {
                perView: 2
            },
            400: {
                perView: 1
            },

        }
    })
    glideServices.mount();
}

