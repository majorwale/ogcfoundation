// Home
const leftArrow = document.querySelector(".slide-icon-left");
const rightArrow = document.querySelector(".slide-icon-right");

const allSlides = document.querySelectorAll(".recent-slide");

leftArrow.addEventListener("click", () => {
  allSlides.forEach((slide) => {
    if (slide.classList.contains("recent-slide-1")) {
      slide.classList.remove("recent-slide-1");
      slide.classList.add("recent-slide-5");
    } else if (slide.classList.contains("recent-slide-2")) {
      slide.classList.remove("recent-slide-2");
      slide.classList.add("recent-slide-1");
    } else if (slide.classList.contains("active")) {
      slide.classList.remove("active");
      slide.classList.add("recent-slide-2");
    } else if (slide.classList.contains("recent-slide-4")) {
      slide.classList.remove("recent-slide-4");
      slide.classList.add("active");
    } else if (slide.classList.contains("recent-slide-5")) {
      slide.classList.remove("recent-slide-5");
      slide.classList.add("recent-slide-4");
    }
  });
});

rightArrow.addEventListener("click", () => {
  allSlides.forEach((slide) => {
    if (slide.classList.contains("recent-slide-5")) {
      slide.classList.remove("recent-slide-5");
      slide.classList.add("recent-slide-1");
    } else if (slide.classList.contains("recent-slide-4")) {
      slide.classList.remove("recent-slide-4");
      slide.classList.add("recent-slide-5");
    } else if (slide.classList.contains("active")) {
      slide.classList.remove("active");
      slide.classList.add("recent-slide-4");
    } else if (slide.classList.contains("recent-slide-2")) {
      slide.classList.remove("recent-slide-2");
      slide.classList.add("active");
    } else if (slide.classList.contains("recent-slide-1")) {
      slide.classList.remove("recent-slide-1");
      slide.classList.add("recent-slide-2");
    }
  });
});
