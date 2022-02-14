$(function () {

  $('.steps-tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.steps-tabs__top-item').removeClass('steps-tabs__top-item--active');
    $(this).addClass('steps-tabs__top-item--active');

    $('.steps-tabs__content-item').removeClass('steps-tabs__content-item--active');
    $($(this).attr('href')).addClass('steps-tabs__content-item--active');
  });

  $('.slider__items').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
      focusOnSelect: true
  });

});