$(function() {
  $("#rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true
  });
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
      responsive: [
        {
          breakpoint: 1900,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            
          }
        },
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            
          }
        },
        {
          breakpoint: 801,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            
          }
        },
      ]
  });
  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 350,
    from: 30,
    to: 300,
    prefix: "$"
  });

  
  $(".icon-th-list").on("click", function() {
    $('.product__item').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th-large').removeClass('active')
  });

  $('.icon-th-large').on('click',function(){
    $('.product__item').removeClass('list');
    $('.icon-th-large').addClass('active');
    $('.icon-th-list').removeClass('active');
  });
  


  $(".menu__btn").on('click', function(){
    $('.menu__list').slideToggle();
  });
  
  $(".header__btn-menu").on('click', function(){
    $('.header__box').toggleClass('active');
  });

  $('input[type="file"],select').styler();


  $('.product-one__tabs .tab, .settings__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
      $('.product-one__tabs, .settings__tabs').find('.tab-item').removeClass('active-tab').hide();
      $('.product-one__tabs .tabs, .settings__tabs .tabs').find('.tab').removeClass('active');
      $(this).addClass('active');
      $('#'+id).addClass('active-tab').fadeIn();
      return false;
    });


  var mixer = mixitup('.products-two__inner-box');
});
