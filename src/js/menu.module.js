import { transitionLoader } from "./loader.module";
import { loaderBlack, loaderWhite, burger, menuPanels} from "./const.module";
import { setCurrentPage, getCurrentPage } from "./pageHandler.module";

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
    setCurrentPage("projet");
    console.log(getCurrentPage());

  });
  menuPanels[1].addEventListener("click", () => {
    transitionLoader(loaderWhite);
    setCurrentPage("contact");
    console.log(getCurrentPage());

  });
}
