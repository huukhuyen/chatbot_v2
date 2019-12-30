function checkPositionSlide() {
  var heightSlideItem = $('.slick-current img').height();
  $('.slick-next, .slick-prev').css('top', `calc(${heightSlideItem}px / 2 )`);
}

setTimeout(function() {
  checkPositionSlide();
}, 500);

setTimeout(function() {
  $('#iframe-chat').fadeIn();
  $('#iframe-chat').fadeIn();
  $('#iframe-chat, .toggle-icon__number').removeClass('d-none');
}, 4000);

$('.js-chat-faq .chat-control__item').on('click', function() {
  $('.js-chat-faq .chat-control__item').removeClass('active');
  $(this).addClass('active');
  var idTab = $(this).data('chatbox');
  $('.chat-box-main')
    .stop()
    .slideUp('100');
  $(`#${idTab}`)
    .stop()
    .slideDown('100');
});

$('#faq-step-01 .chat-faq__item').on('click', function() {
  $('#faq-step-01').hide();
  $('#faq-step-02').show();
});

$('#faq-step-02 .chat-faq__item').on('click', function() {
  $('#faq-step-02').hide();
  $('#faq-step-03').show();
});

var numberStep = 0;
$('.js-btn-back').on('click', function() {
  if (numberStep > 0) {
    $(`#faq-step-0${numberStep}`).show();
    $(`#faq-step-0${numberStep + 1}, #faq-step-0${numberStep + 2}`).hide();
    numberStep = numberStep - 1;
  }
});

$('.chat-faq__item').click(function() {
  numberStep = numberStep + 1;
});

// Next or prev chose time
$('.js-prev-hour').click(function() {
  $('.time-control__icon').removeClass('active');
  $('.js-next-hour').addClass('active');
  $('.first-chose-time').addClass('active');
  $('.last-chose-time').removeClass('active');
});

$('.js-next-hour').click(function() {
  $('.time-control__icon').removeClass('active');
  $('.js-prev-hour').addClass('active');
  $('.first-chose-time').removeClass('active');
  $('.last-chose-time').addClass('active');
});

$('.slick-arrow').click(function() {
  checkPositionSlide();
});

// Range value
$('.js-range').on('input change', function() {
  var valRange = $('.js-range').val();
  $('.range__value').text(valRange);
});

$('.js-reaction .reaction__item').on('click', function() {
  $('.reaction__item').removeClass('active');
  $(this).addClass('active');
  var nameReaction = $(this).data('reaction');
  $('.reaction__text').text(nameReaction);
});

// Auto complete input
var options = {
  data: ['blue', 'green', 'pink', 'red', 'yellow'],
  list: {
    showAnimation: {
      type: 'slide',
      time: 300,
      callback: function() {}
    },

    hideAnimation: {
      type: 'slide',
      time: 300,
      callback: function() {}
    }
  }
};

$('.js-textarea').easyAutocomplete(options);

// Show slider
$('.js-button-chat').click(function() {
  $('.chat-box--option').slideUp();
  $('.chat-box--main').slideDown();

  $('.slider-image').slick({
    arrows: true,
    speed: 500,
    fade: true
  });

  checkPositionSlide();
});

// Implement with Iframe
$('.js-chat-intro').click(function() {
  $('.chat-box--welcome').hide();
  $('.chat-box--option').show();
  $('.toggle-icon', window.parent.document).addClass('active js-close-chat');
  $('.toggle-icon', window.parent.document).removeClass('glow');
  $('#iframe-chat', window.parent.document).addClass('chat-active');
});

$('.toggle-icon').click(function() {
  $('#iframe-chat').toggleClass('chat-active');
  $('#iframe-chat')
    .contents()
    .find('.chat-box')
    .hide();
  $('#iframe-chat')
    .contents()
    .find('.chat-box--option')
    .show();
    setTimeout(function() {
      $('.toggle-icon').toggleClass('active js-close-chat glow');
    }, 100)
});

$(document).on('click', '.js-close-chat', function() {
  $('#iframe-chat')
    .contents()
    .find('.chat-box')
    .hide();
  $('#iframe-chat')
    .contents()
    .find('.chat-box--welcome')
    .show();
});

// $('.toggle-icon').click(function() {
//   $(this).addClass('active js-close-chat');
//   $('.chat-box--welcome').hide();
//   $('.chat-box--option').show();
//   $('#iframe-chat').addClass('chat-active');
// })

// toggle calendar book
$('.js-book-calendar').on('click', function() {
  $('.calendar')
    .stop()
    .toggleClass('active');
});

$('.js-calendar-close, .js-calendar-confirm').click(function() {
  $('.calendar')
    .stop()
    .toggleClass('active');
});

$('.date').flatpickr({
  inline: true
});

$('.month-mask').on('click', function() {
  $('.month').addClass('active');
});

$('.month__item').on('click', function() {
  var valueHour = $(this).data('month');
  $('.flatpickr-monthDropdown-months').val(valueHour);
  $('.month').toggleClass('active');
});

$('.flatpickr-monthDropdown-months').wrap('<div class="month-wrap"></div>');

$('.month-mask').appendTo('.month-wrap');
