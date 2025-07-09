import React from "react";
import Link from "next/link";
import { cx } from "@/src/utils"; // className merger (like clsx or classnames)

export function Category({ link = "#", name, active, className = "" }) {
  return (
    <Link
      href={link}
      className={cx(
        `inline-block py-1.5 md:py-2 px-6 md:px-10 rounded-full  border-2 border-dark dark:border-light 
        hover:scale-105 transition-all ease duration-200 m-2`,
        active
          ? "bg-dark text-light dark:bg-light dark:text-dark"
          : "bg-light text-dark dark:bg-dark dark:text-light",
        className
      )}
    >
      #{name}
    </Link>
  );
}
