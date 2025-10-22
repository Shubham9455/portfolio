"use client";

import { useState } from "react";
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
import { motion } from "framer-motion";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+91 XXXXXXXXXX",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "shubham.jaiswal.iitbhu@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Noida, India",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSendEmail = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Service Inquiry: ${formData.service || "General"}`
    );

    const body = encodeURIComponent(
      `Hello Shubham,\n\nMy name is ${formData.firstName} ${formData.lastName}.\n\n` +
        `Service: ${formData.service || "N/A"}\n` +
        `Email: ${formData.email}\n` +
        `Phone: ${formData.phone}\n\n` +
        `Message:\n${formData.message}\n\nRegards,\n${formData.firstName}`
    );

    const mailto = `mailto:shubham.jaiswal.iitbhu@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  };

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
          <div className="xl:w-[54%] order-2 xl:order-none ">
            <form
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
              onSubmit={handleSendEmail}
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Feel free to reach out with any collaboration or freelance
                project ideas. I'll get back to you as soon as possible.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => handleChange("firstName", e.target.value)}
                />
                <Input
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => handleChange("lastName", e.target.value)}
                />
                <Input
                  type="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                />
              </div>

              <Select onValueChange={(value) => handleChange("service", value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Frontend Development">
                      Frontend Development
                    </SelectItem>
                    <SelectItem value="Backend Development">
                      Backend Development
                    </SelectItem>
                    <SelectItem value="Full Stack Development">
                      Full Stack Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                className="h-[200px]"
                placeholder="Type your message here"
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
              />

              <Button size="md" className="max-w-40" type="submit">
                Send Message
              </Button>
            </form>
          </div>

          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6 ">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center ">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
