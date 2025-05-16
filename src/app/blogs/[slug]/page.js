import { allBlogs } from "@/.contentlayer/generated";
import Blogdetails from "@/src/components/Blog/Blogdetails";
import RenderMdx from "@/src/components/Blog/RenderMdx";
import { Tag } from "@/src/components/Elements/Tags";
import Image from "next/image";

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
        <div className="col-span-4">top</div>
        <RenderMdx blog={blog}/>
      </div>
    </article>
  );
}
