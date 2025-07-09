"use client";
import React from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-12 text-base xs:text-lg sm:text-xl font-medium leading-relaxed font-in"
    >
      Hello! My name is{" "}
      <input
        type="text"
        placeholder="your name"
        {...register("name", {})}
        className="outline-none  border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray
         focus:border-gray bg-transparent"
      />
      and i want to discuss a potential project. you can email me at{" "}
      <input
        type="email"
        placeholder="your@email"
        {...register("email", {})}
        className="outline-none  border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray
         focus:border-gray bg-transparent"
      />
      or reach out to me on{" "}
      <input
        type="tel"
        placeholder="phone"
        {...register("phone number", {})}
        className="outline-none  border-0 p-0 mx-2 focus:ring-0 placeholder:text-center placeholder:text-lg border-b border-gray
         focus:border-gray bg-transparent"
      />
      Here are some details about my project: <br />
      <textarea
        {...register("project details", {})}
        rows={4}
        placeholder="My project is about..."
        className="w-full outline-none  border-0 p-0 mx-2 focus:ring-0 placeholder:text-lg border-b border-gray
         focus:border-gray bg-transparent"
      />
      <input
        type="submit"
        value={"send request"}
        className="mt-8 font-medium inline-block capitalize text-lg sm:text-xl 
      py-2 sm:py-3 sm:px-8 px-6 border-2 border-solid border-dark dark:border-light rounded"
      />
    </form>
  );
}
