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

document.querySelectorAll('.opacity').forEach(element => {
    import('./js/opacity.js').then(({ setOpacity }) => {
        setOpacity(element);

        // Добавляем обработчики событий для каждого элемента
        window.addEventListener('load', () => setOpacity(element));
        window.addEventListener('resize', () => setOpacity(element));
    });
});

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


  


// import('./js/ymap.js').then(({ initMap }) => {
//     initMap();
// });