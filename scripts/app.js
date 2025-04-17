const $ = document;
const navBtn = $.querySelector(".nav__btn");
const navMenu = $.querySelector(".nav-menu");
const placeLikeIcon = $.querySelectorAll(".place__like-icon");
const placeLike = $.querySelectorAll(".place__like");
const place = $.querySelectorAll(".place");
const placeBanner = $.querySelectorAll(".place__banner");
const viewAll = $.querySelector(".destinations__btn");

let isLike = false;
let isShow = false;
let viewNumberPost = 0;

let likePostHandeler = (post) => {
  if (isLike) {
    if (post.classList == "place__like") {
      post.innerHTML = `<img
      src="images/svg-icons/heart-red.svg"
      alt="Like"
      class="place__like-icon"
    />`;
    }
  } else {
    if (post.classList == "place__like") {
      post.innerHTML = `<img
                    src="images/svg-icons/heart.svg"
                    alt="Like"
                    class="place__like-icon"
                  />`;
    }
  }
  isLike = !isLike;
};

let menuHandeler = () => {
  navBtn.classList.toggle("nav__btn--open");
  navMenu.classList.toggle("nav-menu--open");
};
let viewAllHandeler = () => {
  place.forEach((placePost) => {
    placePost.style.display = "block";
    viewAll.innerHTML = "See less";
  });
};
placeBanner.forEach((bannerPost) => {
  bannerPost.addEventListener("dblclick", (event) => {
    likePostHandeler(event.target.nextSibling.nextSibling);
  });
});

placeLike.forEach((post) => {
  post.addEventListener("click", () => {
    likePostHandeler(post);
  });
});

let seeLess = () => {
  place.forEach((placePost) => {
    placePost.style.display = "none";
    if (viewNumberPost < 4) {
      placePost.style.display = "block";
      viewAll.innerHTML = "View all";
      viewNumberPost++;
    }
  });
};

navBtn.addEventListener("click", menuHandeler);
navMenu.addEventListener("click", menuHandeler);
viewAll.addEventListener("click", () => {
  if (isShow) {
    viewNumberPost = 0;
    seeLess();
  } else {
    viewAllHandeler();
  }
  isShow = !isShow;
});
seeLess();
