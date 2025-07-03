import { allBlogs } from "@/.contentlayer/generated";
import { slug } from "github-slugger";

const Categorypage = ({ params }) => {
  const allCategories = ["all"];

  const blogs = allBlogs.filter((blog) => {
    let include = false;

    blog.tags.forEach((tag) => {
      const slugified = slug(tag);
      
      // Dynamically populate allCategories
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }

      // If the current tag matches the slug in the URL, include this blog
      if (params.slug === "all" || params.slug === slugified) {
        include = true;
      }
    });

    return include;
  });

  // Just for now, return blogs count or something visible (replace with actual JSX)
  return (
    <div>
      <h1>Category: {params.slug}</h1>
      <p>{blogs.length} blog(s) found.</p>
    </div>
  );
};

export default Categorypage;
