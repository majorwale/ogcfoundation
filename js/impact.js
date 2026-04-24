const leftArrow = document.querySelector(".slide-icon-left");
const rightArrow = document.querySelector(".slide-icon-right");

const allSlides = document.querySelectorAll(".slide");

leftArrow.addEventListener("click", () => {
  allSlides.forEach((slide) => {
    if (slide.classList.contains("slide-1")) {
      slide.classList.add("height");
      slide.classList.add("slide-3");
      slide.classList.remove("slide-1");
      setTimeout(() => {
        slide.classList.remove("height");
      }, 800);
    } else if (slide.classList.contains("active")) {
      slide.classList.add("height");
      slide.classList.add("slide-1");
      slide.classList.remove("active");
      setTimeout(() => {
        slide.classList.remove("height");
      }, 800);
    } else if (slide.classList.contains("slide-3")) {
      slide.classList.add("height");
      slide.classList.add("active");
      slide.classList.remove("slide-3");
      setTimeout(() => {
        slide.classList.remove("height");
      }, 800);
    }
  });
});

rightArrow.addEventListener("click", () => {
  allSlides.forEach((slide) => {
    if (slide.classList.contains("slide-3")) {
      slide.classList.add("height");
      slide.classList.remove("slide-3");
      slide.classList.add("slide-1");
      setTimeout(() => {
        slide.classList.remove("height");
      }, 800);
    } else if (slide.classList.contains("active")) {
      slide.classList.add("height");
      slide.classList.remove("active");
      slide.classList.add("slide-3");
      setTimeout(() => {
        slide.classList.remove("height");
      }, 800);
    } else if (slide.classList.contains("slide-1")) {
      slide.classList.add("height");
      slide.classList.remove("slide-1");
      slide.classList.add("active");
      setTimeout(() => {
        slide.classList.remove("height");
      }, 800);
    }
  });
});

// Impact animations
const impacts = document.querySelectorAll(".impact");

const animateImpact = function (entries, observer) {
  const [entry] = entries;
  console.log(entry.target.children[1]);
  if (entry.isIntersecting) {
    if (entry.target.children[1].classList.contains("impact-out")) {
      entry.target.children[1].classList.remove("impact-out");
    }
    if (entry.target.children[1].classList.contains("impact-out-reverse")) {
      entry.target.children[1].classList.remove("impact-out-reverse");
    }
  }
};

const impactObserver = new IntersectionObserver(animateImpact, {
  root: null,
  threshold: 0.5,
});

impacts.forEach((impact) => {
  console.log(impact);
  impactObserver.observe(impact);
  // impact.classList.add("section-hidden");
});
