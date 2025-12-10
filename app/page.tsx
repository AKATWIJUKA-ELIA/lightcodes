"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import FloatingNav  from "@/components/ui/FloatingNavbar";
import About from "@/components/About";
import Contact from "@/components/Contact";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden ">
      <div className=" w-full">
        <FloatingNav  />
        <Hero />
      </div>
    </main>
  );
};

export default Home;
