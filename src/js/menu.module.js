import { transitionLoader } from "./loader.module";
import { loaderBlack, loaderWhite, burger, menuPanels } from "./const.module";

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
    window.history.pushState("state", null, "/projets");
    let popStateEvent = new PopStateEvent("popstate", { state: "state" });
    dispatchEvent(popStateEvent);
  });
  menuPanels[1].addEventListener("click", () => {
    transitionLoader(loaderWhite);
    window.history.pushState("state", null, "/contact");
    let popStateEvent = new PopStateEvent("popstate", { state: "state" });
    dispatchEvent(popStateEvent);
  });
}
