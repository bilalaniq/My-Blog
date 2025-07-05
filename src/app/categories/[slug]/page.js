import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutOne from "@/src/components/Blog/BlogLayoutOne";
import BlogLayoutThree from "@/src/components/Blog/BlogLayoutThree";
import Categories from "@/src/components/Blog/Categories";
import GithubSlugger, { slug } from "github-slugger";

// The generateStaticParams function can be used in combination with dynamic route segments to statically
// generate routes at build time instead of on-demand at request time.

// because in our blog we donot have dynamic categories, we can generate static params which will help in performance

const slugger = new GithubSlugger();

// we will use slugger like this because by using it like this it will keep eye on each of the sluggers

export async function generateStaticParams() {
  const categories = [];
  const path = [{ slug: "all" }];
  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          path.push({ slug: slugified });
        }
      });
    }
  });

  return path;
}

const Categorypage = ({ params }) => {
  const allCategories = ["all"];

  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }

      return slugified === params.slug;
    });
  });

  // Just for now, return blogs count or something visible (replace with actual JSX)
  return (
    <article className="mt-12 flex flex-col text-center text-dark">
      <div className="px-32 flex flex-col">
        <h1 className="text-5xl font-semibold mt-6">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more Categories and expand your knowledge
        </span>
      </div>

      <Categories categories={allCategories} CurrentSlug={params.slug} />

      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-24 px-32">
        {blogs.map((blog, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default Categorypage;
