import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Education from "./components/Education";
import Navbar from "./components/Navbar";
import { Typography, Card, CardContent, CardMedia, Grid } from "@mui/material";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import cards from "./constants/cards";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

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
                    <CardMedia
                      className="min-h-[20rem]"
                      image={card.image}
                      title="Image title"
                    />
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
