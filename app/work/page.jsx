"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@radix-ui/react-tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";

const projects = [
  {
    num: "01",
    category: "Frontend project",
    title: "Portfolio",
    description:
      "Personal portfolio website made with React.js and Tailwind CSS. It uses Framer Motion for animations. It is fully responsive and has a dark mode.",
    stack: [
      {
        name: "HTML5",
      },
      {
        name: "CSS3",
      },
      {
        name: "JavaScript",
      },
      {
        name: "Next.js",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Framer Motion",
      },
    ],
    image: "/assets/project-portfolio.png",
    live: "",
    github: "https://github.com/Shubham9455/portfolio",
  },
  {
    num: "02",
    category: "Full stack project",
    title: "Crypto Trading App",
    description:
      "A crypto trading app made with React.js and Tailwind CSS for frontend and Node.js and Express.js for backend. It uses CoinGecko API for fetching real-time data. It  handles basic buy and sell operations.",
    stack: [
      {
        name: "HTML5",
      },
      {
        name: "CSS3",
      },
      {
        name: "JavaScript",
      },
      {
        name: "React",
      },
      {
        name: "Tailwind CSS",
      },
      {
        name: "Node.js",
      },
      {
        name: "Express.js",
      },
    ],
    image: "/assets/coin-bazaar.png",
    live: "",
    github: "",
  },
];

const WorkPage = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2  xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category}
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-3 gap-4">
                {project.stack.map((stack, index) => (
                  <li key={index} className="text-xl text-accent">
                    {stack.name}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20 "></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 ">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderButtons
                containerStyles={
                  "flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                }
                btnStyles={
                  "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                }
                iconStyles={""}
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;
