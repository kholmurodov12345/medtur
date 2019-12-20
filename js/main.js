$(document).ready(function () {

$('.carousel1').owlCarousel({
    loop:true,
    nav:true,
     items:4,
    autoplay:true,
    autoplayTimeout:3000,
})
    $(".next").click(function() {
       $('.carousel1').trigger('next.owl.carousel');
    });

    $(".prev").click(function() {
       $('.carousel1').trigger('prev.owl.carousel');
    });
$('.carousel2').owlCarousel({
    loop:true,
    nav:false,
     items:2,
     dots:false,
    autoplay:true,
    autoplayTimeout:5000,
})
    $(".next").click(function() {
       $('.carousel2').trigger('next.owl.carousel');
    });

    $(".prev").click(function() {
       $('.carousel2').trigger('prev.owl.carousel');
    });
    $('.carousel3').owlCarousel({
    loop:true,
    nav:false ,
     items:2,
     dots:false,
    autoplay:true,
    autoplayTimeout:5000
});
    $(".nextt").click(function() {
       $('.carousel3').trigger('next.owl.carousel');
    });

    $(".prevt").click(function() {
       $('.carousel3').trigger('prev.owl.carousel');
    });

})