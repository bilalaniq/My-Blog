import React from "react";
import { slug } from "github-slugger";
import { Category } from "./Category";

const Categories = ({ categories, CurrentSlug }) => {
  return (
    <div className="px-20 mt-10 border-t-2 text-dark border-b-2  border-solid border-dark py-4 flex items-start flex-wrap
    font-medium mx-10">
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
