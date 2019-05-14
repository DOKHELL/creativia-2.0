function slider() {
  $('.slider__items').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  });
};
function accordion() {
  'use strict;'
  var allText = $('.about__content .spoiler-block').hide();
  $('.spoiler-trigger').on({
    click: function(e) {
      e.preventDefault();
      allText.slideUp();
      $(this).parent().addClass('visible').siblings().removeClass('visible')
      $(this).next().slideDown();
      return false;
    }
  })
}
function initHolderBg() {
  "use strict";
  $('.slider__items .slider__item .slider__item-img').each(function () {
    var imgHolder = $(this),
      img = imgHolder.find('img'),
      imgSrc = img.attr('src');
    if (!!imgHolder.length && !!img.length && !!imgSrc) {
      imgHolder.css({
        backgroundImage: 'url(' + imgSrc + ')',
        backgroundSize: 'cover',
        backgroundPosition: '50% 50%',
        backgroundRepeat: 'no-repeat',
        height: '100%'
      });
      img.remove();
    }
  });
}
function slider2() {
  $('.our-clints__slider').slick({
    arrows: false,
    dots: true,
  });
};
$(".spincrement").spincrement();

//Runs

$(document).ready(function(){
  accordion();
  initHolderBg();
  slider2();
  slider();
  var mixer = mixitup('.mix-list');
});



var show = true;
var countbox = ".our-skills__statistics";
$(window).on("scroll load resize", function(){
// if(!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
var w_height = $(window).height();        // Высота окна браузера
var d_height = $(document).height();      // Высота всего документа
var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
if(w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height){
$(".spincrement").spincrement({
thousandSeparator: "",
duration: 10200
});
show = false;
}
});
