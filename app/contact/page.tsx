'use client';
import React, { useState } from 'react';


const code ='/images/code.png'





const Contact = () => {

      const [subject, setSubject] = useState('');
      const [message, setMessage] = useState('');
      const [email, setEmail] = useState('');
      const [loading, setLoading] = useState(false);
      const [error, setError] = useState('');
      const [success, setSuccess] = useState('');
  
      // const handleSubmit = async (e: React.FormEvent) => {
      //     e.preventDefault();
      //     setLoading(true);
      //     setError('');
      //     setSuccess('');
  
      //     try {
      //         const response = await fetch('/app/sendmail', {
      //             method: 'POST',
      //             headers: {
      //                 'Content-Type': 'application/json',
      //             },
      //             body: JSON.stringify({ email, subject, message }),
      //         });
  
      //         if (!response.ok) {
      //             throw new Error('Failed to send email');
      //         }
  
      //         setSuccess('Email sent successfully!');
      //         setEmail('');
      //         setSubject('');
      //         setMessage('');
      //     } catch (err) {
      //         setError(err.message);
      //     } finally {
      //         setLoading(false);
      //     }
      // };

      
      
  return (
      <div className=" flex flex-col md:flex-row relative min-h-screen  smooth" style={{ backgroundImage:`url('/images/color-sharp.png')`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center', backgroundBlendMode:'multiply'}}  >
      
            <div className="z-10 mx-3 md:ml-96 md:mt-32 md:mt-2  flex flex-col " >

                  <div className="fade-in-slowest text-center md:text-left md:ml-28 mt-32 ">
            
                              
                        <h1 className="text-left  text-3xl fade-in md:text-8xl text-pink-400 font-bold">
                        <span className="text-blue-500  fade-in-slowest ">Get In <span className='text-pink-800'>Touch</span></span>
                        </h1>                 

                  </div>

                  <div className=' md:block'>
            
                        <form action=""  className=' mt-2  border-double backdrop-blur-lg'>
                              <h1 className='text-center font-bold'> Send Us an Email</h1>
                              <div className='flex flex-col gap-2 mt-3 px-2'>
                                    <div className='flex gap-8 md:gap-20 '>
                                          <input type="text" placeholder='Name' className='px-3 py-3 w-36 md:w-80 text-gray-900 text-white bg-transparent rounded-lg border-2 border-gray flex'/>
                                          <input type="text" placeholder='Your Email' value={email}
                onChange={(e) => setEmail(e.target.value)} className='px-3 py-3 w-36 md:w-80 text-gray-900 text-white bg-transparent rounded-lg border-2 border-gray flex'/>
                                    </div>  
                                    <input  type="text" placeholder='Subject' value={subject}
                onChange={(e) => setSubject(e.target.value)} className='px-3 py-3 text-gray-900 text-white bg-transparent rounded-lg border-2 border-gray mt-5'/>
                                    <textarea  placeholder='Message' value={message}
                onChange={(e) => setMessage(e.target.value)}  className=' h-36 px-3 py-3 text-gray-900 text-white bg-transparent rounded-lg border-2 border-gray mt-5' ></textarea>
                                    <button type="submit" className='py-3 w-80  bg-transparent border hover:bg-green-600 mb-2 rounded-full mt-5'>Submit</button>

                              </div>
                        </form>
                  </div>

            </div>
            
            

    
      </div>
  )
}

export default Contact