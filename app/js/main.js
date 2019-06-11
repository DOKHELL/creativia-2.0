function slider() {
  $('.slider__items').slick({
    arrows: true,
    dots: true,
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
  });
};

function accordion() {
  $('.spoiler-trigger').click(function (e) {
    e.preventDefault();
    $(this).next(".spoiler-block").slideToggle();
    $(this).closest("div").siblings().find('.spoiler-block').slideUp();
    $(this).parent().toggleClass('visible').siblings().removeClass('visible');
  });
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

function matchheight2() {
  $(".matchheight-p").matchHeight();
}
function progressBar1() {
  var bar = new ProgressBar.Circle(preloader1, {
    color: '#ff0036',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 2,
    trailWidth: 2,
    starting_position: 1,
    easing: 'easeInOut',
    duration: 9400,
    text: {
      autoStyleContainer: true
    },
    from: {
      color: '#ff0036',
      width: 2
    },
    to: {
      color: '#ff0036',
      width: 2
    },
    // Set default step function for all animate calls
    step: function step(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);

      if (value === 100) {
        circle.setText(value);
      } else {
        circle.setText(value);
      }
    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '45px';
  bar.animate(0.9); // Number from 0.0 to 1.0
};

function progressBar2() {
  var bar = new ProgressBar.Circle(preloader2, {
    color: '#ff0036',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 2,
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 7400,
    text: {
      autoStyleContainer: true
    },
    from: {
      color: '#ff0036',
      width: 2
    },
    to: {
      color: '#ff0036',
      width: 2
    },
    // Set default step function for all animate calls
    step: function step(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);

      if (value === 100) {
        circle.setText(value);
      } else {
        circle.setText(value);
      }
    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '45px';
  bar.animate(0.4); // Number from 0.0 to 1.0
};

function progressBar3() {
  var bar = new ProgressBar.Circle(preloader3, {
    color: '#ff0036',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 2,
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 7400,
    text: {
      autoStyleContainer: true
    },
    from: {
      color: '#ff0036',
      width: 2
    },
    to: {
      color: '#ff0036',
      width: 2
    },
    // Set default step function for all animate calls
    step: function step(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);

      if (value === 100) {
        circle.setText(value );
      } else {
        circle.setText(value );
      }
    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '45px';
  bar.animate(0.6); // Number from 0.0 to 1.0
};

function progressBar4() {
  var bar = new ProgressBar.Circle(preloader4, {
    color: '#ff0036',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 2,
    trailWidth: 2,
    easing: 'easeInOut',
    duration: 7400,
    text: {
      autoStyleContainer: true
    },
    from: {
      color: '#ff0036',
      width: 2
    },
    to: {
      color: '#ff0036',
      width: 2
    },
    // Set default step function for all animate calls
    step: function step(state, circle) {
      circle.path.setAttribute('stroke', state.color);
      circle.path.setAttribute('stroke-width', state.width);
      var value = Math.round(circle.value() * 100);

      if (value === 100) {
        circle.setText(value );
      } else {
        circle.setText(value );
      }
    }
  });
  bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
  bar.text.style.fontSize = '45px';
  bar.animate(0.95); // Number from 0.0 to 1.0
};
function inView() {
  var el = document.querySelector('.our-skills')
  var inview = InView(el, function(isInView, data) {
    if (isInView) {
      progressBar1();
     progressBar2();
     progressBar3();
     progressBar4();
      this.destroy()
    }
  })
}


//Runs
$(document).ready(function () {
  accordion();
  initHolderBg();
  slider2();
  slider();
  matchheight();
  matchheight2();
  inView();
  var mixer = mixitup('.mix-list');
});

if (!!navigator.userAgent.match(/Trident\/7\./)){
  $(document).ready(function () {
    progressBar1()
    progressBar2()
    progressBar3()
    progressBar4()
  });
  }