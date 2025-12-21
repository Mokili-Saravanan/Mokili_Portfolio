const sliderNav = document.querySelector(".slider-nav");
const sliderBg = document.querySelector(".slider-bg");
const navItems = document.querySelectorAll(".nav-item");

// Move slider to an element
function moveSlider(el) {
  const rect = el.getBoundingClientRect();
  const parentRect = sliderNav.getBoundingClientRect();

  sliderBg.style.width = `${rect.width}px`;
  sliderBg.style.left = `${rect.left - parentRect.left}px`;
}

// Initial position (active item)
window.addEventListener("load", () => {
  const activeItem = document.querySelector(".nav-item.active") || navItems[0];
  activeItem.classList.add("active");
  moveSlider(activeItem);
});

// Hover effect
navItems.forEach(item => {
  item.addEventListener("mouseenter", () => {
    moveSlider(item);
  });

  item.addEventListener("click", () => {
    navItems.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
    moveSlider(item);
  });
});

// When mouse leaves nav, return to active
sliderNav.addEventListener("mouseleave", () => {
  const activeItem = document.querySelector(".nav-item.active");
  if (activeItem) moveSlider(activeItem);
});
