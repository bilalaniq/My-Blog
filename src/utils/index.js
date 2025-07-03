import { compareDesc, parse, parseISO } from "date-fns";

export const cx = (...classNames) => {
  return classNames.filter(Boolean).join(" ");
}; // an helper function used to join two class names

export const sortBlogsByDate = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};


