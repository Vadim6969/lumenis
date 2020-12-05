import './vendor/focus-visible.min.js';
import './_vars';
import './select';

const mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  autoplay: true,
  slidersPerView: 3,
  spaceBetween: 1,
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
  },
  navigation: {
    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

})
