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

const navs = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

const nav_build = () => {
  let navUI = "";
  
  //section loops
  sections.forEach((section) => {
    const sectionID = section.id;
    const sectionDataNav = section.dataset.nav;
    navUI += `<li><a class="menu__link" href="#${sectionID}">${sectionDataNav}</a></li>`;
  });

//Appends element to navigation
  navs.innerHTML = navUI;
}
nav_build();
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
