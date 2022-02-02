document.addEventListener("DOMContentLoaded", (ev) => {
    const filterSliderOrder = new Glide('.order__glide', {
        type: 'carousel',
        animationDuration: 1000,
        perView: 6,
        gap: 50,
        startAt: 0,
        focusAt: '0',
        keyboard: false,
        breakpoints: {
            1500: {
                perView: 5
            },

            770: {
                focusAt: 'center',
                perView: 2,

            },
            500 :{
                focusAt: 'center',
                perView: 1,
            }


        }
    })
    filterSliderOrder.mount();
})

