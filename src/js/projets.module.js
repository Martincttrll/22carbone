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

    const hrDiv = document.createElement("div");
    hrDiv.classList.add("hr");

    projectContainer.appendChild(projectDiv);
    projectContainer.appendChild(hrDiv);
  });
};

export function imgHoverProjets() {
  const images = document.querySelectorAll(".project-img");
  images.forEach((img) => {
    const imgHeight = getComputedStyle(img).height;
    const imgWidth = getComputedStyle(img).width;
    document.addEventListener("mousemove", (event) => {
      let y = event.clientY;
      let x = event.clientX;
      img.style.top = y - parseInt(imgHeight) / 2 + "px";
      img.style.left = x - parseInt(imgWidth) / 2 + "px";
      console.log(imgHeight + " - " + imgWidth);
    });
  });

  const projets = document.querySelectorAll(".project");
  projets.forEach((projet, index) => {
    projet.addEventListener("mouseenter", () => {
      images[index].style.opacity = "1";
    });
    projet.addEventListener("mouseout", () => {
      images[index].style.opacity = "0";
    });
  });
}
