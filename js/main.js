import { initMap } from "./map";
import { initializeSwiper } from "./slider";
import { validateForm } from "./validation";

document.addEventListener("DOMContentLoaded", () => {
    initializeSwiper();
    initMap();
    validateForm("contactForm");

});
 
