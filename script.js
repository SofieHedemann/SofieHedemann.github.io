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