import Head from "next/head";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
  AiFillMail,
  AiFillCode,
  AiFillSafetyCertificate,
  AiFillCodeSandboxSquare,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { IoSchool } from "react-icons/io5";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import herop from "../public/hero.png";
import dessert0 from "../public/Thumbnails.png";
import dessert3 from "../public/movie.png";
import ins3 from "../public/ins.png";
import { Link as Scroll } from "react-scroll";
import dessert2 from "../public/search.png";
import loginIns from "../public/ins-login.png";
import ins2 from "../public/ins2.png";
import dessert1 from "../public/login.png";
import Link from "next/link";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
} from "@mui/material";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const cards = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>HY</title>
        <meta name="description" content="personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* =================== NavBar ======================= */}
      <nav
        className="sticky py-8 px-5 lg:px-10 xl:px-[10rem] 
        z-100
      bg-white dark:bg-gray-900 w-screen
      inset-0  flex justify-between dark:text-white"
      >
        <h1 className="font-burtons mr-5 font-bold text-xl">dp3why</h1>
        <ul className="flex items-center gap-2 text-sm">
          <li className="mr-2 hidden sm:block cursor-pointer">
            <h3>About</h3>
          </li>

          <li className="mr-2 hidden sm:block cursor-pointer">
            <Scroll to="skills" smooth={false}>
              <h3>Skills</h3>
            </Scroll>
          </li>
          <li className="mr-2 hidden sm:block cursor-pointer">
            <Scroll to="projects" smooth={false}>
              <h3>Projects</h3>
            </Scroll>
          </li>
          <li className="mr-4 hidden sm:block cursor-pointer">
            <Scroll to="education" smooth={false}>
              <h3>Education</h3>
            </Scroll>
          </li>
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className=" cursor-pointer text-2xl"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-r from-orange-500 to-orange-300
                   text-white px-4 py-2 border-none rounded-md ml-8"
              href="mailto:dp3why@gmail.com"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {/*  ==== main page  === */}
      <main
        className="    dark:bg-gray-900  
      justify-center  "
      >
        {/* =================== p1 Hero ======================= */}
        <section
          id="header"
          className="snap-center min-h-[60vh]  
      
          inset-0   pb-10"
        >
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
                engineering, and would like to apply my skills in solving real
                world problems.
              </p>
            </div>
            {/* <div className="flex flex-auto rounded-full items-center justify-center "> */}
            <Image
              className=" flex flex-1 rounded-full z-20"
              src={herop}
              alt="heropage"
              width={350}
              height={350}
              objectFit="cover"
            />
            {/* </div> */}
          </div>
          <div
            className="text-5xl flex cursor-pointer 
          justify-center md:gap-[3rem] lg:gap-[4rem] 
          gap-[2rem] py-3 mt-5 lg:mt-12 text-gray-600 dark:text-gray-400"
          >
            <Link href="https://twitter.com/dp3why">
              <AiFillTwitterCircle className="dark:hover:text-white" />
            </Link>
            <Link href="https://www.linkedin.com/in/hongyiusc/">
              <AiFillLinkedin className="dark:hover:text-white" />
            </Link>
            <Link href="https://github.com/dp3why">
              <AiFillGithub className="dark:hover:text-white" />
            </Link>
            <AiFillGoogleCircle className="dark:hover:text-white" />
            <Link href="mailto:dp3why@gmail.com">
              <AiFillMail className="dark:hover:text-white" />
            </Link>
          </div>
        </section>
        {/*  ============== p2 Project cards ============== */}
        <section
          id="projects"
          className="snap-center 
              overflow-hidden
           w-screen p-20"
        >
          <Grid container spacing={10} className="">
            {cards.map((card) => (
              <Grid item key={card} sm={12} md={6} lg={4}>
                <Card>
                  {/* image */}
                  <CardMedia
                    className="h-[40vh] "
                    image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len
                    title="Image title"
                  />
                  <CardContent className="">
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe
                      the content.
                    </Typography>
                  </CardContent>
                  <CardActions></CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </section>

        {/* ===================Skills======================= */}
        <section
          id="skills"
          className="snap-center bg-gradient-to-tl dark:bg-gray-400 w-screen p-10"
        >
          <div>
            <h3 className="text-3xl py-1 font-bold">Skills</h3>
            <p className="text-md text-justify   py-2 leading-6 max-w-4xl text-gray-800">
              As a master student in Applied Data Science, I have acquired a
              profound comprehension of the theoretical and practical aspects of
              computer science, software development and cloud computing.
            </p>
          </div>
          <div id="lang" className="md:flex gap-8">
            {/* ============ 1 ========== */}
            <div
              className="text-center justify-start items-center flex flex-col
             shadow-lg p-10 rounded-xl my-10 bg-gray-100 hover:bg-gray-200 flex-1"
            >
              <div className="text-5xl text-center">
                <AiFillCodeSandboxSquare />
              </div>
              <h3 className="text-lg text-black font-bold my-2 ">
                Tools and Software
              </h3>

              <h4 className="py-1 text-sm text-gray-800">
                ReactJS / NextJS / Django
              </h4>
              <h4 className="py-1 text-sm text-gray-800">
                React Native / Go Fiber
              </h4>
              <h4 className="py-1 text-sm text-gray-800">MySQL / MongoDB</h4>
              <h4 className="py-1 text-sm text-gray-800">
                DynamoDB / Neo4J / Redis
              </h4>
              <h4 className="py-1 text-sm text-gray-800">
                Hadoop / PySpark / AWS
              </h4>
            </div>
            {/* ============ 2 ========== */}
            <div
              className="text-center justify-start items-center flex flex-col 
            shadow-lg p-10 rounded-xl my-10 bg-gray-100 hover:bg-gray-200 flex-1"
            >
              <div className="text-5xl text-center">
                <AiFillCode />
              </div>
              <h3 className="text-lg font-bold text-black my-2 ">
                Programming Skills
              </h3>
              <h4 className="py-1 text-gray-800 ">Java / Python / Go</h4>
              <h4 className="py-1  text-gray-800 ">JavaScript / HTML / CSS</h4>
              <h4 className="py-1  text-gray-800 ">Kotlin / Cypher / SQL</h4>
            </div>
            {/* ============ 3 ========== */}
            <div
              className="text-center justify-start items-center flex flex-col 
            shadow-lg p-10 rounded-xl my-10 bg-gray-100 hover:bg-gray-200 flex-1"
            >
              <div className="text-5xl text-center">
                <AiFillSafetyCertificate />
              </div>
              <h3 className="text-lg font-bold my-2 text-black">
                Certification
              </h3>

              <h4 className="py-2 text-gray-800">Google Cloud Certified:</h4>
              <p className="text-gray-800 ">Cloud Digital Leader</p>
            </div>
          </div>
        </section>
        {/* ========== projects  ==========*/}
        <section id="projects2" className=" snap-center p-10">
          <div>
            <h3 className="text-3xl font-bold py-1  text-orange-600  dark:text-orange-300  ">
              Projects
            </h3>
            <p className="text-md text-justify py-2 max-w-4xl leading-6 text-gray-800 dark:text-gray-200">
              My coursework and involvement in numerous projects have granted me
              hands-on expertise in both front-end and back-end development, and
              I have become well-versed with tools like ReactJS, NextJS, Spring
              Boot, and Django, etc. Furthermore, I have utilized my knowledge
              of machine learning, with TensorFlow, Keras, and Scikit-learn, to
              solve real-world problems.
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
              className="cursor-pointer  brightness-90 hover:brightness-110  rounded-lg object-cover transition duration-300 ease-in-out"
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
                  className="cursor-pointer brightness-90 hover:brightness-110 transition duration-300 ease-in-out rounded-lg object-cover"
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
                className=" brightness-90 hover:brightness-110 transition duration-300 ease-in-out rounded-lg object-cover"
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
              <Link href="https://lambent-praline-ebd115.netlify.app/">
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

        {/* ===================Education======================= */}
        <section
          id="education"
          className="bg-gradient-to-br snap-center
          w-screen p-10"
          style={{
            position: "relative",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            alignItems: "center",
            backgroundImage: `url(vit.jpg)`,
          }}
        >
          <h3 className="text-3xl font-bold py-1 dark:text-white ">
            Education
          </h3>
          <div id="eduwrapper" className="md:flex gap-12">
            {/* ============ 1 placeholder ========== */}
            <div
              className="text-center justify-start items-center flex flex-col
              p-10 rounded-xl my-10  flex-1"
            ></div>
            {/* ============ 2 edu ========== */}
            <div
              className="text-center justify-start items-center flex flex-col 
            shadow-lg p-8 rounded-xl my-10 bg-gray-100 hover:bg-gray-200 flex-1"
            >
              <div className="text-5xl text-center">
                <IoSchool />
              </div>
              <h3 className="text-lg font-bold text-black my-2 ">
                University of Southern California
              </h3>
              <h4 className="py-1 font-semibold text-gray-800 ">
                Master of Science
              </h4>
              <h4 className="py-1  text-gray-800 ">Applied Data Science</h4>
            </div>
          </div>
        </section>
      </main>
      {/* ===== footer === */}
      <footer
        className="w-screen flex flex-col dark:bg-black dark:text-gray-200
      items-center justify-center p-2"
      >
        <h3 className="font-semibold">Contact information</h3>
        <div
          className="text-xl flex cursor-pointer 
          justify-center
          gap-[1rem] py-3 text-gray-600 dark:text-gray-400"
        >
          <Link href="https://twitter.com/dp3why">
            <AiFillTwitterCircle className="dark:hover:text-white" />
          </Link>
          <Link href="https://www.linkedin.com/in/hongyiusc/">
            <AiFillLinkedin className="dark:hover:text-white" />
          </Link>
          <Link href="https://github.com/dp3why">
            <AiFillGithub className="dark:hover:text-white" />
          </Link>
          <AiFillGoogleCircle className="dark:hover:text-white" />
          <AiFillMail className="dark:hover:text-white" />
        </div>
        <p className="text-sm">dp3why@gmail.com</p>
      </footer>
    </div>
  );
}
