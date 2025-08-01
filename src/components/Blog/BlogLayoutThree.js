import Link from "next/link";
import React from "react";
import Image from "next/image";
import { format } from "date-fns";

function BlogLayoutThree({ blog }) {
  const imagePath = blog.image?.filePath?.replace("../public", "") || "";
  return (
    <div className="group flex flex-col items-center text-dark dark:text-light">
      <Link href={blog.url} className="h-full rounded-xl overflow-hidden">
        <Image
          src={imagePath}
          placeholder="blur"
          blurDataURL={blog.image?.blurhashDataUrl || ""}
          alt={blog.title || "Cover Image"}
          width={blog.image?.width}
          height={blog.image?.height}
          className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all
          duration-300"
          sizes=" (max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-col mt-4 w-full">
        <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
          {" "}
          {blog.tags[0]}{" "}
        </span>
        <Link href={blog.url || "#"} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-base sm:text-lg ">
            <span 
              className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/70 dark:to-accentDark/70 bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom
                     bg-no-repeat transition-[background-size] duration-500"
            >
              {blog.title}
            </span>
          </h2>
        </Link>
        <span className="capatilize text-dark/50 dark:text-light/50  font-semibold text-sm sm:text-base">
          {format(new Date(blog.publishedAt), "MMMM dd,yyyy")}
        </span>
      </div>
    </div>
  );
}

export default BlogLayoutThree;
