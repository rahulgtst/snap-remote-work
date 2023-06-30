"use strict";

const dropdownElements = document.querySelectorAll(".dropdown-elements");
const dropdowns = document.querySelectorAll(".dropdown");
const body = document.querySelector("body");
const menu = document.getElementById("menu");
const nav = document.querySelector("nav");

for (let index = 0; index < 2; index++) {
  dropdownElements[index].addEventListener("click", (e) => {
    e.stopPropagation();
    for (let dd = 0; dd < 2; dd++) {
      dropdowns[dd].style.display = "none";
    }
    e.target.lastElementChild.style.display = "flex";
  });
}

body.addEventListener("click", () => {
  for (let dd = 0; dd < 2; dd++) {
    dropdowns[dd].style.display = "none";
  }
});

let navigationOn = false;

menu.addEventListener("click", (e) => {
  e.stopPropagation();
  if (navigationOn) {
    menu.src = "images/icon-menu.svg";
    nav.style.display = "none";
    navigationOn = false;
  } else {
    menu.src = "images/icon-close-menu.svg";
    nav.style.display = "flex";
    navigationOn = true;
  }
});
