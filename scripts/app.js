const $ = document;
const navBtn = $.querySelector(".nav__btn");
const navMenu = $.querySelector(".nav-menu");
const placeLikeIcon = $.querySelectorAll(".place__like-icon");
const placeLike = $.querySelectorAll(".place__like");
let isLike = false;

let menuHandeler =() => {
  navBtn.classList.toggle("nav__btn--open");
  navMenu.classList.toggle("nav-menu--open");
}

navBtn.addEventListener("click", menuHandeler);
navMenu.addEventListener("click", menuHandeler);


placeLike.forEach((post) => {
  post.addEventListener("click", () => {
    if (isLike) {
      post.innerHTML = `<img
      src="images/svg-icons/heart-red.svg"
      alt="Like"
      class="place__like-icon"
    />`;
    } else {
      post.innerHTML = `<img
                    src="images/svg-icons/heart.svg"
                    alt="Like"
                    class="place__like-icon"
                  />`;
    }
    isLike = !isLike;
  });
});
