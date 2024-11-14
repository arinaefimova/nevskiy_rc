import { initMap } from "./map";
import { initializeSwiper } from "./slider";
import { validateForm } from "./validation";

const iconMenu = document.querySelector('.icon-menu');
if (iconMenu) {
    const menuBody = document.querySelector('.menu__body');
    iconMenu.addEventListener("click", function (e) {
        document.body.classList.toggle('lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
document.addEventListener("DOMContentLoaded", () => {
    initializeSwiper();
    initMap();
    validateForm("contactForm");

});
 
