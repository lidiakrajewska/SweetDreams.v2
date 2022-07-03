const nav = document.querySelector(".nav-links");
const nav_links = document.querySelectorAll(".nav-links__item");
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("toggle");
  nav.classList.toggle("nav-open");
  document.body.classList.toggle("no-scrolling");
});

nav_links.forEach((nav_link) => {
  nav_link.addEventListener("click", () => {
    nav.classList.remove("nav-open");
    burger.classList.remove("toggle");
    document.body.classList.remove("no-scrolling");
  });
});
