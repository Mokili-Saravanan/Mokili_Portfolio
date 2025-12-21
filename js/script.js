const navItems = document.querySelectorAll(".nav-item");
const slider = document.querySelector(".slider-bg");

function moveSlider(el) {
  slider.style.width = el.offsetWidth + "px";
  slider.style.left = el.offsetLeft + "px";
}

navItems.forEach(item => {
  item.addEventListener("mouseenter", () => moveSlider(item));
});

window.addEventListener("load", () => {
  moveSlider(document.querySelector(".nav-item.active"));
});

function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}


