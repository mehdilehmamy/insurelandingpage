let isNav = false;

const burgerIcon = document.querySelector(".burger");
const image = document.querySelector(".intro-img");
const intro = document.querySelector(".intro");
const patterns = document.querySelectorAll(".patterns");
const hero = document.querySelector(".hero");
const mobileHero = document.querySelector(".mobile-nav");


burgerIcon.addEventListener("click", () => {
    if (!isNav) {
        isNav = true;
        burgerIcon.setAttribute("src", "./images/icon-close.svg");
        image.classList.add("remove-content");
        patterns.forEach((pattern) => {
            pattern.classList.add("invisible");
        });
        intro.classList.add("remove-content");
        mobileHero.classList.add("show-mob-nav");
    } else {
        isNav = false;
        burgerIcon.setAttribute("src", "./images/icon-hamburger.svg");
        image.classList.remove("remove-content");
        patterns.forEach((pattern) => {
            pattern.classList.remove("invisible");
        });
        intro.classList.remove("remove-content");
        mobileHero.classList.remove("show-mob-nav");
    }
});