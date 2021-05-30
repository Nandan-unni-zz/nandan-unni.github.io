const setEnvironment = () => {
  if (localStorage.getItem("theme") === "lightMode")
    document.body.classList.replace("darkMode", "lightMode");
  else document.body.classList.replace("lightMode", "darkMode");
  openProjectsTab();
};

const toggleTheme = () => {
  if (document.body.className.includes("darkMode")) {
    document.body.classList.replace("darkMode", "lightMode");
    localStorage.setItem("theme", "lightMode");
  } else {
    document.body.classList.replace("lightMode", "darkMode");
    localStorage.setItem("theme", "darkMode");
  }
};

const toggleMenu = () => {
  let menuBtn = document.getElementById("menuToggleBtn");
  let menu = document.getElementById("menu");
  if (menuBtn.className.includes("openMenuBtn")) {
    menu.style.width = "0";
    menuBtn.classList.replace("openMenuBtn", "closedMenuBtn");
  } else {
    if (window.innerWidth >= 1025) menu.style.width = "350px";
    else if (window.innerWidth >= 500 && window.innerWidth < 1025)
      menu.style.width = "380px";
    else menu.style.width = "300px";
    menuBtn.classList.replace("closedMenuBtn", "openMenuBtn");
  }
};

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
      document.getElementById(item).classList.replace("openTab", "closedTab");
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
  document.getElementById(`projectsArrow`).style.transform = "rotate(90deg)";
  document.getElementById("projects").classList.replace("closedTab", "openTab");
};

const openExperienceTab = async () => {
  document.getElementById("experience").innerHTML = await loadJSON(
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
  document.getElementById(`experienceArrow`).style.transform = "rotate(90deg)";
  document
    .getElementById("experience")
    .classList.replace("closedTab", "openTab");
};

const openContributionsTab = async () => {
  document.getElementById("contributions").innerHTML = await loadJSON(
    "/assets/data/contributions.json"
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
  document.getElementById(`contributionsArrow`).style.transform =
    "rotate(90deg)";
  document
    .getElementById("contributions")
    .classList.replace("closedTab", "openTab");
};

const openSkillsTab = async () => {
  document.getElementById("skills").innerHTML = await loadJSON(
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
  document.getElementById(`skillsArrow`).style.transform = "rotate(90deg)";
  document.getElementById("skills").classList.replace("closedTab", "openTab");
};

const openTab = async (tab) => {
  closeOtherTabs(tab);
  if (tab === "projects") openProjectsTab();
  else if (tab === "experience") openExperienceTab();
  else if (tab === "contributions") openContributionsTab();
  else if (tab === "skills") openSkillsTab();
};
