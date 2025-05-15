import React from "react";
import Link from "next/link";
import { cx } from "@/src/utils"; // or use clsx or classnames if that's what you meant

export function Tag({ link = "#", name, className = "" }) {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-3 px-10 bg-dark text-light rounded-full capitalize font-semibold border-2  border-solid border-light hover:scale-105 transition-all ease duration-200 ",
        className
      )}
    >
      {name}
    </Link>
  );
}
