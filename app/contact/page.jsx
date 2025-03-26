"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 XXXXXXXXXX",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "s#######@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Varanasi, India",
  },
];

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.4,
          delay: 2.4,
          ease: "easeIn",
        },
      }}
      className="py-6 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          <div className="xl:h-[54%] order-2 xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi dolorum inventore adipisci iure dicta debitis aperiam
                eius incidunt vero distinctio.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type={"firstname"} placeholder={"First Name"} />
                <Input type={"lastname"} placeholder={"Last Name"} />
                <Input type={"email"} placeholder={"Email address"} />
                <Input type={"phone"} placeholder={"Phone number"} />
              </div>
              <Select>
                <SelectTrigger className={"w-full"}>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
              </Select>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            info
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
