const container = document.querySelector('.container');
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

setInterval(() => {
  currentIndex++;
  if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  container.scrollTo({
    left: slides[currentIndex].offsetLeft,
    behavior: 'smooth'
  });
}, 5000);