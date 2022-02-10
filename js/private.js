$('.slider-for').slick({
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
    autoplay:false,
    arrow:false,
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for', 
    dots: false,
    focusOnSelect: true,
    prevArrow: '', 
    nextArrow: '', 
});

$('.slide-blog').slick({
    autoplay:true,
    arrow: false,
    dots: true,
    slidesToShow: 3.1,
    slidesToScroll: 1, 
    prevArrow: '', 
    nextArrow: '',
}); 


 