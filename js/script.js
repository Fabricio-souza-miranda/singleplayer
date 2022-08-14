const menu = document.querySelector(".mobile-menu");

function openMenu(){
  const headerMenu = document.querySelector(".header-menu");
  menu.classList.toggle("active");
  headerMenu.classList.toggle("active");
}

menu.addEventListener("click", openMenu);