import { transitionLoader } from "./loader.module";
const burger = document.querySelectorAll(".menu-button")[0];
const menuPanels = document.querySelectorAll(".menu-panel");
const menuButton = document.querySelectorAll(".menu-button div");
export function initMenuClickHandler() {
  burger.addEventListener("click", () => {
    menuPanels.forEach((menu) => {
      if (menu.classList.contains("displayed") == false) {
        menu.classList.add("displayed");
      } else if (menu.classList.contains("displayed")) {
        menu.classList.remove("displayed");
      }
    });
  });
  menuPanels[0].addEventListener("click", () => {
    transitionLoader(loaderBlack);
    currentPage = "project";
  });
  menuPanels[1].addEventListener("click", () => {
    transitionLoader(loaderWhite);
    currentPage = "contact";
  });
}
