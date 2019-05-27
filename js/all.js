$(document).ready(function() {
  // 導覽列按鈕
  $('.js-m-navbar__button').on('click', function(e) {
    $('.js-m-navbar__button').toggleClass('is-active')
    $('.js-m-navbar__list').toggleClass('is-activ')
    e.preventDefault()
  })
  // 導覽列按鈕 end

  // 固定導覽列
  const $setFixed = $('.js-m-navbar')
  let menuTop = $setFixed.offset().top

  $(window).on('load scroll resize', function() {
    if ($(window).scrollTop() > menuTop) {
      $setFixed.addClass('is-fix-top')
    } else {
      $setFixed.removeClass('is-fix-top')
    }
  })
  // 固定導覽列 end

  // 至頂按鈕
  const $backtopBtn = $('.js-e-backtop-btn')
  $backtopBtn.hide()
  $backtopBtn.on('click', function() {
    $('html,body').animate({ scrollTop: 0 }, 'slow')
    return false
  })
  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $backtopBtn.show()
    } else {
      $backtopBtn.hide()
    }
  })
  // 至頂按鈕 end

  // invoice radios
  $('#paper-invoice-address').hide()
  $('#electronic-invoice').on('click', function(e) {
    $('#electronic-invoice-email').show()
    $('#paper-invoice-address').hide()
  })
  $('#paper-invoice').on('click', function(e) {
    $('#electronic-invoice-email').hide()
    $('#paper-invoice-address').show()
  })
  // invoice end
})
