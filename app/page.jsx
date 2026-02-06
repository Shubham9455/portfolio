"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Photo from "@/components/Photo";
import Socials from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
const resumeFolder =
  "https://drive.google.com/drive/folders/1vF1FEP7ilRFAIaJFvZxohnyMBSrqm_h5?usp=drive_link";

const Home = () => {
  const handleResumeView = () => {
    const link = document.createElement("a");
    link.href = resumeFolder;
    link.target = "_blank";
    link.rel = "noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full relative overflow-hidden">
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
              I enjoy building web applications, taking ownership of what I work
              on, and continuously learning new technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant={"outline"}
                size={"lg"}
                className={"uppercase flex items-center gap-2"}
                onClick={handleResumeView}
              >
                <span className="libre-baskerville-bold">View Resume</span>
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
          <div className="order-1 xl:order-none mb-8 xl:mb-0 opacity-100 z-50">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
