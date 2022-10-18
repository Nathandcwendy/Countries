import { createContext, useState, React, useEffect } from "react";

const ThemeContext = createContext({});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.theme || "light");
  useEffect(() => {
    let element = document.documentElement;
    theme === "dark"
      ? element.classList.add("dark")
      : element.classList.remove("dark");
    localStorage.theme = theme;
  }, [theme]);
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
