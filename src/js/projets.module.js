import projets from "/utils/projets.json";
import { projectContainer } from "/src/js/const.module";

export const initProjets = () => {
  projets.forEach((projet) => {
    const projectDiv = document.createElement("div");
    projectDiv.classList.add("project");

    const projetTextDiv = document.createElement("div");
    projetTextDiv.classList.add("project-text");
    projectDiv.appendChild(projetTextDiv);

    const imgPara = document.createElement("img");
    imgPara.classList.add("project-img");
    imgPara.setAttribute("src", "/img/" + projet.img);
    document.body.appendChild(imgPara);

    const titlePara = document.createElement("p");
    titlePara.innerHTML = projet.name;
    titlePara.classList.add("project-title");
    projetTextDiv.appendChild(titlePara);

    if (projet.feat != "") {
      const featPara = document.createElement("p");
      featPara.innerHTML = "feat. " + projet.feat;
      featPara.classList.add("project-feat");
      projetTextDiv.appendChild(featPara);
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
      projectDiv.appendChild(iframe);
    }

    const hrDiv = document.createElement("div");
    hrDiv.classList.add("hr");

    projectContainer.appendChild(projectDiv);
    projectContainer.appendChild(hrDiv);
  });
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
      const height = window
        .getComputedStyle(iframe[index])
        .getPropertyValue("height");

      for (let i = 0; i < iframe.length; i++) {
        if (i !== index) {
          iframe[i].style.height = "0px";
          iframe[i].style.marginTop = "0px";
        }
      }

      if (height == "0px") {
        iframe[index].style.height = "200px";
        iframe[index].style.marginTop = "30px";
      } else if (height == "200px") {
        iframe[index].style.height = "0px";
        iframe[index].style.marginTop = "0px";
      }
    });
  });
}
