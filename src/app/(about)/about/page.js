import Link from "next/link";
import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/skills";

export default function page() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="self-start mx-20 font-semibold text-2xl mt-8 text-dark">
        Have a project in mind? Reach out to me from{" "}
        <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>{" "}
        and let's make it happen!
      </h2>
    </>
  );
}
