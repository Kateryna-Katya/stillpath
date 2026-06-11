import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

new Swiper('.gallery-swiper', {
  modules: [Navigation, Autoplay],

  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  slidesPerView: 1.2,
  spaceBetween: 16,

  breakpoints: {
    1440: {
      slidesPerView: 3.2,
      spaceBetween: 24,
      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      },
    },
  },
});