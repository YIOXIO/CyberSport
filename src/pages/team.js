import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './team.css'


import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const swiper = new Swiper('.swiper', {
  // configure Swiper to use modules
  modules: [Navigation, Pagination],

  direction: 'horizontal',
  loop: false,
  slidesPerView: 1,
  spaceBetween: 10,

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // Pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'fraction'
  },

  breakpoints: {


    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  },
});