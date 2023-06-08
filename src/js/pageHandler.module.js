import {
  projectContainer,
  homeContainer,
  contactContainer,
} from "./const.module";
import initScroll from "./homepage.module";
import {
  initProjets,
  imgHoverProjets,
  iframeClickProjets,
} from "./projets.module";
import initThree from "./three.module";

export function initUpdatePage() {
  window.addEventListener("load", () => {
    updatePage();
  });

  window.addEventListener("popstate", () => {
    updatePage();
  });

  function updatePage() {
    if (window.location.pathname == "/projets") {
      initProjets();
      imgHoverProjets();
      iframeClickProjets();
      projectContainer.style.display = "flex";
    } else {
      projectContainer.style.display = "none";
    }

    if (window.location.pathname == "/contact") {
      initThree();
      contactContainer.style.display = "flex";
    } else {
      contactContainer.style.display = "none";
    }

    if (window.location.pathname == "/") {
      initScroll();
      homeContainer.style.display = "block";
    } else {
      homeContainer.style.display = "none";
    }
  }
}
