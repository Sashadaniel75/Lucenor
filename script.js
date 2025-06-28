// Simple animation on load
document.addEventListener("DOMContentLoaded", () => {
  const heroText = document.querySelector(".hero h1");
  if (heroText) {
    heroText.classList.add("animate");
  }
});