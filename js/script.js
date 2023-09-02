$(document).ready(function(){

    $('.calender-slider').slick({
        arrows: true,
        prevArrow: ".right-icon-des",
        nextArrow:".left-icon-des"
    });

    $('.ntg').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow: ".say-icon-2",
        nextArrow:".say-icon-1",
        responsive: [
            
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 575.98,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ]
      });


})