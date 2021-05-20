import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const { Provider } = ThemeContext;

  return (
    <Provider value={{ isDarkTheme, setIsDarkTheme }}>{children}</Provider>
  );
};
