const hamburgerBtn = document.querySelector(".hamburger-btn");
const mobileNav = document.querySelector(".mobile-nav");
const btnImg = document.querySelector(".btn-img");

hamburgerBtn.addEventListener("click", function () {
  mobileNav.classList.toggle("show");
  btnImg.src = "/images/icon-close.svg";
  changeBtn();
});

function changeBtn() {
  if (mobileNav.classList.contains("show")) {
    btnImg.src = "/images/icon-close.svg";
  } else {
    btnImg.src = "/images/icon-hamburger.svg";
  }
}
