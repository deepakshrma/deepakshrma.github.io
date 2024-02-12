"use client";
import { Lato } from "next/font/google";
import { createContext, useEffect, useState } from "react";

const inter = Lato({ weight: ["400", "700"], style: ["normal", "italic"], subsets: ["latin"] });
const ThemeContext = createContext();

if (typeof window !== "undefined") {
  if (!window.localStorage["theme"]) {
    window.localStorage["theme"] = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
}

function Body({ child }) {
  const [theme, setTheme] = useState();
  const toggleTheme = (newTheme) => {
    window.localStorage["theme"] = newTheme;
    setTheme(newTheme);
  };
  useEffect(() => {
    if (window.localStorage["theme"] !== theme) setTheme(window.localStorage["theme"]);
  }, []);
  const dark = theme === "dark";
  return (
    <ThemeContext.Provider value={{ theme }}>
      <body className={`${inter.className} ${theme}`} data-theme={theme}>
        <nav>
          <a href="/" className="banner">
            <i className="bi bi-code-square"></i>
            <h2>Decipher.dev</h2>
          </a>

          <a href="/">Home</a>
          <a target="_blank" href="https://blog.decipher.dev/">
            Blogs
          </a>
          <a href="/about-me">About me</a>
          <span className="fit"></span>
          <a target="_blank" href="https://medium.com/@deepak-v" title="Medium">
            <i className="bi bi-medium"></i>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/xdeepakv" title="Linkedin">
            <i className="bi bi-linkedin"></i>
          </a>
          <a target="_blank" href="https://github.com/deepakshrma" title="Github">
            <i className="bi bi-github"></i>
          </a>
          <div className="theme-toggle">
            <span suppressHydrationWarning className="pointer" onClick={() => toggleTheme(dark ? "light" : "dark")}>
              <i suppressHydrationWarning className={`"bi bi-${dark ? "sun" : "moon"}`}></i> {dark ? "Light" : "Dark"}
            </span>
          </div>
        </nav>
        <main>{child}</main>
      </body>
    </ThemeContext.Provider>
  );
}
export default Body;
