let toggleNavStatus = false;
let getSidebar = document.querySelector(".nav-side");
let getNav = document.querySelector(".nav");
let toggleNav = () => {
  if (toggleNavStatus === false) {
    getSidebar.style.display = "flex";
    getSidebar.style.opacity = "0.85";

    toggleNavStatus = true;
  } else {
    getSidebar.style.display = "none";

    getSidebar.style.opacity = "0";
    toggleNavStatus = false;
  }
};

function collapseOnWidth() {
  console.log(window.innerWidth);
  if (window.innerWidth >= 800) {
    getSidebar.style.display = "none";
    toggleNavStatus = false;
  }
}

window.onresize = collapseOnWidth;

// const checkpoint = 60;

// window.addEventListener("scroll", () => {
//   let currentScroll = window.pageYOffset;
//   let getBrand = document.querySelector(".brand");
//   if (currentScroll >= checkpoint) {
//     getBrand.style.opacity = 1 - currentScroll / (checkpoint * 4);
//   } else {
//     getBrand.style.opacity = 1;
//   }
//   if (currentScroll >= 150) {
//     getBrand.style.display = "none";
//     console.log(getBrand.style.display);
//   } else {
//     getBrand.style.display = "block";
//   }
//   console.log(window.pageYOffset);
// });
