import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function ThemeSelector() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.querySelector("body")?.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() =>
        setTheme((current) => (current === "light" ? "dark" : "light"))
      }
    >
      {theme === "light" ? <Sun /> : <Moon />}
    </button>
  );
}

export default ThemeSelector;
