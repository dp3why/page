import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import { Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Skills from "./components/Skills";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const cards = [
    {
      id: 1,
      title: "MedicalBridge: Online Ordering System",
      image: "/images/medical.png",
      url: "https://medicalbridge.netlify.app/",
      description:
        "An online shopping platform for medical supplies and equipment",
    },
    {
      id: 2,
      title: "Investspehere: Investment Insights Social Media",
      image: "/images/investsphere.png",
      url: "https://investsphere.netlify.app/",
      description: "A social media platform for investors and traders.",
    },
    {
      id: 3,
      title: "StaySweet: Short Rental Booking",
      image: "/images/staysweet.png",
      url: "https://staysweet.netlify.app/",
      description: "A short rental Booking website for travelers and hosts.",
    },
    {
      id: 4,
      title: "TwitchTrendz: Twitch Stream and Video Recommendation App",
      image: "/images/twitchTrends.png",
      url: "https://bit.ly/twitchtrendz",
      description:
        "A web app for Twitch streamers to analyze their performance.",
    },
    {
      id: 5,
      title: "Dessert: Movie Recommendation App",
      image: "/images/dessertai.png",
      url: "https://dessertai.vercel.app/",
      description:
        "A movie recommendation app with personalized recommendation.",
    },
    {
      id: 6,
      title: "InstaClone: Social Media App",
      image: "/images/ins.png",
      url: "https://instdemo.netlify.app/",
      description: "A social media app imitating Instagram.",
    },
  ];
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>HY</title>
        <meta name="description" content="personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* =================== NavBar ======================= */}

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      {/*  ==== main page  === */}
      <main
        className=" pt-10 dark:bg-gray-900  
      justify-center  "
      >
        {/* =================== p1 Hero ======================= */}

        <HeroSection />

        {/*  ============== p2 Project cards ============== */}
        <section
          id="projects"
          className="snap-center   px-20 py-10
              overflow-hidden
           w-screen"
        >
          <div className="py-3 dark:text-white">
            <h3 className="text-3xl font-bold py-1  text-orange-600  dark:text-orange-300  ">
              Projects
            </h3>
          </div>
          <Grid container spacing={10} className="">
            {cards.map((card) => (
              <Grid item key={card.id} xs={12} sm={12} md={12} lg={6} xl={6}>
                <Link href={card.url}>
                  <Card
                    className="shadow-lg cursor-pointer 
                    hover:shadow-2xl hover:scale-105 transition duration-300 ease-in-out
                   rounded-lg flex flex-col justify-between"
                  >
                    {/* image */}
                    <div
                      style={{
                        minHeight: "20rem",
                        backgroundImage: `url(${card.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                    <CardContent
                      className="h-[10em] 
                  flex flex-col justify-between  dark:bg-gray-200
                   "
                    >
                      <Typography
                        className="text-center font-bold  py-1 "
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        {card.title}
                      </Typography>
                      <div className="flex flex-col justify-center ">
                        <Typography className=" text-gray-800 " component="h6">
                          {card.description}
                        </Typography>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
          </Grid>
        </section>

        {/* ===================Skills======================= */}
        <Skills />

        {/* ===================Education======================= */}
        <Education />
      </main>
      {/* ===== footer === */}
      <Footer />
    </div>
  );
}
