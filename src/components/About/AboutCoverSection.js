import React from "react";
import Image from "next/image";

const AboutCoverSection = () => {
  return (
    <section className="w-full h-[75vh] border-b-2 border-solid border-dark flex flex-row items-center justify-center text-dark">
      <div className="relative w-1/2 h-full border-r-2 border-solid border-dark flex justify-center">
        <Image
          src="/character.png"
          alt="nullsect"
          fill
          className="object-contain object-center"
        />
      </div>

      <div className="w-1/2 flex flex-col text-left items-start justify-center px-16">
        <h2 className="font-bold captalize text-6xl ">Grind Now, Shine Later!</h2>
        <p className="font-medium captalize mt-4 text-base">
          Hi, I'm Muhammad Bilal. I am a passionate Cybersecurity Enthusiast
          currently pursuing a Bachelor of Science in Cybersecurity at Air
          University Islamabad, with plans to graduate in 2027.  I am constantly learning and staying updated on the
          latest trends and challenges in the cybersecurity field. My goal is to
          contribute to making the digital world a safer place and further
          enhance my expertise in this ever-evolving domain.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
