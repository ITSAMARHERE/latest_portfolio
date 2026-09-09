import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(saved);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initial = prefersDark ? "dark" : "light";
      // Default to dark theme for developer aesthetic if no preference
      setTheme(initial);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(initial);
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(next);
  };

  if (!mounted) {
    return (
      <div className={`size-9 rounded-full border border-border/80 bg-surface/50 ${className}`} />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      className={`relative grid size-9 place-items-center rounded-full border border-border/80 bg-surface/50 hover:bg-surface hover:border-accent/50 text-muted-foreground hover:text-foreground transition-all duration-300 shadow-sm cursor-pointer ${className}`}
    >
      <Sun
        className={`size-4 transition-all duration-500 ${
          theme === "dark"
            ? "scale-0 rotate-90 opacity-0 absolute"
            : "scale-100 rotate-0 opacity-100 text-accent"
        }`}
      />
      <Moon
        className={`size-4 transition-all duration-500 ${
          theme === "dark"
            ? "scale-100 rotate-0 opacity-100 text-accent"
            : "scale-0 -rotate-90 opacity-0 absolute"
        }`}
      />
    </button>
  );
}
