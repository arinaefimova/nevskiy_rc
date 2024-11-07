import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export function initializeSwiper() {
    new Swiper('.swiper', {
        modules: [Navigation],
        slidesPerView: 3,
        spaceBetween: 90,
        observer: true,
        observeParents: true,
        centeredSlides: true,
        loop: true,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
    });
}
