import projets from "/utils/projets.json";
import { projectContainer } from "/src/js/const.module";

export const initProjets = () => {
  projets.forEach((projet) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const imgPara = document.createElement("img");
    imgPara.classList.add("project-img");
    imgPara.setAttribute("src", "/public/img/" + projet.img);
    document.body.appendChild(imgPara);

    const titlePara = document.createElement("p");
    titlePara.innerHTML = projet.name;
    titlePara.classList.add("project-title");
    projectDiv.appendChild(titlePara);

    if (projet.feat != "") {
      const featPara = document.createElement("p");
      featPara.innerHTML = "feat. " + projet.feat;
      featPara.classList.add("project-feat");
      projectDiv.appendChild(featPara);
    }
    if (projet.link != "") {
      const iframe = document.createElement("iframe");
      iframe.setAttribute(
        "src",
        "https://open.spotify.com/embed/" + projet.link
      );
      iframe.setAttribute(
        "allow",
        "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      );
      iframe.setAttribute("loading", "lazy");
      document.body.appendChild(iframe);
    }

    const hrDiv = document.createElement("div");
    hrDiv.classList.add("hr");

    projectContainer.appendChild(projectDiv);
    projectContainer.appendChild(hrDiv);
  });
  ///IMG HOVER
};

export function imgHoverProjets() {
  const images = document.querySelectorAll(".project-img");
  const projets = document.querySelectorAll(".project");
  projets.forEach((projet, index) => {
    projet.addEventListener("mouseenter", () => {
      images[index].style.opacity = "0.7";
    });
    projet.addEventListener("mouseout", () => {
      images[index].style.opacity = "0";
    });
  });
}
export function iframeClickProjets() {
  const iframe = document.querySelectorAll("iframe");
  const projets = document.querySelectorAll(".project");
  projets.forEach((projet, index) => {
    projet.addEventListener("click", () => {
      const computedStyle = window.getComputedStyle(iframe[index]);
      const topValue = computedStyle.getPropertyValue("top");

      for (let i = 0; i < iframe.length; i++) {
        if (i !== index) {
          iframe[i].style.top = "-500px";
        }
      }

      if (topValue == "-500px") {
        iframe[index].style.top = "0";
      } else if (topValue == "0") {
        iframe[index].style.top = "-500px";
      }
    });
  });
}
