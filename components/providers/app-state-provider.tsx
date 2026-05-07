"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren
} from "react";

type ThemeMode = "dark" | "light";

type AppState = {
  theme: ThemeMode;
  spiderSense: boolean;
  toggleTheme: () => void;
  setSpiderSense: (value: boolean) => void;
};

const AppStateContext = createContext<AppState | null>(null);

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

export function AppStateProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<ThemeMode>("dark");
  const [spiderSense, setSpiderSense] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const seq: string[] = [];
    const handleKey = (event: KeyboardEvent) => {
      seq.push(event.key);
      if (seq.length > KONAMI.length) {
        seq.shift();
      }
      if (KONAMI.every((k, i) => seq[i] === k)) {
        setSpiderSense((prev) => !prev);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  const value = useMemo(
    () => ({ theme, spiderSense, toggleTheme, setSpiderSense }),
    [theme, spiderSense, toggleTheme]
  );

  return (
    <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used inside AppStateProvider");
  }
  return context;
}
