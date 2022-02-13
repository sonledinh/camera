new WOW().init();


$(document).ready(function() {
  var $slider = $('.slide-blog');
  var $progressBar = $('.progress');
  var $progressBarLabel = $( '.slider__label' );
  
  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
    var calc = ( (nextSlide) / (slick.slideCount-3) ) * 100;
    
    $progressBar
      .css('background-size', calc + '% 100%')
      .attr('aria-valuenow', calc );
    
    $progressBarLabel.text( calc + '% completed' );
  });
  
  $slider.slick({
    autoplay:false,
    arrow: false,
    dots: false,
    infinite: false,
    slidesToShow: 3.3,
    slidesToScroll: 1, 
    prevArrow: '<a href="javascript:void(0)" class="arr-left"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.3337 20H6.66699" stroke="#100A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M16.667 30L6.66699 20L16.667 10" stroke="#100A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>',
    nextArrow: '<a href="javascript:void(0)" class="arr-right"><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.66699 20H33.3337" stroke="#100A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M23.333 10L33.333 20L23.333 30" stroke="#100A0A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></a>',
  });  
});

$('.item-why').hover(function() {
  $(this).find('.capp-why ul').slideToggle(200);
});

$('.slider-for').slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,  
    infinite: false,
    fade: true,   
    asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
    autoplay:true, 
    arrow:false,
    slidesToShow: 4.5,
    slidesToScroll: 1,
    infinite: false,
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    prevArrow: '', 
    nextArrow: '', 
    autoplaySpeed: 4500,
});
