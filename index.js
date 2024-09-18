const responsive_nav = document.querySelector(".responsive-nav");
const navb_btn = document.querySelector(".navb");

navb_btn.addEventListener("click", () => {
  responsive_nav.style.cssText = `right:0 ; `;
});

const exit = document.querySelector(".nav-exit");

exit.addEventListener("click", () => {
  responsive_nav.style.cssText = `right:-250px ; `;
});

const productContainers = [...document.querySelectorAll(".page-container")];
const nxtBtn = [...document.querySelectorAll("#right")];
const preBtn = [...document.querySelectorAll("#left")];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });

  preBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });
});
