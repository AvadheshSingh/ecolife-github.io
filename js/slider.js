$('.hero-slider').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
$('.best-sellers-card').owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,
    nav: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        }
        ,
        1000: {
            items: 2
        },
        1200:{
            items:2
        }
    }
})
$(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$(".owl-next").html('<i class="fa fa-chevron-right"></i>');
$('.best-sellers-card1').owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,
    nav:false,
    margin: 10,
    responsive: {
        0: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        },
        1200:{
            items:2
        }
    }
})

$('.feature-products-card').owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,
    nav: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        700: {
            items: 1
        },
        1000: {
            items: 1
        },
        1200:{
            items: 2
        }
    }
})
$(".owl-prev").html('<i class="fa fa-chevron-left"></i>');
$(".owl-next").html('<i class="fa fa-chevron-right"></i>');


$('.feature-products-card1').owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,
    nav: false,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        700: {
            items: 1
        },
        1000: {
            items: 1
        },
        1200:{
            items: 2
        }
    }
    
})


$('.user-list-card').owlCarousel({
    loop: true,
    autoplay: true,
    dots: false,
    nav: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
      
        1000: {
            items: 1
        },
        
        1200:{
            items: 2
        }
    
    }
})
