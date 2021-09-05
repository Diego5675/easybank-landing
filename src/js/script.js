const $ = (selector) => document.querySelector(selector);
const $btnHamburger = $("#btnHamburger");
const $header = $(".header");
const $overlay = $(".overlay");

$btnHamburger.addEventListener("click", function () {
  if ($header.classList.contains("open")) {
    $header.classList.remove("open");
    $overlay.classList.remove("fade-in");
    $overlay.classList.add("fade-out");
  } else {
    $header.classList.add("open");
    $overlay.classList.remove("fade-out");
    $overlay.classList.add("fade-in");
  }
});
