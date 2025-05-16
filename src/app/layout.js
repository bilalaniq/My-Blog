// app/layout.js or app/layout.tsx
import "./globals.css";
import { Inter, Manrope } from "next/font/google";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";
import { cx } from "@/src/utils";

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
  title: "My Blog",
  description: "Eco-friendly travel and tech blog by Bilal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cx(inter.variable, manrope.variable, "font-mr bg-light text-dark")}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
