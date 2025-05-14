import { allBlogs } from "@/.contentlayer/generated";
import {HomeCoverSection} from "@src/components/Home/HomeCoverSection.js";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCoverSection blogs={allBlogs} />
    </main>
  );
}
