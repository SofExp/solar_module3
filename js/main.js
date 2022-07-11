$(function () {
  $('.greentarif__content-slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    draggable: false,
    waitForAnimate: false,
    accessibility: true,
    asNavFor:".greentarif__content-tabs-list",
    responsive:[
      {
        breakpoint: 480,
        settings: {
          
        }
      }
    ]
  });

  $('.greentarif__content-tabs-list').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    infinite: false,
    variableWidth: true,
    draggable: false,
    waitForAnimate: false,
    accessibility: true,
    asNavFor:".greentarif__content-slider"
    
  });

  $('.greentarif__content-tabs-item').click(function() {
    // console.log($(this).data('index'))
    var $this = $(this);
    $('.greentarif__content-slider').slick('slickGoTo', $this.data('index'))
  });

  $('.slide__arrows-left').on('click', function(e) {
    e.preventDefault()
    $('.greentarif__content-slider').slick('slickPrev')
    // $('.greentarif__content-tabs-list').slick('slickPrev')

  });

  $('.slide__arrows-right').on('click', function(e) {
    e.preventDefault()
    $('.greentarif__content-slider').slick('slickNext')
    // $('.greentarif__content-tabs-list').slick('slickNext')
  });

  $('.ourclients__slider').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    draggable: false,
    waitForAnimate: false,
    // variableWidth: true

  });

  $('.ourclients__slide-arrows-left').on('click', function(e) {
    e.preventDefault()
    $('.ourclients__slider').slick('slickPrev')
  });

  $('.ourclients__slide-arrows-right').on('click', function(e) {
    e.preventDefault()
    $('.ourclients__slider').slick('slickNext')
  });
})