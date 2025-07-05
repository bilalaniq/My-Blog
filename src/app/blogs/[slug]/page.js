import { allBlogs } from "@/.contentlayer/generated";
import Blogdetails from "@/src/components/Blog/Blogdetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import { Tag } from "@/src/components/Elements/Tags";
import Image from "next/image";


// The generateStaticParams function can be used in combination with dynamic route segments to statically
// generate routes at build time instead of on-demand at request time.

// because in our blog we donot have dynamic blogs, we can generate static params which will help in performance

export async function generateStaticParams() {
  return allBlogs.map((blog) => {
    {
      slug: blog._raw.flattenedPath;
    }
  });
}

export default function BlogPage({ params }) {
  const blog = allBlogs.find((blog) => blog._raw.flattenedPath === params.slug);
  const imagePath = blog.image?.filePath?.replace("../public", "") || "";

  return (
    <article>
      <div className="mb-8 text-center relative w-full h-[70vh] bg-dark overflow-hidden">
        {/* Background image */}
        <Image
          src={imagePath}
          placeholder="blur"
          blurDataURL={blog.image?.blurhashDataUrl || ""}
          alt={blog.title || "Cover Image"}
          width={blog.image?.width}
          height={blog.image?.height}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
        />

        <div className="absolute inset-0 bg-black/50 z-10" />

        <div className="w-full z-20 relative flex flex-col items-center justify-center h-full">
          <Tag
            className="px-6 text-sm py-2"
            name={blog.tags[0]}
            link={`/categories/${blog.tags[0]}`}
          />
          <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal w-5/6">
            {blog.title}
          </h1>
        </div>
      </div>

      <Blogdetails blog={blog} slug={params.slug} />

      <div className="grid grid-cols-12 gap-16 mt-8 px-10">
        <div className="col-span-4">
          <details
            className="border-[1px] border-solid border-dark text-dark rounded-lg p-4 sticky top-6
          max-h-[120vh] overflow-hidden overflow-y-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              Table of Content
            </summary>
            <ul className="mt-4 font-in text-base">
              {blog.toc.map((heading) => {
                return (
                  <li key={`#${heading.slug}`} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      data-level={heading.level}
                      className="data-[level=two]:pl-0 data-[level=two]:pt-2
                    data-[level=two]:border-t border-solid border-dark/40
                    
                    data-[level=three]:pl-6
                    flex items-center justify-start
                    "
                    >
                      {heading.level === "three" ? (
                        <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                          &nbsp;
                        </span>
                      ) : null}
                      {/* used for adding the bullpoints*/}

                      <a href={`#${heading.slug}`} className="group">
                        <span className="group-hover:text-[#7B00D3] hover:underline">
                          {heading.text}
                        </span>
                      </a>
                    </a>
                  </li>
                );
              })}
            </ul>
          </details>
        </div>
        <RenderMdx blog={blog} />
      </div>
    </article>
  );
}
