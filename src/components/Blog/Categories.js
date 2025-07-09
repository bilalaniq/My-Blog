import React from "react";
import { slug } from "github-slugger";
import { Category } from "./Category";

const Categories = ({ categories, CurrentSlug }) => {
  return (
    <div
      className="px-0 md:px-10 sxl:px-20 mt-10 border-t-2 text-dark dark:text-light border-b-2  
    border-solid border-dark dark:border-light py-4 flex items-start flex-wrap
    font-medium mx-5 md:mx-10"
    >
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${slug(cat)}`} // Better to slugify the URL too
          name={cat}
          active={CurrentSlug === slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
