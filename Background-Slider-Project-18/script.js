const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

let activeSlide = 0;

setBgToBody();

rightBtn.addEventListener('click', () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlider();
});

leftBtn.addEventListener('click', () => {
    activeSlide--;
  
    if (activeSlide < 0) {
      activeSlide = slide.length - 1;
    }
  
    setBgToBody();
    setActiveSlider();
  });
  

function setBgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlider() {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[activeSlide].classList.add('active');
}
