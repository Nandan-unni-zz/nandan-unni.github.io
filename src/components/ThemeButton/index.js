import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./index.css";

const ThemeButton = () => {
  const { setIsDarkTheme, isDarkTheme } = useContext(ThemeContext);
  return (
    <button
      className={`themeButton ${
        isDarkTheme ? "themeButtonDark" : "themeButtonLight"
      }`}
      onClick={() => setIsDarkTheme((prev) => !prev)}
    ></button>
  );
};

export default ThemeButton;
