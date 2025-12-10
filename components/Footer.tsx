
"use client"
import { FaLocationArrow } from "react-icons/fa6";
import React from 'react'
import { useState } from 'react'
import { HiUser } from 'react-icons/hi'
import { FaMessage } from 'react-icons/fa6' 
import { HiMiniServerStack, } from 'react-icons/hi2'
import { GrOverview } from "react-icons/gr";
import { AiOutlineFileDone } from 'react-icons/ai'
import { HiHome } from 'react-icons/hi'
import { MdRecommend } from "react-icons/md";
import Hero from "./Hero";
import {Contact } from "lucide-react";
import About from "./About";
import Approach from "./Approach";
import Clients from "./Clients";
import Experience from "./Experience";
import RecentProjects from "./RecentProjects";
import Grid from "./Grid";
import ContactComponent from "./Contact";

const navItems = [
  { id: 'home', label: 'Home', icon: HiHome },
  { id: 'overview', label: 'Overview', icon: GrOverview },
  { id: 'projects', label: 'Projects', icon: AiOutlineFileDone },
  { id: 'testimonials', label: 'Testimonials', icon: MdRecommend },
  { id: 'about', label: 'About', icon: HiUser },
  { id: 'contact', label: 'Contact', icon: FaMessage },
  { id: 'experience', label: 'Experience', icon: HiMiniServerStack },
];

type WindowSize = "minimized" | "normal" | "maximized";

const footer = () => {
        const [activeIndex, setActiveIndex] = useState<number | null>(null);
        const [home, setHome] = useState(false);
        const [overview, setOverview] = useState(false);
        const [projects, setProjects] = useState(false);
        const [testimonials, setTestimonials] = useState(false);
        const [about, setAbout] = useState(false);
        const [contact, setContact] = useState(false);
        const [experience, setExperience] = useState(false);
        
        // Individual size states for each component
        const [overviewSize, setOverviewSize] = useState<WindowSize>("normal");
        const [projectsSize, setProjectsSize] = useState<WindowSize>("normal");
        const [testimonialsSize, setTestimonialsSize] = useState<WindowSize>("normal");
        const [aboutSize, setAboutSize] = useState<WindowSize>("normal");
        const [contactSize, setContactSize] = useState<WindowSize>("normal");
        const [experienceSize, setExperienceSize] = useState<WindowSize>("normal");

        const handleItemClick = (item: string) => {
        setActiveIndex(navItems.findIndex((navItem) => navItem.id === item));

        // Set section visibility based on clicked item
        setHome(item === 'home');
        setOverview(item === 'overview');
        setProjects(item === 'projects');
        setTestimonials(item === 'testimonials');
        setAbout(item === 'about');
        setContact(item === 'contact');
        setExperience(item === 'experience');
        
        // Reset sizes when opening
        if (item === 'overview') setOverviewSize("normal");
        if (item === 'projects') setProjectsSize("normal");
        if (item === 'testimonials') setTestimonialsSize("normal");
        if (item === 'about') setAboutSize("normal");
        if (item === 'contact') setContactSize("normal");
        if (item === 'experience') setExperienceSize("normal");
        }

        // Toggle between maximized and normal
        const toggleMaximize = (currentSize: WindowSize, setSize: React.Dispatch<React.SetStateAction<WindowSize>>) => {
          setSize(currentSize === "maximized" ? "normal" : "maximized");
        };


  return (
<>
      <div className="fixed bottom-0 p-2  left-0 z-40 flex justify-center gap-4 w-full  backdrop-blur-3xl ">

      <div className='grid grid-cols-7 gap-4 sm:gap-8 md:gap-12 lg:gap-24' id='home' >
        { navItems.map((item) => (
                <div key={item.id} className="group relative flex flex-col items-center justify-center
                 text-gray-400 bg-gray-600 p-1.5 sm:p-2 rounded-lg hover:text-white cursor-pointer"
                 onClick={()=>handleItemClick(item.id)}
                 >
                <item.icon className='text-xl sm:text-2xl text-gray-400 hover:scale-150 transition duration-200'/>
                <span className="absolute z-50 -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>
        </div>))}
      </div>     
      
    </div>
    {overview && <Grid 
          onClose={() => setOverview(false)}
          onMinimize={() => setOverviewSize("minimized")}
          onMaximize={() => toggleMaximize(overviewSize, setOverviewSize)}
          size={overviewSize}
        />}
        {projects && <RecentProjects 
          onClose={() => setProjects(false)}
          onMinimize={() => setProjectsSize("minimized")} 
          onMaximize={() => toggleMaximize(projectsSize, setProjectsSize)}
          size={projectsSize}
          onDoubleClick={
                () => toggleMaximize(projectsSize, setProjectsSize)
          }
        />}
        {testimonials && <Clients 
          onClose={() => setTestimonials(false)}
          onMinimize={() => setTestimonialsSize("minimized")}
          onMaximize={() => toggleMaximize(testimonialsSize, setTestimonialsSize)}
          size={testimonialsSize}
        />}
        {experience && <Experience 
          onClose={() => setExperience(false)}
          onMinimize={() => setExperienceSize("minimized")}
          onMaximize={() => toggleMaximize(experienceSize, setExperienceSize)}
          size={experienceSize}
                onDoubleClick={
                () => toggleMaximize(experienceSize, setExperienceSize)}
        />}
       {/*  {<Approach />} */}
        {about && <About 
          onClose={() => setAbout(false)}
          onMinimize={() => setAboutSize("minimized")}
          onMaximize={() => toggleMaximize(aboutSize, setAboutSize)}
          size={aboutSize}
        />}
        {contact && <ContactComponent 
          onClose={() => setContact(false)}
          onMinimize={() => setContactSize("minimized")}
          onMaximize={() => toggleMaximize(contactSize, setContactSize)}
          size={contactSize}
        />}
</>
  )
}

export default footer;