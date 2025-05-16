import { sortBlogsByDate } from "@/src/utils";
import React from "react";
import Image from "next/image";
import { Tag } from "../Elements/Tags";
import Link from "next/link";

export const HomeCoverSection = ({ blogs }) => {
  const sortedBlogs = sortBlogsByDate(blogs);
  const latestBlog = sortedBlogs?.[0];

  if (!latestBlog || !latestBlog.image || !latestBlog.image.filePath) {
    return (
      <div className="w-full text-center p-10">
        <p className="text-lg text-red-500">No valid blog cover image found.</p>
      </div>
    );
  }

  const imagePath = latestBlog.image.filePath.replace("../public", "");

  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-10 relative h-[85vh]">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full
         bg-gradient-to-b from-transparent from-0%  to-dark/90 rounded-3xl  z-0"
        />
        <Image
          src={imagePath}
          placeholder="blur"
          blurDataURL={latestBlog.image.blurhashDataUrl || ""}
          alt={latestBlog.title || "Cover Image"}
          fill
          className="w-full h-full object-center object-cover rounded-3xl -z-10"
        />

        <div className="p-16 flex flex-col items-start justify-center w-3/4 text-white z-0">
          <Tag
            link={`/categories/${latestBlog.tags[0]}`}
            name={latestBlog.tags[0]}
          />
          <Link href={latestBlog.url} className="mt-6">
            <h1 className="font-bold capitalize text-4xl">
              <span
                className="bg-gradient-to-r from-accent to-accent bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom
               bg-no-repeat transition-[background-size] duration-500"
              >
                {latestBlog.title}
              </span>
            </h1>
          </Link>

          <p className="inline-block mt-4 text-xl font-in">
            {latestBlog.description}
          </p>
        </div>
      </article>
    </div>
  );
};
