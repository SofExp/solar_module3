$(function () {
  $('.greentarif__content-slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    draggable: false,
    waitForAnimate: false,
    
    // appendDots: $('.greentarif__content-tabs')
  });

  $('.slide__arrows-left').on('click', function(e) {
    e.preventDefault()
    $('.greentarif__content-slider').slick('slickPrev')
  });

  $('.slide__arrows-right').on('click', function(e) {
    e.preventDefault()
    $('.greentarif__content-slider').slick('slickNext')
  });

  $('.greentarif__content-tabs-link').on('click', function (e){
    e.preventDefault()
    $('.greentarif__content-tabs-link').removeClass('greentarif__content-tabs-link--active')
    $(this).addClass('greentarif__content-tabs-link--active')

  })

  $('.ourclients__slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    draggable: false,
    waitForAnimate: false,

  });

  $('.slide__arrows-left').on('click', function(e) {
    e.preventDefault()
    $('.ourclients__slider').slick('slickPrev')
  });

  $('.slide__arrows-right').on('click', function(e) {
    e.preventDefault()
    $('.ourclients__slider').slick('slickNext')
  });
})