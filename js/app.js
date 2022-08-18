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

const navMenu = () => {
  for (const section of sections) {
    const sectionDataNav = section.getAttribute("data-nav");
    const sectionID = section.getAttribute("id");
    const navsLi = document.createElement("li");
    navsLi.innerHTML = `<a class='menu__link' href='#${sectionID}'>${sectionDataNav}</a>`;
//Appends element to navigation
    navBar.appendChild(navsLi);
  }
};

//Viewport current position (by getBoundingClientRect) to know the user current viewing position
const viewPort = (element) => {
  const position = element.getBoundingClientRect();
  return (position.top >= 0);
}

//listen for scroll events by calling arrow function to add and remove active class from section
document.addEventListener("scroll", yourActiveClass = () => {
  for (const section of sections) {
    if (viewPort(section)) {
      if (!section.classList.contains("your-active-class")) {
        section.classList.add("your-active-class");
      } 
    } else {
      section.classList.remove("your-active-class");
    }
  }
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
