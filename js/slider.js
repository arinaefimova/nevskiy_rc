import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export function initializeSwiper() {
    new Swiper('.swiper', {
        modules: [Navigation],
        observer: true,
        observeParents: true,
        loop: true,
        navigation: {
            nextEl: ".next",
            prevEl: ".prev",
        },
      
        breakpoints: {
            480: { 
                slidesPerView: 1,
                spaceBetween: 30,
            },
            768: { 
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 90,
            },
        },
    });
}
