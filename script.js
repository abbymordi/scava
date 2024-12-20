// Select the button using its ID
const button = document.getElementById('action-button');

// Add a click event to the button
button.addEventListener('click', function() {
    alert('You just clicked the button! 🚀');
});

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const leftButton = document.querySelector('.carousel-button.left');
const rightButton = document.querySelector('.carousel-button.right');

const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides side by side
slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + 'px';
});

// Move to the targeted slide
const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
};

// Add event listeners for buttons
rightButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide') || slides[0];
  const nextSlide = currentSlide.nextElementSibling || slides[0];
  moveToSlide(track, currentSlide, nextSlide);
});

leftButton.addEventListener('click', () => {
  const currentSlide = track.querySelector('.current-slide') || slides[0];
  const prevSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
  moveToSlide(track, currentSlide, prevSlide);
});

const reviewTrack = document.querySelector('.review-track');
const reviewSlides = Array.from(reviewTrack.children);
const leftReviewButton = document.querySelector('.review-button.left');
const rightReviewButton = document.querySelector('.review-button.right');

const reviewWidth = reviewSlides[0].getBoundingClientRect().width;

// Arrange the review slides side by side
reviewSlides.forEach((slide, index) => {
  slide.style.left = reviewWidth * index + 'px';
});

// Move to the targeted review slide
const moveToReviewSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = `translateX(-${targetSlide.style.left})`;
};

// Add event listeners for the review buttons
rightReviewButton.addEventListener('click', () => {
  const currentReview = reviewTrack.querySelector('.review-slide.current-slide') || reviewSlides[0];
  const nextReview = currentReview.nextElementSibling || reviewSlides[0];
  moveToReviewSlide(reviewTrack, currentReview, nextReview);
});

leftReviewButton.addEventListener('click', () => {
  const currentReview = reviewTrack.querySelector('.review-slide.current-slide') || reviewSlides[0];
  const prevReview = currentReview.previousElementSibling || reviewSlides[reviewSlides.length - 1];
  moveToReviewSlide(reviewTrack, currentReview, prevReview);
});

