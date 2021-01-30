var navMain = document.querySelector(".site-nav");
console.log(navMain);
var navToggle = document.querySelector(".site-nav__toggle");
console.log(navMain);

navMain.classList.remove("site-nav--nojs");

if (navMain.classList.contains("site-nav--opened")) {
  navMain.classList.add("site-nav--closed");
  navMain.classList.remove("site-nav--opened");
}
console.log(navMain);

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("site-nav--closed")) {
    navMain.classList.remove("site-nav--closed");
    navMain.classList.add("site-nav--opened");
    console.log(navMain);
  } else {
    navMain.classList.add("site-nav--closed");
    navMain.classList.remove("site-nav--opened");
    console.log(navMain);
  }
});
