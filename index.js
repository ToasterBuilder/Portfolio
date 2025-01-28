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
const projectDisplayBox = document.querySelector('.project-display');

for(let i = 0; i < projects.length; ++i){
  const icon = document.createElement('i');
  icon.className = 'fas fa-folder';
  
  const text = document.createElement('span');
  text.textContent = projects[i].name;

  icon.appendChild(text);
  projectsSection.appendChild(icon);

  icon.addEventListener('click', () => {
    // Clear
    projectDisplayBox.textContent = '';

    const img = document.createElement('img');
    img.src = `./res/projectImg/${projects[i].img}`;
    img.alt = `Project ${projects[i].name} image`;

    projectDisplayBox.appendChild(img);
  });
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

    // Get the display to display from data-display
    const displayId = button.getAttribute('data-display');
    
    // Hide other sections
    document.querySelectorAll('.display-box > div').forEach((display) => {
      display.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(displayId).style.display = 'flex';
  })
});