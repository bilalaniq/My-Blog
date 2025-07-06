import { format, parseISO } from "date-fns";
import Link from "next/link";
import React from "react";
import { slug as slugify } from "github-slugger"; // renamed to avoid conflict
import ViewCounter from "./ViewCounter";

const Blogdetails = ({ blog  , slug:blogslug}) => {
  const tag = blog?.tags?.[0] || "uncategorized"; // fallback if tag is missing

  return (
    <div className="px-3 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "LLLL d, yyyy")}
      </time>

      <span className="m-3">
        <ViewCounter slug={blogslug}/>
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
