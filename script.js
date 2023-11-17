document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const slides = document.querySelectorAll(".carousel-slide");

  let currentIndex = 0;

  function showSlide(index) {
      const newTransformValue = -index * 100 + "%";
      carousel.style.transform = "translateX(" + newTransformValue + ")";
  }
  function nextSlide() {
    console.log("Changing slide...");
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
    carousel.classList.add("slide-to-right");
    setTimeout(() => {
        carousel.classList.remove("slide-to-right");
        console.log("Slide changed!");
    }, 500);
}

  setInterval(nextSlide, 1000); 
});
