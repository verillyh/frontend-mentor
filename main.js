function toggleMenu() {
    const navMenu = document.querySelector(".nav");
    const navMobileWrapper = document.querySelector(".nav-mobile-wrapper");
    navMenu.classList.toggle("nav--mobile");    
    navMobileWrapper.classList.toggle("display-iblock");
}

// When website is loaded... 
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body; 
    const navButton = document.querySelector(".header__icon-menu");
    const closeNav = document.querySelector(".nav--mobile__close-menu")

    navButton.addEventListener("click", toggleMenu);
    closeNav.addEventListener("click", toggleMenu);
})