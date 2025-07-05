import React from "react";

const skillslist = [
  "nextjs",
  "Reverse Engineering",
  "Malware Analysis",
  "Binary Exploitation",
  "Web Exploitation",
  "Network Security",
  "Python",
  "C/C++",
  "JavaScript",
  "Electron",
  "Embedded Systems",
  "web Development",
];

const Skills = () => {
  return (
    <section className="w-full flex flex-col p-20 border-b-2 border-solid border-dark text-dark">
      <span className="font-semibold text-4xl text-accent">
        I'm comfortable in...
      </span>
      <ul className="flex flex-wrap mt-8 justify-start">
        {skillslist.map((item, index) => {
          return (
            <li
              className="font-semibold inline-block capitalize text-2xl py-5 px-12 border-2 border-solid  border-dark
                rounded  mr-6  mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer"
              key={index}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Skills;
