       
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

        const burgerMenu = document.getElementById('burger-menu');
const navbar = document.querySelector('.navbar');

burgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Tab Switching Functionality
const tabButtons = document.querySelectorAll('.tab-button');
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to the clicked button
        button.classList.add('active');
    });
});

/*=============================================
	=    		Odometer Active  	       =
=============================================*/
$('.odometer').appear(function (e) {
	var odo = $(".odometer");
	odo.each(function () {
		var countNumber = $(this).attr("data-count");
		$(this).html(countNumber);
	});
});