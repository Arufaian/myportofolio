import "../style/index.css";

window.onscroll = function () {
  const header = document.querySelector("header");
  const navSticky = header.offsetTop;

  if (window.pageYOffset > navSticky) {
    header.classList.add("navbar-static");
  } else {
    header.classList.remove("navbar-static");
  }
};

// nav menu

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
