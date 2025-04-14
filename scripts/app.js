const $ = document;
const navBtn = $.querySelector(".nav__btn");
const navMenu = $.querySelector(".nav-menu");
const placeLikeIcon = $.querySelectorAll(".place__like-icon");

let isLike = false;

navBtn.addEventListener("click", menuHandeler);
navMenu.addEventListener("click", menuHandeler);
placeLikeIcon.forEach((likeBtn) =>
  likeBtn.addEventListener("click", () => {
    if (isLike) {
      likeBtn.src = "images/svg-icons/heart.svg";
    } else {
      likeBtn.src = "images/svg-icons/heart-red.svg";
    }
    isLike = !isLike;
  })
);

function menuHandeler() {
  navBtn.classList.toggle("nav__btn--open");
  navMenu.classList.toggle("nav-menu--open");
}
