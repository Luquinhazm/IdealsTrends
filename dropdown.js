const ativadorSubmenu1 = document.querySelector(".ativador-submenu");
const submenu1 = document.querySelector(".submenu-1");

const ativadorSubmenu2 = document.querySelector(".ativador-submenu-2");
const submenu2 = document.querySelector(".submenu-2");

ativadorSubmenu1.addEventListener("click", () => {
  submenu1.classList.toggle("active");
});

ativadorSubmenu2.addEventListener("click", () => {
  submenu2.classList.toggle("active");
});