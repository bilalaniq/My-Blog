"use client";

import { theme } from "@/src/utils/siteMetadata";

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
}

// use "use" keyword before you create a custom hook the file name should also be start with use
