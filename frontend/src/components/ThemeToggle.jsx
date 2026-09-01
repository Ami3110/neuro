"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export const ThemeToggle = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    // Read from localStorage on client only (safe from SSR)
    const stored = localStorage.getItem("ndf-theme");
    if (stored === "dark") setDark(true);
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("ndf-theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <Button
      variant="ghost"
      size="icon"
      data-testid="theme-toggle-button"
      aria-label={dark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => setDark((d) => !d)}
      className="rounded-full"
    >
      {dark ? <Sun className="h-5 w-5" aria-hidden="true" /> : <Moon className="h-5 w-5" aria-hidden="true" />}
    </Button>
  );
};
