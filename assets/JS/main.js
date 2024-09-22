// Nav Open Menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");

menuBtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closeBtn.style.display = "inline-block";
  menuBtn.style.display = "none";
});

// Close Menu
const closeNav = () => {
  menu.style.display = "none";
  closeBtn.style.display = "none";
  menuBtn.style.display = "inline-block";
};

closeBtn.addEventListener("click", closeNav);

// Initialize Swiper

var swiper = new Swiper(".myProjects", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// select the element
const counters = document.querySelectorAll(".counter");

// iterate through all the counter elements
counters.forEach((counter) => {
  // function to increment the counter
  function updateCount() {
    const target = +counter.getAttribute("data-count");
    const count = +counter.innerHTML;

    const inc = Math.floor((target - count) / 3);

    if (count < target && inc > 0) {
      counter.innerHTML = count + inc;
      // repeat the function
      setTimeout(updateCount, 1000);
    }
    // if the count not equal to target, then add remaining count
    else {
      counter.innerHTML = target;
    }
  }
  updateCount();
});

// Testimonials-Slider
const sliderTrack = document.querySelector(".slider-track");
const testimonials = document.querySelectorAll(".testimonial");
const testimonialWidth = testimonials[0].offsetWidth;
const moveAmount = testimonialWidth; // Adjust this value based on desired movement
let currentPosition = 0;

function moveSlider(direction) {
  if (direction === "prev") {
    currentPosition += moveAmount;
  } else if (direction === "next") {
    currentPosition -= moveAmount;
  }

  sliderTrack.style.transform = `translateX(${currentPosition}px)`;
}

function autoTransition() {
  const totalTestimonials = testimonials.length;
  currentPosition -= moveAmount;
  sliderTrack.style.transform = `translateX(${currentPosition}px)`;

  if (currentPosition <= -(totalTestimonials * moveAmount)) {
    currentPosition = 0;
    sliderTrack.style.transform = `translateX(${currentPosition}px)`;
  }
}

document.querySelector(".slider-prev").addEventListener("click", function () {
  moveSlider("prev");
});

document.querySelector(".slider-next").addEventListener("click", function () {
  moveSlider("next");
});

setInterval(autoTransition, 5000); // Automatic transition every 5 seconds
