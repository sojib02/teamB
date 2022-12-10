$(function(){
    $('.single-block-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.single-block-media'
      });
      $('.single-block-media').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.single-block-text',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        arrows: false,
        autoplay: true

      });
      
})