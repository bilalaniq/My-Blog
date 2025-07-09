import React from "react";
import { Tag } from "../Elements/Tags";
import Link from "next/link";
import Image from "next/image";

function BlogLayoutOne({ blog }) {
  if (!blog) return null;
  const imagePath = blog.image?.filePath?.replace("../public", "") || "";

  return (
    <div className="group inline-block overflow-hidden rounded-xl relative">
      <div
        className="absolute inset-0 h-full w-full z-10
             bg-gradient-to-b from-transparent to-dark/90 rounded-xl pointer-events-none"
      />

      <Image
        src={imagePath}
        placeholder="blur"
        blurDataURL={blog.image?.blurhashDataUrl || ""}
        alt={blog.title || "Cover Image"}
        width={blog.image?.width}
        height={blog.image?.height}
        className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all
          duration-300"
      />
      <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
        <Tag
          link={`/categories/${blog.tags?.[0] || ""}`}
          name={blog.tags?.[0] || "Uncategorized"}
          className="px-6 text-xs sm:text-sm py-1 sm:py-2 !border"
        />
        <Link href={blog.url || "#"} className="mt-6">
          <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4 ">
            <span
              className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/70 dark:to-accentDark/70
               bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom
                     bg-no-repeat transition-[background-size] duration-500"
            >
              {blog.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default BlogLayoutOne;
