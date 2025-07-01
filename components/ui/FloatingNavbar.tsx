"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import image from "../../public/images/logo.png";
import "@/styles/nav.css";
import "@/styles/index.css";


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
                ${sticky ? " bg-dark !fixed !z-[9999] ! bg-opacity-100 shadow-sticky backdrop-blur-lg fade-in !transition dark:! dark:!bg-opacity-100": "absolute" }`
        }
      >
        <div className=" mt-10 container">
          <div className=" relative flex items-center justify-between">
            <div className=" w-80 relative z-10">
              <Link
                href="/"
                className={`header-logo block fade-in-slower`}> 
                <span className=" font-bold text-5xl">BU<span className="text-3xl font-light" >Gym</span></span>
                
              </Link>
                  
            </div>
            <div className="flex fade-in justify-between transform">
              <div>


                <nav
                  id="navbarCollapse"
                  className={`navbar hidden md:flex absolute  z-30 w-[250px] rounded border-[.5px] border-body-color/50  py-4 px-6 duration-300 ease-out transition-transform transform dark:border-body-color/2 lg:visible lg:static lg:w-auto lg:border-none lg:bg-dark lg:p-0 lg:opacity-100`}
                >
                  <ul className=" block lg:flex  backdrop-blur-lg lg:space-x-8 top-0 left-0 mr-8 h-full  text-white">
                    <li className="group relative">

                      <Link
                        href="."
                        className={`nav hover ml-3 flex py-2 text-white text-md  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        
                      >
                        
                        <span className={""}>
                          Home
                        </span>
                        <span className="my-1 ml-2  font-bold">
                          
                        </span>
                      </Link>
                    </li>

                    

                     <li>
                      <Link
                        href="#projects"
                        className={`nav hover flex py-2  text-white  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                       
                      >
                        <span className={""}>
                          Projects
                        </span>
                        <span className="my-1 ml-2 dark:text-dark ">
                          
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="#testimonials"
                        className={`nav hover flex py-2  text-white  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                       
                      >
                        <span className={""}>
                          Testimonials
                        </span>
                        <span className="my-1 ml-2 dark:text-dark ">
                          
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#about"
                        className={`nav hover flex py-2  text-white  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                       
                      >
                        <span className={""}>
                          About
                        </span>
                        <span className="my-1 ml-2 dark:text-dark ">
                          
                        </span>
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="#contact"
                        className={`nav hover flex py-2  text-white  font-bold group-hover:opacity-70 lg:mr-5 lg:inline-flex lg:py-6 lg:px-0`}
                        
                      >
                        <span className={""}>
                          Contact Us
                        </span>
                        <span className="my-1 ml-2 text-dark ">
                          
                        </span>
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

        </div>
      </header>      
    </>
  );
};

export default FloatingNav;
