const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let visitors = [
  25, 41, 41, 36, 12, 22, 36, 66, 61, 51, 39, 37, 34, 20, 26, 39, 34, 58, 45,
  54, 54, 39, 39, 32, 48, 38, 32, 25, 17,
];
document.querySelectorAll(".visitors__bar").forEach(function (element, index) {
  let value = visitors[index];
  let percentage = Math.round((value * 100) / 66);
  element.setAttribute(
    "style",
    "width: " + percentage + "%; height: " + percentage + "%;"
  );
  element.setAttribute("aria-label", percentage + "%");
  if (percentage <= 50) {
    element.classList.add("visitors__bar--low");
  } else if (percentage < 65) {
    element.classList.add("visitors__bar--medium");
  }
});

function openForm() {
  document.body.classList.add("form-open");
}
function closeForm() {
  document.body.classList.remove("form-open");
}
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-menu__list");
const navLink = document.querySelectorAll(".main-menu__link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.re;
  move("active");
}
