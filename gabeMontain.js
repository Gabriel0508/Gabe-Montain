"use strict";

/**
 * Method to animate the navigation bar and the burger menu
 */
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector("nav");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    //Toggle nav
    nav.classList.toggle("nav-active");

    //Animate nav links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });

    //Burger animation
    burger.classList.toggle("burgerToggle");
  });

  //Close the menu bar on clicking outisde
  // window.addEventListener("click", (e) => {
  //   if (!document.querySelector("nav").contains(e.target)) {
  //     console.log("eeeeeee");
  //     nav.classList.remove("nav-active");
  //   }
  // });
};

navSlide();
