const $ = document;
const navBtn = $.querySelector(".nav__btn");
const navMenu = $.querySelector(".nav-menu");
const placeLike = $.querySelector(".place__like");
const placeLikeIcon = $.querySelectorAll(".place__like-icon");

let isLike = false;

navBtn.addEventListener("click", menuHandeler);
navMenu.addEventListener("click", menuHandeler);
placeLikeIcon.forEach((likeBtn) =>
  likeBtn.addEventListener("click", () => {

    if (isLike) {
      likeBtn.setAttribute("src", "images/svg-icons/heart.svg");
      isLike = false;
    } else {
      likeBtn.setAttribute("src", "images/svg-icons/heart-red.svg");
      isLike = true;
    }
  })
);

function menuHandeler() {
  navBtn.classList.toggle("nav__btn--open");
  navMenu.classList.toggle("nav-menu--open");
}
