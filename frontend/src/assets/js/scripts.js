let show = true;

const MENU = document.querySelector(".navbar__menu");

MENU.addEventListener("click", () => {

   document.body.style.overflow = show ? "hidden" : "initial";

   MENU.classList.toggle("on", show);
   show = !show
});