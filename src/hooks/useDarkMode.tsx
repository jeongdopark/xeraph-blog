import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "init";

export const useDarkMode = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>("init");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    window.localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") document.documentElement.classList.add("dark");
    if (newTheme === "light") document.documentElement.classList.remove("dark");
  };

  return [theme, toggleTheme];
};
