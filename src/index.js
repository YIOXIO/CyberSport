import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './index.css';


const burgerMenu = document.querySelector('.burger-menu');
const mobileNav = document.querySelector('.header__list_menu');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    mobileNav.classList.toggle('header__list_menu_is-active');
});

if (document.querySelector('.opacity')) {
    import('./js/opacity.js').then(({ setOpacity }) => {
        setOpacity();
    });
}

if (document.querySelector('.marquee__list')){
    import('./js/marquee.js').then(({ moveMarquee }) => {
        moveMarquee();
    });   
}
if (document.querySelector('.swiper-main')) {
    import('./js/swiper.js').then(({ createSwiper }) => {
        createSwiper('.swiper', {
            breakpoints: {
                640: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 10,
                },
            },
        });
    });
}


  


import('./js/ymap.js').then(({ initMap }) => {
    initMap();
});