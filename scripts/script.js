/*
  Student Name: Your Name
  File Name: script.js
  Date: Sep 19th, 2022
*/

Hamburger menu function.
function Hamburger() {
  var menu = document.getElementById("menu-links");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}
