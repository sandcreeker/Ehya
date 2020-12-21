$(document).ready(function() {
 var reviewsSlider = new Swiper('.reviews-slider', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 7000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
  on: {
    init: function () {
      this.el.addEventListener('mouseenter', () => {
        this.autoplay.stop();
      });

      this.el.addEventListener('mouseleave', () => {
        this.autoplay.start();
      });
    },
  }
});

var mySwiper = new Swiper('.history-slider', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  allowTouchMove: false,
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperPrev = document.getElementById('swiperPrev');
const swiperNext = document.getElementById('swiperNext');

swiperPrev.addEventListener('click', () => {
  mySwiper.slidePrev();
});
swiperNext.addEventListener('click', () => {
  mySwiper.slideNext();
});
  var tabsItem = $('.trands-text-tabs__item');
  var contentItem = $('.trands-wrap');

  tabsItem.on('click', function(event) {
    var activeContent = $(this).attr("data-target");
    tabsItem.removeClass('trands-text-tabs__item__active');
    contentItem.removeClass('trands-wrap__active');
    $(activeContent).addClass('trands-wrap__active');
    $(this).addClass("trands-text-tabs__item__active");
  });
  var nextButton = $('.button-next');
  var prevButton = $('.button-prev');
    nextButton.on('click', nextButtonActive);
    prevButton.on('click', prevButtonActive);

    function nextButtonActive(){
      var removeNext = $('.button-next');
      var addPrev = $('.button-prev');
        removeNext.removeClass('swiper-navigation__button__icon__active');
        addPrev.addClass('swiper-navigation__button__icon__active');
    }

    function prevButtonActive() {
      var removePrev = $('.button-prev');
      var addNext = $('.button-next');
      removePrev.removeClass('swiper-navigation__button__icon__active');
      addNext.addClass('swiper-navigation__button__icon__active');
    }
  // colorButton.on('click', function() {
  //   colorButton.toggleClass('swiper-navigation__button__icon__active');
  // })
   
  var modalButton = $('.menu-button__mobile');
  var closeModalButton = $('.navbar-modal-image__icon');
  var closeOverlay = $ ('.modal-overlay');
    modalButton.on('click', openModal);
    closeModalButton.on('click', closeModal);
    closeOverlay.on('click', closeModalOverlay);
    
    function openModal(){
      var modalOverlay = $('.modal-overlay');
      var modalDialog = $('.navbar-modal');
      modalOverlay.addClass('modal-overlay__visible');
      modalDialog.addClass('navbar-modal-on');
    }

    function closeModal(event) {
      event.preventDefault();
      var modalOverlay = $('.modal-overlay');
      var modalDialog = $('.navbar-modal');
      modalOverlay.removeClass('modal-overlay__visible');
      modalDialog.removeClass('navbar-modal-on');
    }

    function closeModalOverlay() {
      var modalOverlay = $('.modal-overlay');
      var modalDialog = $('.navbar-modal');
      modalOverlay.removeClass('modal-overlay__visible');
      modalDialog.removeClass('navbar-modal-on');
    }
   
  
    var enterButton = $('.navbar__button');
    var closeEnterButton = $('.feedback-modal-image__icon');
    var closeEnterOverlay = $('.feedback-overlay');
      enterButton.on('click', openFeedback);
      closeEnterButton.on('click', closeFeedback);
      closeEnterOverlay.on('click', closeFeedbackOverlay);
    
      function openFeedback () {
        var feedbackOverlay = $('.feedback-overlay');
        var feedbackDialog = $('.feedback');
        var modalOverlay = $('.modal-overlay');
        var modalDialog = $('.navbar-modal');
        feedbackOverlay.addClass('feedback-overlay__visible');
        feedbackDialog.addClass('feedback__visible');
        modalOverlay.removeClass('modal-overlay__visible');
        modalDialog.removeClass('navbar-modal-on');
      }
      function closeFeedback(event) {
        event.preventDefault();
        var feedbackOverlay = $('.feedback-overlay');
        var feedbackDialog = $('.feedback');
        feedbackOverlay.removeClass('feedback-overlay__visible');
        feedbackDialog.removeClass('feedback__visible');
      }
      function closeFeedbackOverlay() {
        var feedbackOverlay = $('.feedback-overlay');
        var feedbackDialog = $('.feedback');
        feedbackOverlay.removeClass('feedback-overlay__visible');
        feedbackDialog.removeClass('feedback__visible');
      }
    $(document).keydown(function(even){
      if(event.which == 27) {
        $('.feedback-modal-image__icon')[0].click();
      }
    });
    $('.form').each(function(){
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Пожалуйста, укажите ваше имя"
        },
      email: {
        required: "Нам нужен ваш email",
        email: "Ваш email должен быть в формате name@domain.com",
        },
      phone: {
        required: "Пожалуйста, укажите ваш телефон",
        minlength: "Введите правильный номер",
        },
      subscribe: {
        required: "Нам нужен ваш email, чтобы с вами связаться",
        subscribe: "Ваш email должен быть в формате name@domain.com",
        },
      },
    });
  });
});
  var newsAnchor = $('.news-anchor');
  var trandsAnchor = $('.trands-anchor');
  var feedbackAnchor = $('.reviews-anchor');
  var contactsAnchor = $('.footer-anchor');
  var mainAnchor = $('.main-anchor');
  newsAnchor.on('click', closeModal);
  trandsAnchor.on('click', closeModal);
  feedbackAnchor.on('click', closeModal);
  contactsAnchor.on('click', closeModal);
  mainAnchor.on('click', closeModal);
   
  function closeModal(event) {
    setTimeout(function() {
      event.preventDefault();
      var modalOverlay = $('.modal-overlay');
      var modalDialog = $('.navbar-modal');
      modalOverlay.removeClass('modal-overlay__visible');
      modalDialog.removeClass('navbar-modal-on');
    }, 1);
  }
$('.phone').mask('+7 (000) 000 00 00');
$(function(){
    $('a[href*=news]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);
                return false;
            }
        }
    });
});
$(function(){
    $('a[href*=trands]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);
                return false;
            }
        }
    });
});
$(function(){
    $('a[href*=feedback]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);
                return false;
            }
        }
    });
});
$(function(){
    $('a[href*=contacts]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);
                return false;
            }
        }
    });
});
$(function(){
    $('a[href*=top]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);
                return false;
            }
        }
    });
});
$(function(){
    $('a[href*=main]').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({scrollTop: targetOffset}, 500);
                return false;
            }
        }
    });
});
