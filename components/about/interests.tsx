import React, { Children } from 'react';
import { DiDjango } from 'react-icons/di'; 
import { FaReact } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiCss3 } from 'react-icons/di';
import { DiJavascript1 } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si'; 
import { FaChess } from 'react-icons/fa';
import { CgGym } from 'react-icons/cg';
import { FaPersonHiking } from 'react-icons/fa6';
import { ImCamera } from 'react-icons/im';
import Link from 'next/link';

const Interests = () => {
  return (
    <div className='p-4 gap-4  flex flex-col md:flex rounded-3xl '>
            <div className='flex gap-6 -ml-10 mr-12'>

                <div className='flex    rounded-lg'> 
                        <div className='px-5 flex gap-2' >
                             < FaPersonHiking className='text-6xl tooltip text-green-600'/>
                             <ImCamera className='text-6xl text-white'/>
                             <CgGym className='text-6xl text-white'/>
                             <FaChess className='text-6xl text-blue-600'/>
                             
                        </div>
                  
                  </div>
                  
        </div>

     
     
      
    </div>
  )
}

export default Interests;