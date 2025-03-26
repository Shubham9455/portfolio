"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Photo from "@/components/Photo";
import Socials from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const resume = "/assets/resume.pdf";

const Home = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Shubham_Jaiswal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const [mouseTrail, setMouseTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseTrail((prev) =>
        [...prev, { id: Date.now(), x: e.clientX, y: e.clientY }].slice(-10)
      ); // Keep only the last 10 dots
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="h-full relative overflow-hidden">
      {/* Cursor Animation */}
      {mouseTrail.map(({ id, x, y }) => (
        <motion.div
          key={id}
          className="absolute w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-75"
          style={{ top: y, left: x }}
          animate={{ scale: [0.5, 1.2, 0.5], opacity: [1, 0.5, 0] }}
          transition={{ duration: 0.5 }}
        />
      ))}

      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl libre-baskerville-bold">
              Software Engineer
            </span>
            <h1 className="h1 mb-6 titan-one-regular">
              Hello I'm <br />{" "}
              <span className="text-accent">Shubham Jaiswal</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80 libre-baskerville-bold">
              I am a software engineer who loves to build amazing web
              applications.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size={"lg"}
                className={"uppercase flex items-center gap-2"}
                onClick={handleResumeDownload}
              >
                <span className="libre-baskerville-bold">Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles={"flex gap-6"}
                  iconStyles={
                    "w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  }
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
