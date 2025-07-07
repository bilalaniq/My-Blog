// app/layout.js or app/layout.tsx
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { cx } from "@/src/utils";
import siteMetadata from "../utils/siteMetadata";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [
      {
        url: siteMetadata.socialBanner || siteMetadata.siteLogo,
        width: 1200,
        height: 630,
        alt: siteMetadata.title,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.socialBanner || siteMetadata.siteLogo],
    creator: siteMetadata.twitter || undefined,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
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

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
