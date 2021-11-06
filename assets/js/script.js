const userList = document.querySelector(".user-list");
const loginPage = document.querySelector("#loginPage");
const initialPage = document.querySelector("#initialPage");
const userImage = document.querySelector(".menu-user__user-image");
const body = document.body;
let userImageSrc;

userList.addEventListener("click", (e) => {
  userImageSrc = e.target.closest("img").getAttribute("src");
  body.classList.remove("body--login");
  body.classList.add("body--initialPage");
  loginPage.classList.add("hidden");
  initialPage.classList.remove("hidden");
  userImage.setAttribute("src", userImageSrc);
});
