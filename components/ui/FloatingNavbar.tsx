"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import image from "../../public/images/logo.png";
import "@/styles/nav.css";
import "@/styles/index.css";
import { socialMedia } from "@/data";
import { FaGithub, FaLinkedin, FaTwitter, FaStackOverflow } from "react-icons/fa6";


const FloatingNav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

        const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const handleStickyNavbar = () => {
    if (window.scrollY >= 100) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, []); 
    
  return (
    <>
      <header
                className={`header fixed  top-0 left-0 z-40 flex w-full items-center bg-opacity-20   mt-[-8px] 
                ${sticky ? " bg-dark !fixed !z-[9999] ! bg-opacity-100 shadow-sticky  fade-in !transition dark:! dark:!bg-opacity-100": "absolute" }`
        }
      >
        <div className=" mt-10 container">
          <div className=" relative flex items-center justify-between">
            <div className=" w-80 relative z-10">
              <Link
                href="/"
                className={`header-logo block fade-in-slower`}> 
                <span className=" font-bold text-5xl">Light<span className="text-3xl font-light" >tech</span></span>
                
              </Link>
                  
            </div>
            <div className="flex fade-in justify-between transform">
              <div>
                            <div className="mt-10 hidden  md:flex items-center gap-4">
                              <span className="text-sm text-slate-500">Find me on</span>
                              <div className="flex gap-3">
                                {socialMedia?.map((item) => (
                                  <Link
                                    href={item.link}
                                    key={item.id}
                                    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 bg-slate-800/50 text-slate-400 transition-all hover:border-violet-500 hover:bg-violet-500/10 hover:text-violet-400"
                                  >
                                    {item.name === "github" && <FaGithub className="h-5 w-5" />}
                                    {item.name === "linkedin" && <FaLinkedin className="h-5 w-5" />}
                                    {item.name === "twitter" && <FaTwitter className="h-5 w-5" />}
                                    {item.name ==="stack-overflow" && <FaStackOverflow className="h-5 w-5" />}
                                  </Link>
                                ))}
                              </div>
                            </div>
              </div>
            </div>
          </div>

        </div>
      </header>      
    </>
  );
};

export default FloatingNav;
