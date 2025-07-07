"use client";

import { useEffect, useState } from "react";

export function useThemeSwitch() {
  const perfectDarkQuery = "(prefers-color-scheme: dark)";
  const storageKey = "theme";

  const toggleTheme = (theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.localStorage.setItem(storageKey, theme);
  };

  const getUserpreference = () => {
    const userPref = window.localStorage.getItem(storageKey);
    if (userPref) {
      return userPref;
    }
    return window.matchMedia(perfectDarkQuery).matches ? "dark" : "light";
  };

  const [Mode, setMode] = useState(() => {
    if (typeof window !== "undefined") {
      const userPref = window.localStorage.getItem(storageKey);
      if (userPref) return userPref;
      return window.matchMedia(perfectDarkQuery).matches ? "dark" : "light";
    }
    return "light"; // during SSR
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(perfectDarkQuery);
    const handleChange = () => {
      const newMode = getUserpreference();
      setMode(newMode);
      toggleTheme(newMode);
    };

    handleChange(); // Apply initial theme

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    toggleTheme(Mode);
  }, [Mode]);

  return [Mode, setMode];
}

// use "use" keyword before you create a custom hook the file name should also be start with use
