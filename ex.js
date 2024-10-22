/** @format */

let currentIndex = 0;
const slides = document.querySelectorAll("#slider > div");
const totalSlides = slides.length;

document.getElementById("next").addEventListener("click", function () {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSliderPosition();
});

document.getElementById("prev").addEventListener("click", function () {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSliderPosition();
});

function updateSliderPosition() {
  document.getElementById("slider").style.transform = `translateX(-${
    currentIndex * 100
  }%)`;
}
