// $('.slider-for').slick({
//     autoplay: false,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.slider-nav',
//     infinite: false,
// });
// $('.slider-nav').slick({
//     autoplay:false,
//     arrow:false,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     asNavFor: '.slider-for', 
//     dots: false,
//     focusOnSelect: true,
//     prevArrow: '', 
//     nextArrow: '', 
//     infinite: false,
// });

// $('.slide-blog').slick({
//     autoplay:false,
//     arrow: false,
//     dots: false,
//     infinite: false,
//     slidesToShow: 3.3,
//     slidesToScroll: 1, 
//     prevArrow: '', 
//     nextArrow: '',
// }); 

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


var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 56,
  slidesPerView: 'auto',
  // freeMode: true, 
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  speed: 400,
  autoplayDisableOnInteraction:true,
  autoplay: 
    {
      delay: 2000,
    },

});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 0,
  speed: 400,
  autoplayDisableOnInteraction:true,
  autoplay: 
    {
      delay: 2000,
    },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  }
});
 
$('.swiper-container').on('mouseenter', function(e){
  console.log('stop autoplay');
  galleryThumbs.startAutoplay();
})
$('.swiper-container').on('mouseleave', function(e){
  console.log('start autoplay');
  galleryThumbs.startAutoplay();
})
$('.swiper-container').on('mouseenter', function(e){
  console.log('stop autoplay');
  galleryTop.startAutoplay();
})
$('.swiper-container').on('mouseleave', function(e){
  console.log('start autoplay');
  galleryTop.startAutoplay();
})


$(document).ready(function(){
  
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).click();
    // $("#"+tab_id).addClass('current');
  })

})


$('.slider-for').slick({
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true, 
    asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
    autoplay:true,
    arrow:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        }
    ],
    asNavFor: '.slider-for',
    dots: false,
    focusOnSelect: true,
    prevArrow: '', 
    nextArrow: '', 
});