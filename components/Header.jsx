"use client"
import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* LOGO  */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            <span className="text-accent">&lt;</span>Shubham
            <span className="text-accent">/&gt;</span>
          </h1>
        </Link>
        {/* DESKTOP NAV */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* MOBILE NAV */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
