const right = document.querySelector("#right");
const left = document.querySelector("#left");
const page = document.querySelector(".page");

left.addEventListener("click", () => {
  page.classList.add("move");
});
right.addEventListener("click", () => {
  page.classList.remove("move");
});

const responsive_nav = document.querySelector(".responsive-nav");
const navb_btn = document.querySelector(".navb");

navb_btn.addEventListener("click", () => {
  responsive_nav.style.cssText = `right:0 ; z-index:1`;
});
const exit = document.querySelector(".ex");

exit.addEventListener("click", () => {
  responsive_nav.style.cssText = `right:-250px z-index:-1;`;
});
