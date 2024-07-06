let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bs-x");
  navlist.classList.toggle("open");
};

window.onscroll = () => {
  menu.classList.remove("bs-x");
  navlist.classList.remove("open");
};
