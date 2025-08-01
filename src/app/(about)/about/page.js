import Link from "next/link";
import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Skills from "@/src/components/About/Skills";

// We don't use generateMetadata here because this is not a dynamic route.
export const metadata = {
  title: "About Me",
  description: "Here you can find out more about me, my skills, and my projects.",
};

export default function AboutPage() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 font-semibold text-lg md:text-2xl mt-8 text-dark dark:text-light dark:font-normal">
        Have a project in mind? Reach out to me from{" "}
        <Link
          href="/contact"
          className="underline underline-offset-2 text-accent dark:text-accentDark"
        >
          here
        </Link>{" "}
        and let's make it happen!
      </h2>
    </>
  );
}
