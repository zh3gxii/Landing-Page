/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");
//const navi = document.querySelectorAll("nav ul li");

const navMenu = () => {
  for (const section of sections) {
    const navLi = document.createElement("a");
    navLi.innerHTML = section.getAttribute("data-nav");
    navLi.href = "#" + section.id;
    navBar.appendChild(navLi);
  }
};

window.addEventListener('scroll', () =>{
    sections.forEach(function (sections) {
      for (let i = 0; i < sections.length; i++) {
        const pos = sections[i].getBoundingClientRect();
        console.log(sections, pos);
        if (pos.top >= 0 && pos.top < window.innerHeight) {
          if (!sections.classList.contains("your-active-class")) {
            sections[i].classList.add("your-active-class");
          } 
        } else {
          sections[i].classList.remove("your-active-class");
        }
      }
    })
});
navMenu();
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

/**
 * End Main Functions
 * Begin Events
 *
*/
