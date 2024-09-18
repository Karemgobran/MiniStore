const responsive_nav = document.querySelector(".responsive-nav");
const navb_btn = document.querySelector(".navb");

navb_btn.addEventListener("click", () => {
  responsive_nav.style.cssText = `right:0 ; `;
});

const exit = document.querySelector(".nav-exit");

exit.addEventListener("click", () => {
  responsive_nav.style.cssText = `right:-250px ; `;
});
