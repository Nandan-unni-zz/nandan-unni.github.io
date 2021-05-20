import { useContext } from "react";
import ThemeButton from "./components/ThemeButton";
import { ThemeContext } from "./contexts/ThemeContext";

import darkBackground from "./images/dark.jpg";
import lightBackground from "./images/light.jpg";

function App() {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <div
      className="body"
      style={{
        backgroundColor: isDarkTheme ? "black" : "white",
        backgroundImage: `url(/images/${isDarkTheme ? "dark" : "light"}.jpg)`,
      }}
    >
      <ThemeButton />
    </div>
  );
}

export default App;
