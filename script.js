const menu = document.getElementById("menu-cos");

Array.from(document.getElementsByClassName("menu-item-cos")).forEach(
  (item, index) => {
    item.onmouseover = () => {
      menu.dataset.activeIndex = index;
      console.log(index);
    };
  }
);

const elementArray = document.getElementsByClassName("menu-item-cos");

elementArray.forEach((item, index) => {
  item.onmouseover = () => {
    menu.dataset.activeIndex = index;
    console.log(index);
  };
});

const open_btn = document.querySelector(".open-popup-btn");
const close_btn = document.querySelector(".close-btn");
const popup = document.querySelector(".popup");
const main_popup = document.querySelector(".main-popup");

open_btn.addEventListener("click", () => {
  popup.style.display = "flex";
  margin_popup.style.cssText =
    "animation:slide-in .5s ease; animation-fill-mode: forwards;";
});

close_btn.addEventListener("click", () => {
  margin_popup.style.cssText =
    "animation:slide-out .5s ease; animation-fill-mode: forwards;";
  setTimeout(() => {
    popup.style.display = "none";
  }, 500);
});

window.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".popup-overlay")) {
    margin_popup.style.cssText =
      "animation:slide-out .5s ease; animation-fill-mode: forwards;";
    setTimeout(() => {
      popup.style.display = "none";
    }, 500);
  }
});
