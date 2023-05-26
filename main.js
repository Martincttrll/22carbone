import "/src/css/style.css";
import * as transition from "/src/js/loader.module.js";
import { initMenuClickHandler } from "./src/js/menu.module";
import {
  initProjets,
  imgHoverProjets,
  iframeClickProjets,
} from "./src/js/projets.module";
import { initUpdatePage } from "./src/js/pageHandler.module";

transition.onLoad();
document.addEventListener("DOMContentLoaded", () => {
  initUpdatePage();

  initMenuClickHandler();
  initProjets();
  imgHoverProjets();
  iframeClickProjets();
});
