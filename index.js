import { projects, skills } from './project.js';

const skillsKeys = Object.keys(skills);
const skillsSection = document.getElementById("skills-section");

for(let i = 0; i < skillsKeys.length; ++i){
  // Create icons
  const icon = document.createElement('i');
  icon.className = skillsKeys[i];
  icon.textContent = skills[skillsKeys[i]];
  skillsSection.appendChild(icon);
}

const projectsSection = document.getElementById("project-section");

for(let i = 0; i < projects.length; ++i){
  const icon = document.createElement('i');
  icon.className = 'fas fa-folder';
  
  const text = document.createElement('span');
  text.textContent = projects[i].name;

  icon.appendChild(text);
  projectsSection.appendChild(icon);
  // const img = document.createElement('img');
  // img.src = projects[i].img;
}

document.querySelectorAll('.selector .button-start, .selector .button').forEach((button) => {
  button.addEventListener('click', () => {
    // Get the section to display from data-section
    const sectionId = button.getAttribute('data-section');
    
    // Hide other sections
    document.querySelectorAll('.content-box > div').forEach((section) => {
      section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'flex';
  })
});