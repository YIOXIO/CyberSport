export function moveMarquee() {
    const marqueeList = document.querySelector('.marquee__list');
    const marqueeItems = marqueeList.querySelectorAll('li');

    // Копируем первый элемент и добавляем его в конец списка
    marqueeItems.forEach(item => {
        const clone = item.cloneNode(true);
        marqueeList.appendChild(clone);
    });

    let position = 0;
    const speed = 0.5; // Скорость движения

    function animate() {
        position -= speed;
        marqueeList.style.transform = `translateX(${position}px)`;

        // Если первый элемент полностью ушел за границы экрана, перемещаем его в конец списка
        if (Math.abs(position) >= marqueeList.scrollWidth / 2.5) {
            position = 0; // Сбрасываем позицию
            const firstItem = marqueeList.removeChild(marqueeList.firstChild);
            marqueeList.appendChild(firstItem);
        }

        requestAnimationFrame(animate);
    }

    animate();
}

moveMarquee();