
"use client"
import { FaLocationArrow } from "react-icons/fa6";
import React from 'react'
import { useState } from 'react'
import { HiUser } from 'react-icons/hi'
import { FaMessage } from 'react-icons/fa6' 
import { HiMiniServerStack } from 'react-icons/hi2'
import { AiOutlineFileDone } from 'react-icons/ai'
import { HiHome } from 'react-icons/hi'
import { MdRecommend } from "react-icons/md";


const footer = () => {

 const Click = () =>{
      document.getElementById('services')?.classList.remove('icon-color');
      document.getElementById('projects')?.classList.remove('icon-color');
      document.getElementById('about')?.classList.remove('icon-color');
      document.getElementById('contact')?.classList.remove('icon-color');
      document.getElementById('home')?.classList.add('icon-color');
 }

  return (
      <div className="fixed bottom-0 left-0 z-40 flex justify-center gap-4 md:hidden w-full border opacity-75 rounded-full backdrop-blur-lg ">

      <div className='flex flex-col' id='home' >
            <a
            href="/"
            className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
                  <HiHome className='text-2xl ' id='home' onClick={Click}/>
            
            </a>

            <h1 className='flex mx-auto -mt-5 '>
                 <a href="#" >
                        Home
                </a> 
            </h1>
      </div>


      <div className='flex flex-col md:hidden' id='services'>
            <a    href="#testimonials"
            className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
                  <MdRecommend className='text-2xl icon-color flex'/>
                  
            
            </a>

            <h1 className='flex  mx-auto -mt-5 '>
                  <a href="#testimonials" >
                        Testimonials
                </a> 
            </h1>
      </div>
     
     

      
      <div className='flex flex-col' id='projects'>
            <a
            href="#projects"
            className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
                  <AiOutlineFileDone className='text-2xl icon-color'/>
            
            </a>

            <h1 className='flex mx-auto -mt-5 '>
                  <a href="#projects" >Projects</a>
            </h1>
      </div>


      <div className='flex flex-col' id='about'>
            <a
            href="#about"
            className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
                  <HiUser className='text-2xl icon-color'/>
            
            </a>

            <h1 className='flex mx-auto -mt-5 '>
                  <a href="#about" >About</a>
            </h1>
      </div>


      <div className='flex flex-col ' id='contact'>
            <a
            href="#contact"
            className="group rounded-lg border border-transparent md:mx-10 px-5 py-4 md:hidden"  >
                  <FaMessage className='text-2xl icon-color'/>
            
            </a>

            <h1 className='flex mx-auto -mt-5 '>
                  <a href="#contact" >Contact</a>
            </h1>
      </div>

     
      
    </div>
  )
}

export default footer;