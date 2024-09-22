const responsive_nav = document.querySelector(".responsive-nav");
const navb_btn = document.querySelector(".navb");

navb_btn.addEventListener("click", () => {
  responsive_nav.style.cssText = `right:0 ; `;
});

const exit = document.querySelector(".nav-exit");

exit.addEventListener("click", () => {
  responsive_nav.style.cssText = `right:-250px ; `;
});

// ---------- section scroll -------------------------------------
const productContainers = [...document.querySelectorAll(".page")];
const nxtBtn = [...document.querySelectorAll("#nxt-btn")];
const preBtn = [...document.querySelectorAll("#pre-btn")];

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

// ----------up botton

let mybtn = document.querySelector("button");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    mybtn.style.display = "block";
  } else if (window.scrollY <= 600) {
    mybtn.style.display = "none";
  }
};

mybtn.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
