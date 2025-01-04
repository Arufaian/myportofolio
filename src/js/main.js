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

// filter galerry

// Project filtering
const filterButtons = document.querySelectorAll(".filter-btn");
const projectItems = document.querySelectorAll("[data-category]");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => {
      btn.classList.remove(
        "active",
        "bg-indigo-500",
        "text-white",
        "shadow-md",
      );
      btn.classList.add("bg-slate-300", "text-slate-800", "shadow-sm");
    });

    // Add active classes to clicked button
    button.classList.remove("bg-slate-300", "text-slate-800", "shadow-sm");
    button.classList.add("active", "bg-indigo-500", "text-white", "shadow-md");

    const filterValue = button.getAttribute("data-filter");
    console.log(filterValue);

    projectItems.forEach((item) => {
      if (
        filterValue === "all" ||
        item.getAttribute("data-category") === filterValue
      ) {
        item.style.display = "block";
        item.style.opacity = "1";
      } else {
        item.style.display = "none";
        item.style.opacity = "0";
      }
    });
  });
});
