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
