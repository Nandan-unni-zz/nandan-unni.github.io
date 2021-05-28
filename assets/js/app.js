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
  let menu = document.getElementById("menu");
  if (menuBtn.className.includes("openMenuBtn")) {
    menuBtn.classList.replace("openMenuBtn", "closedMenuBtn");
    menu.style.width = "0";
  } else {
    menuBtn.classList.replace("closedMenuBtn", "openMenuBtn");
    if (window.innerWidth >= 1025) menu.style.width = "350px";
    else if (window.innerWidth >= 500 && window.innerWidth < 1025)
      menu.style.width = "380px";
    else menu.style.width = "300px";
  }
};
