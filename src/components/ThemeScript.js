"use client";

import Script from "next/script";


const ThemeScript = () => {
  return (
    <Script id="theme-switcher" strategy="beforeInteractive">
      {`
    (function () {
      try {
        const theme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (theme === "dark" || (!theme && prefersDark)) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } catch (e) {
        console.error("Theme load error:", e);
      }
    })();
  `}
    </Script>
  );
};

export default ThemeScript;
