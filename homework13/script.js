const slides = [...document.querySelectorAll('.slide')];
const prevBtn = document.getElementById('btn-prev');
const nextBtn = document.getElementById('btn-next');

let currentSlideIndex = 0;

const hideExtraSlides = () => {
 const slidesToHide = slides.slice(1)

 slidesToHide.forEach((slide) => {
    slide.classList.add('hidden')
 })
 };

 window.addEventListener('DOMContentLoaded', hideExtraSlides);

const showPrevSlide = () => {
    slides[currentSlideIndex].classList.add('hidden')
    if(currentSlideIndex === 0){
        slides[slides.length - 1].classList.remove('hidden')
        currentSlideIndex = slides.length - 1 
    } else {
        slides[currentSlideIndex - 1].classList.remove('hidden')
        currentSlideIndex--
    }
};


 const showNextSlide = () => {
    slides[currentSlideIndex].classList.add('hidden')
    if(currentSlideIndex === slides.length - 1){
        slides[0].classList.remove('hidden')
        currentSlideIndex = 0
    } else {
        slides[currentSlideIndex + 1].classList.remove('hidden')
        currentSlideIndex++
    }
 };

 prevBtn.addEventListener('click', showPrevSlide);
 nextBtn.addEventListener('click', showNextSlide);