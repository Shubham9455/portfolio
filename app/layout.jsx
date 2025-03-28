import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/Header";
import "./globals.css";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import CursorParticles from "@/components/CursorParticles";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Portfolio of Shubham Jaiswal",
  image: "/globe.svg",
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
        precedence="default"
      />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
        precedence="default"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Roboto+Slab:wght@100..900&family=Silkscreen:wght@400;700&family=Tektur:wght@400..900&family=Titan+One&display=swap"
        rel="stylesheet"
        precedence="default"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased libre-baskerville-bold app`}
      >
        <CursorParticles />
        <Header />
        <StairTransition />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
