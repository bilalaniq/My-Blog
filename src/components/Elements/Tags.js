import React from "react";
import Link from "next/link";
import { cx } from "@/src/utils"; // your classNames utility
import GithubSlugger from "github-slugger";

export function Tag({ link = "#", name, className = "" }) {
  const slugger = new GithubSlugger();

  const parts = link.split("/").filter(Boolean); // remove empty strings
  const sluggedParts = parts.map((p) => slugger.slug(p));
  const finalLink = "/" + sluggedParts.join("/");

  return (
    <Link
      href={finalLink}
      className={cx(
        `inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark text-light rounded-full capitalize font-semibold border-2
         border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base`,
        className
      )}
    >
      {name}
    </Link>
  );
}
