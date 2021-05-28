const loadJSON = async (url) =>
  await fetch(url)
    .then((res) => res.json())
    .then((data) => data);

const closeOtherTabs = (tab) => {
  let tabs = ["projects", "experience", "contributions", "skills"];
  tabs
    .filter((item) => item !== tab)
    .map((item) => {
      document.getElementById(item).innerHTML = "";
      document.getElementById(item + "Arrow").style.transform = "";
      document.getElementById(item).style.maxHeight = "200px";
    });
};

const openProjectsTab = async () => {
  document.getElementById("projects").innerHTML = await loadJSON(
    "/assets/data/projects.json"
  ).then((data) =>
    data
      .map(
        (doc) => `
        <project-card 
        name="${doc.name}" 
        desc="${doc.summary}" 
        status=${doc.isCompleted} 
        ${doc.tech
          .map((item, index) => `tag${index}="${item}" `)
          .reduce((i, ii) => i + ii)}
        ></project-card>
        `
      )
      .reduce((i, ii) => i + ii)
  );
  document.getElementById("projectsArrow").style.transform = "rotate(90deg)";
  document.getElementById("projects").style.maxHeight = "200px";
};

const openExperienceTab = () => {
  document.getElementById("experience").innerHTML = "Will be updated soon !";
  document.getElementById("experienceArrow").style.transform = "rotate(90deg)";
  document.getElementById("experience").style.maxHeight = "200px";
};

const openContributionsTab = () => {
  document.getElementById("contributions").innerHTML = "Will be updated soon !";
  document.getElementById("contributionsArrow").style.transform =
    "rotate(90deg)";
  document.getElementById("contributions").style.maxHeight = "200px";
};

const openSkillsTab = () => {
  document.getElementById("skills").innerHTML = "Will be updated soon !";
  document.getElementById("skillsArrow").style.transform = "rotate(90deg)";
  document.getElementById("skills").style.maxHeight = "200px";
};

const openTab = async (tab) => {
  closeOtherTabs(tab);
  if (tab === "projects") openProjectsTab();
  else if (tab === "experience") openExperienceTab();
  else if (tab === "contributions") openContributionsTab();
  else if (tab === "skills") openSkillsTab();
};
