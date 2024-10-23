/** @format */
/*const a = document.querySelector("body");
a.onload = load();
//a.onunload = unload();
function load() {
  alert("Page loaded");
}

function unload() {
  alert("Page unloaded");
}
localStorage.setItem("title");*/

/** @format */

const navbar = document.getElementById("nav1");

// Hide the navbar initially
navbar.style.display = "none";

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    // Show the navbar and make it sticky when scrolled past 100px
    navbar.style.display = "block";
    navbar.style.position = "fixed";
    navbar.style.top = "0";
    navbar.style.left = "0";
    navbar.style.width = "100%";
    navbar.style.zIndex = "1000";
  } else {
    // Hide the navbar when scrolled back to top
    navbar.style.display = "none";
  }
});
