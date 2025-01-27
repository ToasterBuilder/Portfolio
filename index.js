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
  const icon = document.createElement('i');
  icon.className = skillsKeys[i];
  icon.textContent = skills[skillsKeys[i]]
  skillsSection.appendChild(icon);
}