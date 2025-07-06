import { HomeCoverSection } from "../components/Home/HomeCoverSection";
import { Featuredposts } from "../components/Home/Featuredposts";
import { Recentposts } from "../components/Home/Recentposts";
import { allBlogs } from "@/.contentlayer/generated";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
      <Featuredposts blogs={allBlogs} />
      <Recentposts blogs={allBlogs} />
    </main>
  );
}
