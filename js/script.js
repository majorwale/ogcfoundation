const hiddenNav = document.querySelector(".hidden-nav");

const toggleBar = document.querySelector(".nav-toggle");
const toggleBar1 = document.querySelector(".toggle-bar-1");
const toggleBar2 = document.querySelector(".toggle-bar-2");
const toggleBar3 = document.querySelector(".toggle-bar-3");

const sections = document.querySelectorAll(".section");

// Sections fade in

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (entry.isIntersecting) {
    entry.target.classList.remove("section-hidden");
  }
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.2,
});

sections.forEach((section) => {
  console.log(section);
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

// Toggle

let active = false;

toggleBar.addEventListener("click", () => {
  if (!active) {
    // console.log("Sharp");
    toggleBar2.classList.remove("toggle-active");
    toggleBar2.classList.remove("deactivate");

    toggleBar1.style.transform = "translateX(25px)";
    toggleBar1.style.opacity = "0";
    console.log(toggleBar1);

    toggleBar3.style.transform = "translateX(-25px)";
    toggleBar3.style.opacity = "0";

    toggleBar2.classList.add("toggle-active");

    // nav.classList.add("sticky");
    hiddenNav.classList.add("show");
    // nav.classList.add("dark");

    active = true;
  } else {
    toggleBar1.style.transform = "translateX(0)";
    toggleBar1.style.opacity = "1";
    toggleBar3.style.transform = "translateX(0)";
    toggleBar3.style.opacity = "1";
    toggleBar2.classList.add("deactivate");
    // nav.classList.remove("dark");
    hiddenNav.classList.remove("show");
    //   if (counter === 1) {
    //     nav.classList.remove("sticky");
    //     innerNav.classList.remove("flex-end");
    //     navItems.style.display = "flex";
    //     navImg.style.display = "block";
    //     navToggle.style.display = "none";
    //     counter = 0;
    //     counter2 = 0;
    //   }
    // navHidden.style.display = "none";
    active = false;
  }
});



