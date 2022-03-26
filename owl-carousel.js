$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:true,
    center:true,
    responsive:{
        0:{
            items:2
        },
        1291:{
            items:3
        },
        1770:{
            items:3
        }
    }
})


var owl = $('.owl-carousel');
owl.owlCarousel();
$('.btn-card-right').click(function() {
    owl.trigger('next.owl.carousel');
})
$('.btn-card-left').click(function() {
    owl.trigger('prev.owl.carousel', [300]);
})