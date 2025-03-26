"use client";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/Shubham9455" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/shubham-jaiswal-ece/",
  },
  {
    icon: <FaInstagram />,
    path: "https://www.instagram.com/shubham_jai.swal/",
  },
  // {icon: <FaTwitter/>,path:''},
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          className={iconStyles}
          target="_blank"
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
