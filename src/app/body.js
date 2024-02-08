"use client";
import { Inter } from "next/font/google";
import { createContext, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const ThemeContext = createContext();

function Body({ child }) {
  const [theme, setTheme] = useState(typeof window !== "undefined" ? window.localStorage["theme"] : "");
  useEffect(() => {
    if (!window.localStorage["theme"]) {
      window.localStorage["theme"] = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    if (theme !== window.localStorage["theme"]) {
      setTheme(window.localStorage["theme"]);
    }
  }, []);
  const toggleTheme = (newTheme) => {
    window.localStorage["theme"] = newTheme;
    setTheme(newTheme);
  };
  return (
    <ThemeContext.Provider value={{ theme }}>
      <body className={inter.className} data-theme={theme}>
        <nav>
          <img src="logo.svg" />
          <h2>Decipher.dev</h2>
          <div className="theme-toggle">
            {theme === "dark" && (
              <span className="pointer" onClick={() => toggleTheme("light")}>
                <i className="bi bi-sun"></i> Light
              </span>
            )}
            {theme === "light" && (
              <span className="pointer" onClick={() => toggleTheme("dark")}>
                <i className="bi bi-moon"></i> Dark
              </span>
            )}
          </div>
          <a href="/">Home</a>

          <a href="/aboutme">About me</a>
          <a target="_blank" href="https://www.linkedin.com/in/xdeepakv">
            <i className="bi bi-linkedin"></i>
          </a>
          <a target="_blank" href="https://github.com/deepakshrma">
            <i className="bi bi-github"></i>
          </a>
        </nav>
        <main>{child}</main>
      </body>
    </ThemeContext.Provider>
  );
}
export default Body;
