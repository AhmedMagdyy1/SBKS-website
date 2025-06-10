const menuBtn = document.getElementById("mobile-menu-btn");
const sideMenu = document.getElementById("mobile-side-menu");
const closeBtn = document.getElementById("close-mobile-menu");
menuBtn.addEventListener("click", () => {
  sideMenu.classList.remove("translate-x-full");
  sideMenu.classList.add("translate-x-0");
});
closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("translate-x-0");
  sideMenu.classList.add("translate-x-full");
});


// Initialize AOS (Animate On Scroll) library
  AOS.init();