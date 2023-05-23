import "/src/css/style.css";
import * as transition from "/src/js/loader.module.js";
import { initMenuClickHandler } from "./src/js/menu.module";
transition.onLoad();

let currentPage = "";

// CONST

initMenuClickHandler();
