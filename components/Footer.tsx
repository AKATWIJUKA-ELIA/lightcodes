
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
const navItems = [
  { id: 'home', label: 'Home', icon: HiHome },
  { id: 'projects', label: 'Projects', icon: AiOutlineFileDone },
  { id: 'testimonials', label: 'Testimonials', icon: MdRecommend },
  { id: 'about', label: 'About', icon: HiUser },
  { id: 'contact', label: 'Contact', icon: FaMessage },
];

const footer = () => {


  return (
      <div className="fixed bottom-0 p-3  left-0 z-40 flex justify-center gap-4 w-full border border-blue-950 backdrop-blur-3xl ">

      <div className='grid grid-cols-5 gap-24 ' id='home' >
        { navItems.map((item) => (
                <div key={item.id} className="group relative flex flex-col items-center justify-center text-gray-400 bg-gray-600 p-2 rounded-lg hover:text-white cursor-pointer">
                <item.icon className='text-2xl text-gray-400 hover:scale-150 transition duration-200'/>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {item.label}
                </span>
        </div>))}
      </div>     
      
    </div>
  )
}

export default footer;