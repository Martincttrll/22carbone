
import { loaderBlack, loaderWhite, menuPanels } from "./const.module";
export const onLoad = () => {
  window.addEventListener("load", () => {
    loaderBlack.style.transform = `translateX(-100%)`;
    loaderWhite.style.transform = `translateX(100%)`;
  });
};

export const transitionLoader = (loader) => {
  if (loader.style.transform === `translateX(100%)`) {
    loader.style.transform = `translateX(0%)`;
    setTimeout(() => {
      loader.style.transform = `translateX(-100%)`;
    }, 1200);
  }
  if (loader.style.transform === `translateX(-100%)`) {
    loader.style.transform = `translateX(0%)`;
    setTimeout(() => {
      loader.style.transform = `translateX(100%)`;
    }, 1200);
  }
  menuPanels.forEach((menu) => {
    setTimeout(() => {
      menu.classList.remove("displayed");
    }, 600);
  });
};
