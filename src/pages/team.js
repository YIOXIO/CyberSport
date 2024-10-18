import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './team.css'

if (document.querySelector('.swiper-team')) {
  import('../js/swiper.js').then(({ createSwiper }) => {
      createSwiper('.swiper', {
        breakpoints: {
          400: {
            slidesPerView: 2,
            spaceBetween: 10,
          },          
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
  });
}
