import { makeSource, defineDocumentType } from "@contentlayer/source-files";
// import { Life_Savers } from "next/font/google";
import readingTime from "reading-time";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import GithubSlugger from "github-slugger";

const Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/*.mdx",
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    publishedAt: {
      type: "date",
      required: true,
    },
    updatedAt: {
      type: "date",
      required: true,
    },
    description: {
      type: "string",
      required: true,
    },
    image: {
      type: "image",
      required: true,
    },
    isPublished: {
      type: "boolean",
      default: true,
    },
    author: {
      type: "string",
      required: true,
    },
    tags: {
      type: "list",
      of: { type: "string" },
    },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/blogs/${doc._raw.flattenedPath}`,
    },
    readingTime: {
      type: "json",
      resolve: (doc) => readingTime(doc.body.raw || ""),
    },
    toc: {
      type: "json",
      resolve: async (doc) => {
        const regularExp = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
        const slugger = new GithubSlugger();

        const headings = Array.from(doc.body.raw.matchAll(regularExp)).map(
          (match) => {
            const flag = match.groups?.flag;
            const content = match.groups?.content;

            return {
              level:
                flag?.length === 1
                  ? "one"
                  : flag?.length === 2
                  ? "two"
                  : flag?.length === 3
                  ? "three"
                  : flag?.length === 4
                  ? "four"
                  : flag?.length === 5
                  ? "five"
                  : "six",
              text: content,
              slug: content ? slugger.slug(content) : undefined,
            };
          }
        );

        return headings;
      },
    },
  },
}));

const codeOptions = {
  theme: "github-dark",
};

// for more themes go to https://rehype-pretty.pages.dev/

export default makeSource({
  contentDirPath: "content",
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: "append" }],
      [rehypePrettyCode, { codeOptions }],
    ],
  },
});

//remark is an md parser that parses the mdx file into an ast
//rehype is an html parser that parses the ast into html

// they are used to add plugins to the mdx file

//rehypeSlug is used to add ids to the headings in the mdx file
//rehypeAutolinkHeadings is used to add links to the headings in the mdx file

//remarkGfm is used to add support for github flavored markdown
