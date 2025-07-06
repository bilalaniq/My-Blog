"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { LinkedinIcon, GithubIcon, InstagramIcon } from "../icons";
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
    <footer className="mt-16 rounded-2xl bg-dark m-10 flex flex-col items-center text-light">
      <h3 className="text-4xl px-4 font-medium capitalize mb-2 mt-16">
        My Blog
      </h3>
      <p className="mt-5 px-4 text-center w-3/5 font-light text-base">
        &copy; {new Date().getFullYear()} Bilal. All rights reserved.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 min-w-[384px] flex items-stretch bg-light rounded p-2 mx-40"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: "Email is required" })}
          className="bg-transparent w-full pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b  mr-2 pd-1"
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
        <input
          type="submit"
          value="Subscribe"
          className="bg-dark text-light cursor-pointer font-medium rounded px-5 py-1"
        />
      </form>

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
          <GithubIcon className="w-6 h-6 fill-light" />
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

      <div className="mt-24 w-full relative font-medium border-t border-solid border-light py-6 px-8">
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
