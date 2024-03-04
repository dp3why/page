import React from "react";

const HeroSection = () => {
  return (
    <section id="header" className="snap-center min-h-[60vh]  inset-0   pb-10">
      <div
        id="hero"
        className="flex flex-wrap px-3 py-5 w-screen 
      dark:bg-gray-900
       text-center justify-center items-center 
      lg:px-[10rem] 
      xl:px-[12rem]"
      >
        <div className="flex flex-col justify-center ">
          <h2
            className="text-2xl xl:text-3xl px-3 text-black font-roboto font-semibold 
       dark:text-white text-start"
          >
            Hi!
          </h2>
          <h1
            className="text-start text-4xl xl:text-5xl px-3 py-2 text-orange-600 font-roboto font-semibold
       dark:text-orange-300 "
          >
            I&apos;m Hongyi Wang
          </h1>

          <p
            className="text-start text-sm md:text-md lg:text-xl
          pb-5 px-3   sm:w-[30rem]  max-w-md mt-3
         text-gray-800 dark:text-gray-100 font-roboto
         "
          >
            I&apos;m enthusiastic about web development and software
            engineering, and would like to apply my skills in solving real world
            problems.
          </p>
        </div>
        {/* <div className="flex flex-auto rounded-full items-center justify-center "> */}
        {/*eslint-disable-next-line @next/next/no-img-element*/}
        <img
          className="rounded-full object-cover w-[350px] h-[350px]"
          src="/hero.png"
          alt="heropage"
        />
        {/* </div> */}
      </div>
    </section>
  );
};

export default HeroSection;
