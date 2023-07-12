const menuTogle = document.querySelector("nav .hamburger_menu");
const nav = document.querySelector(".link");

menuTogle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
