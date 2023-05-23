import projets from "/utils/projets.json";
import { projectContainer } from "/src/js/const.module";

export const initProjets = () =>{
    projets.forEach( (projet) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    
    const titlePara = document.createElement('p');
    titlePara.innerHTML = projet.name;
    titlePara.classList.add('project-title');
    projectDiv.appendChild(titlePara);
    if(projet.feat != ""){
    const featPara = document.createElement('p');
    featPara.innerHTML = "feat. " + projet.feat;
    featPara.classList.add('project-feat');
    projectDiv.appendChild(featPara);
}
    
    const hrDiv = document.createElement('div');
    hrDiv.classList.add('hr');
    
    projectContainer.appendChild(projectDiv);
    projectContainer.appendChild(hrDiv);
});
}