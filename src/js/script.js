const $ = (selector) => document.querySelector(selector);
const $body = $("body");
const $header = $(".header");
const $btnHamburger = $("#btnHamburger");
const $overlay = $(".overlay");
const $mobileMenu = $(".header__menu");

$btnHamburger.addEventListener("click", function () {
  const isMobileMenuOpen = $header.classList.contains("open");
  $body.classList.toggle("noscroll");
  $header.classList.toggle("open");
  $overlay.classList.toggle("fade-in");
  $overlay.classList.toggle("fade-out", isMobileMenuOpen);
  $mobileMenu.classList.toggle("fade-in");
  $mobileMenu.classList.toggle("fade-out", isMobileMenuOpen);
});
