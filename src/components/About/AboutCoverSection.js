import React from "react";
import Image from "next/image";

const AboutCoverSection = () => {
  return (
    <section
      className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light 
      flex flex-col md:flex-row items-center justify-center text-dark dark:text-light"
    >
      <div className="relative w-full md:w-1/2 h-[300px] md:h-full border-b-2 md:border-b-0 md:border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Image
          src="/character.png"
          alt="nullsect"
          fill
          className="object-contain object-center"
          priority
          sizes=" (max-width: 768px) 100vw, (max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 sm:px-10 md:px-16 py-6">
        <h2 className="font-bold capitalize text-3xl xs:text-4xl sxl:text-5xl text-center lg:text-left">
          Grind Now, Shine Later!
        </h2>
        <p className="font-medium capitalize mt-4 text-base leading-relaxed sm:leading-loose">
          Hi, I'm Muhammad Bilal. I am a passionate Cybersecurity Enthusiast
          currently pursuing a Bachelor of Science in Cybersecurity at Air
          University Islamabad, with plans to graduate in 2027.
          <br />
          I am constantly learning and staying updated on the latest trends and
          challenges in the cybersecurity field. My focus includes offensive
          security, malware analysis, and digital forensics.
          <br />
          My goal is to contribute to making the digital world a safer place and
          to further enhance my expertise in this ever-evolving domain.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
