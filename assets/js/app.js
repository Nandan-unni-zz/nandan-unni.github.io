const setEnvironment = () => {
  if (localStorage.getItem("theme") === "lightMode")
    document.body.classList.replace("darkMode", "lightMode");
  else document.body.classList.replace("lightMode", "darkMode");
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
  if (menuBtn.className.includes("openMenu")) {
    menuBtn.classList.replace("openMenu", "closedMenu");
  } else {
    menuBtn.classList.replace("closedMenu", "openMenu");
  }
};
