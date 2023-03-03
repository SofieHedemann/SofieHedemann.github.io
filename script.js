// SLIDER --- CARUSSEL 
// DOM Queries
const prevButton = document.querySelector('.slide-arrow-prev');
const nextButton = document.querySelector('.slide-arrow-next');
const slide = document.querySelector('.slide');
const slidesContainer = document.querySelector('.slides-container');

// Tilføje eventlistener til de to knapper:
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Function som anvendes når der bliver klikket på en previous knap
function prevSlide () {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
}

// Function som anvendes når der bliver klikket på en next knap
function nextSlide () {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth; 
    // ovenstående linje kan også skrives sådan her: 
    // slidesContainer.scrollLeft = slidesContainer.scrollLeft + slideWidth;
}


// Ref. til '+=*': 
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition_assignment

// hamburger menu
// Selecting element in the HTML document:
const hamburger = document.querySelector('.hamburger');
console.log(hamburger); // to see what is in the variable hamburger
const navMenu = document.querySelector('.nav-menu');
const navLink = document.querySelectorAll('.nav-link') // querySelectorAll vælger alle i samme class
console.log(navLink)

// Listening for a click event on hamburger button:
hamburger.addEventListener('click', mobileMenu);

//Event Listener for all navLinks: 
navLink.forEach(n => n.addEventListener('click', closeMenu));

function mobileMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

//Dette får menuen til at lukke igen, når man har trykket på et link
//When a menu-item is clicked - the active classes are removed from the hamburger and navMenu
function closeMenu() {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}