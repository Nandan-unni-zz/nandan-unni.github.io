const toggleTheme = () => {
  let body = document.getElementById("body");
  if (body.className.includes("dark")) body.classList.replace("dark", "light");
  else body.classList.replace("light", "dark");
};
