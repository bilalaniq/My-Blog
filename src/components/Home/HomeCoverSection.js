import { sortBlogsByDate } from "@/src/utils";
import React from "react";
import Image from "next/image";

export const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogsByDate(blogs);
  const latestBlog = sortedBlogs[0];
  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh]">
        <Image
          src={latestBlog.image.filepath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={latestBlog.image.blurDataURL}
          alt={latestBlog.title}
          fill
          className="w-full h-full object-center object-cover rounded-3xl"
        />
      </article>
    </div>
  );
};
