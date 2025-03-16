import React, { Children } from 'react';
import { DiDjango } from 'react-icons/di'; 
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si'; 
import { SiPython } from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandTypescript } from 'react-icons/tb';
import Link from 'next/link';

const Skills = () => {
  return (
    <div className=' flex p-2 mx-auto rounded-3xl '>
                <div className='flex flex-wrap gap-2' >
                        <Link href='https://www.python.org/'> < SiPython className='text-6xl tooltip text-yellow-300'/> </Link>
                        <Link href='https://www.djangoproject.com/'> <DiDjango className='text-6xl tooltip text-green-700'/> </Link>
                        <Link href='https://react.dev/'> <FaReact className='text-6xl text-blue-500'/> </Link>
                        <Link href='https://nextjs.org/'> <TbBrandNextjs className='text-6xl text-white'/> </Link>
                        <Link href=''> <SiJavascript className='text-6xl text-yellow-500'/> </Link> 
                        <FaHtml5 className='text-6xl text-orange-700'/>
                        <Link href=' https://tailwindcss.com/'>  <SiTailwindcss className='text-6xl text-blue-500'/> </Link> 
                        <DiCss3 className='text-6xl text-blue-600'/>
                        <SiJavascript className='text-6xl text-yellow-500'/>
                        <Link href='https://www.typescriptlang.org/'> <TbBrandTypescript className='text-5xl text-blue-500'/> </Link> 
                        
                </div>
                  
                  </div>
  )
}

export default Skills;