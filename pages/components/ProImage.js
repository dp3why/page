import Image from "next/image";
import Link from "next/link";
import React from "react";
import dessert0 from "../public/Thumbnails.png";
import dessert3 from "../public/movie.png";
import ins3 from "../public/ins.png";
import dessert2 from "../public/search.png";
import loginIns from "../public/ins-login.png";
import ins2 from "../public/ins2.png";
import dessert1 from "../public/login.png";
const ProImage = () => {
  return (
    <section id="projects2" className=" snap-center p-10">
      <div>
        <h3 className="text-3xl font-bold py-1  text-orange-600  dark:text-orange-300  ">
          Projects
        </h3>
        <p className="text-md text-justify py-2 max-w-4xl leading-6 text-gray-800 dark:text-gray-200">
          My coursework and involvement in numerous projects have granted me
          hands-on expertise in both front-end and back-end development, and I
          have become well-versed with tools like ReactJS, NextJS, Spring Boot,
          and Django, etc. Furthermore, I have utilized my knowledge of machine
          learning, with TensorFlow, Keras, and Scikit-learn, to solve
          real-world problems.
        </p>
      </div>
      <div className="flex">
        <h1 className="text-start font-bold text-2xl my-1 dark:text-white">
          Dessert Movie Recommendation App
        </h1>
      </div>
      {/* Large Image */}
      <Link href="https://dessertai.vercel.app">
        <Image
          className="cursor-pointer z-10 brightness-90 hover:brightness-110 
         rounded-lg object-cover transition duration-300 ease-in-out"
          alt="desserts-0"
          width={"100%"}
          height={"45%"}
          layout="responsive"
          src={dessert0}
        />
      </Link>
      <div className="flex  flex-col lg:flex-row gap-10 py-10 ">
        <div className=" flex-1 ">
          <Link href="https://dessertai.vercel.app/signin">
            <Image
              className="cursor-pointer z-10 brightness-90 hover:brightness-110 transition duration-300 ease-in-out rounded-lg object-cover"
              alt="img"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={dessert1}
            />
          </Link>
        </div>

        <Link href="https://dessertai.vercel.app/search">
          <div className="relative flex-1">
            <Image
              className="cursor-pointer brightness-90 hover:brightness-110 transition duration-300 ease-in-out rounded-lg object-cover"
              alt="img"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={dessert2}
            />
          </div>
        </Link>
        <div className="  flex-1">
          <Image
            className=" brightness-90  z-10 hover:brightness-110 transition duration-300 ease-in-out rounded-lg object-cover"
            alt="dessert3"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={dessert3}
          />
        </div>
      </div>
      <h1 className="text-start font-bold text-2xl my-1 dark:text-white">
        Social Media App Imitating Instagram
      </h1>
      {/* APP 2 */}
      <div className="flex  flex-col lg:flex-row gap-10 py-10 ">
        <div className=" flex-1 ">
          <Link href="https://instdemo.netlify.app/">
            <Image
              className="cursor-pointer brightness-90 hover:brightness-110 transition duration-300 ease-in-out rounded-lg object-cover"
              alt="instgram"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={loginIns}
            />
          </Link>
        </div>

        <Link href="https://lambent-praline-ebd115.netlify.app/">
          <div className="relative flex-1">
            <Image
              className="cursor-pointer brightness-90 hover:brightness-110 transition duration-300 ease-in-out rounded-lg object-cover"
              alt="ins-2"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={ins2}
            />
          </div>
        </Link>
        <div className="  flex-1">
          <Image
            className=" brightness-90 hover:brightness-110 transition duration-300 ease-in-out rounded-lg object-cover"
            alt="ins-3"
            width={"100%"}
            height={"100%"}
            layout="responsive"
            src={ins3}
          />
        </div>
      </div>
    </section>
  );
};

export default ProImage;
