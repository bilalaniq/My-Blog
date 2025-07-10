"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/src/utils/siteMetadata";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className=" text-2xl sm:text-3xl lg:text-4xl px-4 font-medium capitalize mb-2 mt-16 flex items-center justify-center gap-4">
        <span>Stories</span>
        <span className="text-5xl font-bold leading-none">|</span>
        <span>Guides</span>
        <span className="text-5xl font-bold leading-none">|</span>
        <span>Updates</span>
      </h3>

      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
        Subscribe to stay sharp — stories, guides, and updates, straight to you.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-full max-w-[90%] sm:max-w-sm flex items-stretch bg-light rounded p-2 sm:p-2.5 mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
          className="bg-transparent text-dark text-sm sm:text-base focus:border-dark focus:ring-0 border-0 border-b border-dark mr-1.5 py-1 px-2 w-[65%] sm:w-full"
        />
        <input
          type="submit"
          value="Subscribe"
          className="bg-dark text-light cursor-pointer font-medium rounded text-sm sm:text-base px-2 sm:px-4 py-1 sm:py-1.5 w-[35%] sm:w-auto"
        />
      </form>

      {errors.email && (
        <span className="text-red-500 text-sm mt-2 block text-center">
          {errors.email.message}
        </span>
      )}

      <div className="flex items-center mt-8 gap-x-4">
        <a
          href={siteMetadata.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <LinkedinIcon className="w-6 h-6" />
        </a>
        <a
          href={siteMetadata.github}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <GithubIcon className="w-6 h-6 fill-light dark:fill-dark" />
        </a>
        <a
          href={siteMetadata.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-125"
        >
          <InstagramIcon style={{ width: "45px", height: "45px" }} />
        </a>
      </div>

      <div className="mt-16 md:mt-24 w-full relative font-medium border-t border-solid border-light py-6 px-8">
        <div className="flex flex-col md:flex-row items-center justify-between w-full text-center gap-4">
          <span className="md:text-left w-full md:w-1/3">
            &copy; {new Date().getFullYear()} Bilal. All rights reserved.
          </span>

          <Link href="/sitemap.xml" className="underline w-full md:w-1/3">
            sitemap.xml
          </Link>

          <div className="md:text-right w-full md:w-1/3">
            Made with &hearts; by Bilal
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
