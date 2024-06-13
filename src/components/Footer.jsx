import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-screen ml-0
    border-t border-teal-600 pb-6 shadow-sm
    xl-custom:p-12
    iphone-promax:pt-3 iphone-promax:px-12">
     {/* ICONS  */}
     <div
       className="text-4xl text-teal-200
       flex justify-start gap-4 items-center
       transition ease-in-out
       xl-custom:text-4xl
       iphone-promax:text-2xl"
     >
       <div className="hover:text-teal-100 hover:scale-105 ">
         <a
           href="https://github.com/binhnguyen96html"
           target="_blank"
           rel="noreferrer"
         >
           <FaGithub />
         </a>
       </div>
       <div className="hover:text-teal-100 hover:scale-105">
         <a
           href="https://www.linkedin.com/in/binh-nguyen-a07731101/"
           target="_blank"
           rel="noreferrer"
         >
           <FaLinkedin />
         </a>
       </div>
       <div className="hover:text-teal-100 hover:scale-105 
       xl-custom:text-5xl
       iphone-promax:text-3xl">
         <a
           href="mailto:binhnguyenbiz96@gmail.com"
           target="_blank"
           rel="noreferrer"
         >
           <MdOutlineEmail/>
         </a>
       </div>
     </div>

      {/* Resume attached */}
         <div
           className="mr-12 iphone-promax:mr-6
         hover:translate-x-4 hover:font-bold hover:text-sky-200
         transition ease-in-out duration-150 delay-75 group"
         >
           <a
             className="mt-1 ml-2 flex items-center gap-4"
             target="_blank"
             rel="noreferrer"
             href="https://drive.google.com/file/d/17vVzVLmr59X27YuNf8W9vBxh8s7PdQLS/view?usp=sharing"
           >
            <span className='xl-custom:text-2xl iphone-promax:text-sm '>View Full Resume</span>
             <FiLink className="text-base mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:font-bold" />
           </a>
         </div>

   </footer>
  )
}

export default Footer