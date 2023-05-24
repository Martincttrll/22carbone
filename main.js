import "/src/css/style.css";
import * as transition from "/src/js/loader.module.js";
import { initMenuClickHandler } from "./src/js/menu.module";
import { imgHoverProjets, initProjets } from "./src/js/projets.module";
// import { initCursorProjetHandler } from "./src/js/cursor.module";

transition.onLoad();

initMenuClickHandler();
// initCursorProjetHandler();
initProjets();
imgHoverProjets();
