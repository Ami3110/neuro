"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export const ThemeToggle = () => {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("ndf-theme");
    const isDark = stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("ndf-theme", next ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      data-testid="theme-toggle-button"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={toggle}
      className="h-8.5 w-8.5 rounded-full border border-border/60 bg-background/40 hover:bg-muted/80 hover:border-border text-muted-foreground hover:text-foreground transition-all duration-200 active:scale-95"
    >
      {mounted ? (
        dark ? (
          <Sun className="h-4 w-4 text-amber-400 transition-transform duration-300 hover:rotate-45" aria-hidden="true" />
        ) : (
          <Moon className="h-4 w-4 text-slate-600 transition-transform duration-300 hover:-rotate-12" aria-hidden="true" />
        )
      ) : (
        <span className="h-4 w-4" />
      )}
    </Button>
  );
};
