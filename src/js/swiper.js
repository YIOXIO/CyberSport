import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function createSwiper(selector, options) {
    return new Swiper(selector, {
        modules: [Navigation, Pagination],
        direction: 'horizontal',
        loop: false,
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction'
        },
        ...options, // Расширяем базовые настройки переданными опциями
    });
}