'use client';
import { useState } from 'react';
import React from 'react';
import Education from '@/components/about/education';
import Skills from '@/components/about/skills';
import WorkExperience from '@/components/about/work_experience';
import Interests from '@/components/about/interests';

const About = () => {
    const [activeTab, setActiveTab] = useState('Education'); // Initialize with default tab

    return (
<div className='flex flex-col md:flex-row gap-20 mx-auto  mt-2   justify-center items-center  md:gap-60'>
           

                {/* Tabs Section */}
                <div className='flex flex-col mx-auto justify-center items-center '>
                    <div className='flex gap-2 md:gap-10 px-4 py-4 border rounded-3xl  '>
                        {/* Tab Buttons */}
                        <h1 
                            className={`cursor-pointer ${activeTab === 'Education' ? 'activate' : ''}`} 
                            onClick={() => setActiveTab('Education')}
                        >
                            Education
                        </h1>

                        <h1 
                            className={`cursor-pointer ${activeTab === 'Skills' ? 'activate' : ''}`} 
                            onClick={() => setActiveTab('Skills')}
                        >
                            Tools
                        </h1>
                        
                        {/* <h1 
                            className={`cursor-pointer ${activeTab === 'Experience' ? 'activate' : ''}`} 
                            onClick={() => setActiveTab('Experience')}
                        >
                        Experience
                        </h1> */}
                        <h1 
                            className={`cursor-pointer ${activeTab === 'Interests' ? 'activate' : ''}`} 
                            onClick={() => setActiveTab('Interests')}
                        >
                            Interests
                        </h1>
                    </div>

                    {/* Render Active Tab Content */}
                    <div className='flex  mt-3 mx-auto border rounded-3xl '>
                        {activeTab === 'Education' && <Education />}
                        {activeTab === 'Skills' && <Skills />}
                        {activeTab === 'Experience' && <WorkExperience />}
                        {activeTab === 'Interests' && <Interests />}
                    </div>
                </div>
            </div>
    );
};

export default About;
