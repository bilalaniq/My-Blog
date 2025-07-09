import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { slug as slugify } from "github-slugger"; // renamed to avoid conflict
import ViewCounter from "./ViewCounter";

const Blogdetails = ({ blog, slug: blogslug }) => {
  const tag = blog?.tags?.[0] || "uncategorized"; // fallback if tag is missing

  return (
    <div
      className="px-2 md:px-10 bg-accent dark:bg-accentDark text-light dark:text-dark py-2 flex items-center 
    justify-around flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-lg"
    >
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
      </time>

      <span className="m-3">
        <ViewCounter slug={blogslug} />
      </span>

      <div className="m-3">{blog.readingTime?.text}</div>

      <Link
        href={`/categories/${slugify(tag)}`}
        className="m-3 hover:underline"
      >
        #{tag}
      </Link>
    </div>
  );
};

export default Blogdetails;
