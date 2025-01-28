const skills = {
  'devicon-csharp-plain': 'C#',
  'devicon-python-plain': 'Python',
  'devicon-sqldeveloper-plain': 'SQL',
  'devicon-git-plain': 'Git',
  'devicon-bash-plain': 'Bash',
  'devicon-html5-plain': 'HTML',
  'devicon-css3-plain': 'CSS',
  'devicon-javascript-plain': 'Javascript',
  'devicon-express-original': 'Express',
  'devicon-react-original': 'React',
  'devicon-mongodb-plain': 'MongoDB',
  'devicon-dotnetcore-plain': 'Dotnet',
  'devicon-kotlin-plain': 'Kotlin',
  'devicon-linux-plain': 'Linux',
  'devicon-javascript-plain': 'Java',
  'devicon-docker-plain': 'Docker'
}

const skillsKeys = Object.keys(skills);

const skillsSection = document.getElementsByClassName("skills-section")[0];

for(let i = 0; i < skillsKeys.length; ++i){
  // Create icons
  const icon = document.createElement('i');
  icon.className = skillsKeys[i];
  icon.textContent = skills[skillsKeys[i]]
  skillsSection.appendChild(icon);
}

document.querySelectorAll('.selector .button-start, .selector .button').forEach((button) => {
  button.addEventListener('click', () => {
    // Get the section to display from data-section
    const sectionId = button.getAttribute('data-section');
    console.log("clicked");
    
    // Hide other sections
    document.querySelectorAll('.content-box > div').forEach((section) => {
      section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'flex';
  })
});