import { ThemeProvider } from "../../contexts/ThemeContext";
import "./index.css";

const Wrapper = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default Wrapper;
