// const btnMobile = document.getElementById('btn-nav-mobile');

// function toggleMenu() {
//    const nav = document.getElementById('nav');
//    nav.classList.toggle('active');
// }

// btnMobile.addEventListener('click', toggleMenu)


// class MobileNavbar {
//    constructor(mobileMenu, navList, navLinks) {
//       this.mobileMenu = document.querySelector(mobileMenu);
//       this.navList = document.querySelector(navList);
//       this.navLinks = document.querySelector(navLinks);
//       this.activeClass = "active";
//    }
// }

let show = true;

const MENU = document.querySelector(".menu");

MENU.addEventListener("click", () => {

   document.body.style.overflow = show ? "hidden" : "initial";

   MENU.classList.toggle("on", show);
   show = !show
});