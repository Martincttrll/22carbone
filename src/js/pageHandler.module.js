import {
  projectContainer,
  homeContainer,
  contactContainer,
} from "./const.module";

export function initUpdatePage() {
  window.addEventListener("popstate", () => {
    if (window.location.pathname == "/projets") {
      projectContainer.style.display = "flex";
    } else {
      projectContainer.style.display = "none";
    }

    if (window.location.pathname == "/contact") {
      contactContainer.style.display = "flex";
    } else {
      contactContainer.style.display = "none";
    }

    if (window.location.pathname == "/") {
      homeContainer.style.display = "/flex";
    } else {
      homeContainer.style.display = "none";
    }
  });
}
