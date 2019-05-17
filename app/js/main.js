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
    click: function (e) {
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
$(function () {
  $('.iconsss').on('click', function () {
    $(this).toggleClass('active');
    $('.menu-list').toggleClass('menu-open');
    $('menu-open').removeClass('menu-list');
  });
});
function matchheight() {
  $(".about__skill-matchheight").matchHeight();
}

//Runs

$(document).ready(function () {
  accordion();
  initHolderBg();
  slider2();
  slider();
  matchheight();
  var mixer = mixitup('.mix-list');
});


var bar = new ProgressBar.Circle(preloader1, {
  color: '#ff0036',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 3,
  easing: 'easeInOut',
  duration: 7400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#ff0036', width: 5 },
  to: { color: '#ff0036', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    

    var value = Math.round(circle.value() * 100);
    if (value === 100) {
      circle.setText(value+"%");
      circle.stop();
    } else {
      circle.setText(value+"%");
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '30px';

bar.animate(0.6);  // Number from 0.0 to 1.0




var bar = new ProgressBar.Circle(preloader2, {
  color: '#ff0036',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 3,
  easing: 'easeInOut',
  duration: 7400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#ff0036', width: 5 },
  to: { color: '#ff0036', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    

    var value = Math.round(circle.value() * 100);
    if (value === 100) {
      circle.setText(value+"%");
      circle.stop();
    } else {
      circle.setText(value+"%");
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '30px';

bar.animate(0.9);  // Number from 0.0 to 1.0





var bar = new ProgressBar.Circle(preloader3, {
  color: '#ff0036',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 3,
  easing: 'easeInOut',
  duration: 7400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#ff0036', width: 5 },
  to: { color: '#ff0036', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    

    var value = Math.round(circle.value() * 100);
    if (value === 100) {
      circle.setText(value+"%");
      circle.stop();
    } else {
      circle.setText(value+"%");
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '30px';

bar.animate(0.7);  // Number from 0.0 to 1.0

var bar = new ProgressBar.Circle(preloader4, {
  color: '#ff0036',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 3,
  easing: 'easeInOut',
  duration: 7400,
  text: {
    autoStyleContainer: true
  },
  from: { color: '#ff0036', width: 5 },
  to: { color: '#ff0036', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);
    

    var value = Math.round(circle.value() * 100);
    if (value === 100) {
      circle.setText(value+"%");
      circle.stop();
    } else {
      circle.setText(value+"%");
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '30px';

bar.animate(0.5);  // Number from 0.0 to 1.0



// var show = true;
// var countbox = ".our-skills__statistics";
// $(window).on("scroll load resize", function () {
//   if (!show) return false;                   // Отменяем показ анимации, если она уже была выполнена
//   var w_top = $(window).scrollTop();        // Количество пикселей на которое была прокручена страница
//   var e_top = $(countbox).offset().top;     // Расстояние от блока со счетчиками до верха всего документа
//   var w_height = $(window).height();        // Высота окна браузера
//   var d_height = $(document).height();      // Высота всего документа
//   var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
//   if (w_top + 200 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
//     $(".spincrement").spincrement({
//       thousandSeparator: "",
//       duration: 10200
//     });
//     show = false;
//   }
// });
