"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaMedal,
  FaUserGraduate,
  FaFlask,
  FaAngular,
} from "react-icons/fa";
import Link from "next/link";
import {
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiCplusplus,
  SiPython,
  SiExpress,
  SiDjango,
  SiRedis,
} from "react-icons/si";

const about = {
  title: "About me",
  desc: "I am a full stack developer with experience in building web applications using modern technologies. I am passionate about learning new technologies and building products that provide value to users.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Shubham Jaiswal",
    },
    {
      fieldName: "Email",
      fieldValue: "shubham.jaiswal.iitbhu@gmail.com",
    },
    {
      fieldName: "Phone",
      fieldValue: "+91-XXXXXXXXXX",
    },

    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi",
    },
  ],
};

const experience = {
  icon: "",
  title: "My Experience",
  desc: "I have worked with various companies and startups to build web applications. I have experience in building full stack applications using modern technologies.",
  items: [
    {
      company: "Samsung Research & Development Institute, Delhi",
      position: "Software Engineer",
      duration: "July 2025 - Present",
      company_link: "https://research.samsung.com/sri-d",
    },
    {
      company: "Samsung Research & Development Institute, Delhi",
      position: "Software Engineering Intern",
      duration: "Summer 2024",
      company_link: "https://research.samsung.com/sri-d",
    },
    {
      company: "Trio Global Inc.",
      position: "Freelance Software Developer",
      duration: "August 2023 - April 2024",
      company_link: "https://www.linkedin.com/company/triodev/",
    },
  ],
};


const education = {
  icon: "",
  title: "My Education",
  desc: "I hold a B.Tech degree in Electronics Engineering from the Indian Institute of Technology (BHU) Varanasi. My coursework provided a strong foundation in computer science and mathematics.",
  items: [
    {
      degree: "B.Tech in Electronics Engineering",
      institute: "Indian Institute of Technology (BHU) Varanasi",
      duration: "2021 - 2025",
      grade: "CPI 8.97",
      status: "Completed",
    },
  ],
};


const skills = {
  title: "My Skills",
  desc: "I have experience in building web applications using modern technologies. I am proficient in frontend and backend technologies.",
  skilllist: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "Typescript" },

    { icon: <FaReact />, name: "React" },
    {icon: <FaAngular />, name: "Angular"},
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaNodeJs />, name: "Node.js" },
    {icon: <SiExpress />, name: "Express.js"},
    {icon: <SiDjango />, name: "Django"},
    {icon: <FaFlask />, name: "Flask"},
    { icon: <SiMongodb />, name: "MongoDB" },
    {icon: <SiRedis />, name: "Redis"},
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiCplusplus />, name: "C++" },
    {icon: <SiPython />, name: "Python"},
  ],
};

const cpAndDsa = {
  title: "Competitive Programming & DSA",
  desc: "I actively participate in competitive programming platforms and have achieved notable milestones.",
  achievements: [
    {
      platform: "Codeforces",
      achievement: "Expert with max rating 1641, solved 800+ problems",
      link: "https://codeforces.com/profile/__Shubham__Jaiswal__",
    },
    {
      platform: "LeetCode",
      achievement:
        "Max rating 1816, solved 100+ hard, 150+ medium, 50+ easy problems",
      link: "https://leetcode.com/u/__Shubham__Jaiswal__/",
    },
    {
      platform: "Coding Ninjas",
      achievement:
        "Master with 557 problems solved, achieved monthly college topper badge twice",
      link: "https://www.naukri.com/code360/profile/c7b5132d-9c1e-4031-a9d1-ea366198a0fb",
    },
  ],
};

const otherAchievements = {
  title: "Other Achievements",
  desc: "I have been involved in various activities and achieved notable recognition.",
  achievements: [
    {
      activity: "Event Coordinator | Udyam’24",
      description:
        "Organized a web development and competitive programming event, conducted workshops, and organized a hackathon with 50+ teams.",
    },
    {
      activity: "Tech Executive | Synergy Cell",
      description:
        "Developed and maintained SNTC's official website using Next.js and Tailwind CSS.",
    },
    {
      activity: "Google Code Jam 2023",
      description: "Secured rank 511 in Farewell Round A.",
    },
    {
      activity: "Inter IIT Grad Capital High Prep PS Participant",
      description:
        "Contributed to developing a Flutter prototype for a startup idea showcased at Inter IIT Tech Meet 11.0.",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { delay, motion } from "framer-motion";

const ResumePage = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className={"flex flex-col xl:flex-row gap-[60px]"}
        >
          <TabsList
            className={
              "flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6"
            }
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="cpdsa">CP & DSA</TabsTrigger>
            <TabsTrigger value="other">Other Achievements</TabsTrigger>

            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className={"w-full"}>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.desc}
                </p>
                <ScrollArea className="h-[400px] overflow-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                        {item.company_link && (
                          <Link
                            href={item.company_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-accent hover:underline"
                          >
                            Visit ↗
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className={"w-full"}>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desc}
                </p>
                <ScrollArea className="h-[400px] overflow-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[208px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <div className="mt-[8px]">
                          {item.status === "Completed" ? (
                            <FaUserGraduate className="text-3xl text-accent mb-2" />
                          ) : (
                            <FaMedal className="text-3xl text-accent mb-2" />
                          )}
                        </div>
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl text-center lg:text-left">
                          {item.degree}
                        </h3>

                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.grade}</p>
                        </div>
                        <p className="text-white/60">{item.institute}</p>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className={"w-full h-full"}>
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.desc}
                  </p>
                </div>
                <ScrollArea className="h-[460px] overflow-auto">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skilllist.map((skill, index) => (
                      <li key={index} className="">
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="cpdsa" className={"w-full"}>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{cpAndDsa.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {cpAndDsa.desc}
                </p>
                <ScrollArea className="h-[460px] overflow-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {cpAndDsa.achievements.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[194px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent text-2xl">
                          {item.platform}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.achievement}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="other" className={"w-full"}>
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {otherAchievements.title}
                </h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {otherAchievements.desc}
                </p>
                <ScrollArea className="h-[460px] overflow-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {otherAchievements.achievements.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] h-[206px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-xl">{item.activity}</span>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className={"w-full text-center xl:text-left"}
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.desc}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] max-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default ResumePage;
