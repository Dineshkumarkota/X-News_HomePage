const menuButton = document.getElementById("menu-button");
const menuClose = document.getElementById("menu-close");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
  nav.classList.add("open");
});

menuClose.addEventListener("click", () => {
  nav.classList.remove("open");
});
function updateHeroImage() {
  const heroImg = document.querySelector(".hero-img img");
  if (window.innerWidth < 1000) {
    heroImg.src = "./image-web-3-mobile.jpg";
  } else {
    heroImg.src = "./image-web-3-desktop.jpg";
  }
}

// Run once on load
updateHeroImage();

// Also update when screen is resized
window.addEventListener("resize", updateHeroImage);
