
// let navber= document.querySelector("nav");
// window.addEventListener("scroll", function(){
//   let scroll_valu=window.scrollY;
//   if (scroll_valu > 150) {
//     navber.classList.add("nav_stiky");
//     navber.style.position= "sticky";
//     navber.style.background= "white";
  
//   } else {
//     navber.classList.remove("nav_stiky");
//     navber.style.position.remove= "sticky";
//     navber.style.background.remove= "white";
//   }
// })


$(function(){
    // BANNER SLIDER PART START 
    
    // BANNER SLIDER PART END

    // CLIENT PART START 
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
      autoplay: true,
      autoplaySpeed: 1000,
    });
    // CLIENT PART END 


    // APP SLIDER PART START 
      $('.app_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots:true,
        arrows:false,
        focusOnSelect:true,
        centerMode: true,
        centerPadding: '0px',
      });
    // APP SLIDER PART END 
})