       
    //    INSERT IN THE MAIN JS FILE
       
       
       /*----- Slider-active active -----*/
        $('.slider-active-1').owlCarousel({
            loop: true,
            nav: true,
            autoplay: false,
            autoplayTimeout: 5000,
            animateOut: 'fadeOut',
            animateIn: 'fadeIn',
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
            item: 1,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 1,
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                }
            }
        })