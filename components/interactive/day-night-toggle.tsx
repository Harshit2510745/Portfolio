"use client";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppState } from "@/components/providers/app-state-provider";

export function DayNightToggle() {
  const { theme, toggleTheme } = useAppState();
  return (
    <Button
      variant="ghost"
      className="h-10 w-10 rounded-full p-0"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}
