$(function() {
  $(".featured__inner").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow:
      '<button class="slick-arrow slick-prev"><span class="icon-angle-right"></span></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><span class="icon-angle-left"></span></button>',
  });
  $(".slider-followers__inner").slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    adaptiveHeight: true,
    prevArrow:
      '<button class="slick-arrow slick-prev"><span class="icon-angle-right"></span></button>',
    nextArrow:
      '<button class="slick-arrow slick-next"><span class="icon-angle-left"></span></button>',
  });


  var mixer = mixitup('.products-two__inner-box');
});
