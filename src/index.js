import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './js/swiper'
import './index.css'

const burgerMenu = document.querySelector('.burger-menu');
const mobileNav = document.querySelector('.header__list_menu')




// Открывает мобильное меню
burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active');
    mobileNav.classList.toggle('header__list_menu_is-active')
});


// Диамически меняет прозрачно фону в зависимости от размера экрана
function setOpacity() {
    const element = document.querySelector('.collage');
    const tapeDecorationElement = document.querySelector('.decoration-elements-tape')
    const width = window.innerWidth;
    const minWidth = 320;
    const maxWidth = 1200;
    const minOpacity = 0.15;
    const maxOpacity = 1;
    const opacity = minOpacity + (maxOpacity - minOpacity) * ((width - minWidth) / (maxWidth - minWidth));
    element.style.opacity = Math.min(Math.max(opacity, minOpacity), maxOpacity);
    tapeDecorationElement.style.opacity = Math.min(Math.max(opacity, minOpacity), maxOpacity);
}

window.addEventListener('load', setOpacity);
window.addEventListener('resize', setOpacity);



const marqueeList = document.querySelector('.marquee__list');
const marqueeItems = marqueeList.querySelectorAll('li');

// Копируем первый элемент и добавляем его в конец списка
marqueeItems.forEach(item => {
    const clone = item.cloneNode(true);
    marqueeList.appendChild(clone);
});

let position = 0;
const speed = .5; // Скорость движения

function moveMarquee() {
    position -= speed;
    marqueeList.style.transform = `translateX(${position}px)`;

    // Если первый элемент полностью ушел за границы экрана, перемещаем его в конец списка
    if (Math.abs(position) >= marqueeList.scrollWidth / 2.5) {
        position = 0; // Сбрасываем позицию
        const firstItem = marqueeList.removeChild(marqueeList.firstChild);
        marqueeList.appendChild(firstItem);
    }

    requestAnimationFrame(moveMarquee);
}

moveMarquee();