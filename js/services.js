window.onload = function () {

    const filterSliderServices = new Glide('.services__glide', {
        type: 'carousel',
        animationDuration: 1000,
        perView: 7,
        gap: 30,
        startAt: 0,
        focusAt: '0',
        keyboard: false,
        breakpoints: {
            1500: {
                perView: 6
            },
            1300: {
                perView: 5
            },
            1100: {
                perView: 4
            },
            770: {
                focusAt: 'center',
                perView: 2,

            },
            500: {
                focusAt: 'center',
                perView: 1,
            }


        }
    })
    filterSliderServices.mount();
}