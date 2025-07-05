import React from "react";
import Link from "next/link";
import { cx } from "@/src/utils"; // className merger (like clsx or classnames)

export function Category({ link = "#", name, active, className = "" }) {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2 px-10 rounded-full  border-2 border-dark hover:scale-105 transition-all ease duration-200 m-2",
        active ? "bg-dark text-light" : "bg-light text-dark",
        className
      )}
    >
      #{name}
    </Link>
  );
}
