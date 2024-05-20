const menuBtn = document.querySelector(".mobile");
const nav_list = document.querySelector(".nav_list");

const mobileMenu = () => {
  menuBtn.classList.toggle("active");
  nav_list.classList.toggle("active");
};
