///////////////////////////////////////////

/// sroll to top button

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style =
      "opacity: 0.9; pointer-events: auto; transform: translatex(0px);";
  } else {
    mybutton.style.opacity = "0";
    mybutton.style = "opacity: 0; pointer-events: none;";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

///////////////////////////////////

/// MOBILE NAV HAMBURGER
// select targets
const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const main = document.querySelector("main");
// toggle clock on hamburger to see the nav
hamburger.addEventListener("click", function () {
  navigation.classList.toggle("nav-open");
  hamburger.classList.toggle("menu-open");
  // click outside mobi menu to close mobi nav
  main.addEventListener("click", () => {
    navigation.classList.remove("nav-open");
    hamburger.classList.remove("menu-open");
  });
});

// DZIAŁAJĄCE LAZYLOAD

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      entry.target.classList.add("moveInLeft");
      // observer.unobserve(entry.target);
    } else {
      entry.target.classList.remove("moveInLeft");
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);
const sections = document.querySelectorAll(".animationup");
const testing = sections.forEach((section) => observer.observe(section));

// copyrights
const printYear = document.querySelector(".copyrights");
let currentDate = new Date();
const year = currentDate.getFullYear();

printYear.innerHTML += " " + year;

console.log(year);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////ANIMACJE///////////////////////////////////////

//Get the button
// var mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () {
//   scrollFunction();
// };

// function scrollFunction() {
//   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 20) {
//     mybutton.style =
//       "opacity: 0.9; pointer-events: auto; transform: translatex(0px);";
//   } else {
//     mybutton.style.opacity = "0";
//     mybutton.style = "opacity: 0; pointer-events: none;";
//   }
// }

// TESTOWE;

// const observer = new IntersectionObserver((entries) => {
//   // Loop over the entries
//   entries.forEach((entry) => {
//     // If the element is visible
//     if (entry.isIntersecting) {
//       // Add the animation class
//       entry.target.classList.add("moveInLeft");
//     } else {
//       entry.target.classList.remove("moveInLeft");
//     }
//   });
// });

// const getLazyLoad = document.querySelectorAll(".lazyload");
// for (let i = 0; i < getLazyLoad.length; i++) {
//   console.log("obserwuje:", observer.observe(getLazyLoad[i]));
// }
// const getmoveInRight = document.querySelectorAll(".moveInRight");
// for (let i = 0; i < getmoveInRight.length; i++) {
//   console.log("obserwuje:", observer.observe(getmoveInRight[i]));
// }

// observer(document.getElementById("1"));

// console.log(
//   document.getElementById("about"),
//   document.getElementById("1"),
//   document.getElementById("horses")
// );
// observer.observe(document.querySelector("#horses"));
