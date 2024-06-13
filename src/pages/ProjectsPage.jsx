import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { TiDocumentText } from 'react-icons/ti';
import { MdOutlineEmail } from 'react-icons/md';
import projects from '../data/projects.json';
import ProjectsBig from '../components/ProjectsBig';
import { Link } from 'react-router-dom';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import Footer from '../components/Footer';

const ProjectsPage = () => {
  return (
    <>
      <div
        className="bg-gray-300 transition-colors duration-500 
        overflow-y-auto max-h-screen scrollbar-thin
    bg-gradient-to-b from-teal-950  via-teal-900  to-teal-600 
    text-white relative
    iphone-promax:px-12"
      >
        <div
          className=" sticky top-20 left-2 text-4xl text-teal-200 text-opacity-50
           flex justify-between gap-4 items-center
          transition ease-in-out 
          iphone-promax:text-2xl iphone-promax:my-6"
        >
          {/* BACK  */}
          <div className="hover:text-teal-100 hover:scale-105">
            <a
              href="https://github.com/binhnguyen96html"
              target="_blank"
              rel="noreferrer"
            >
             <Link to='/'> 
             <IoChevronBackCircleOutline 
             className='text-5xl i
             xl-custom:text-5xl
             phone-promax:text-2xl' />
             </Link>

            </a>
          </div>

          {/* ICONS  */}
          <div className="flex items-center gap-4 xl-custom:text-5xl">
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
            <div className="hover:text-teal-100 hover:scale-105 text-5xl
            xl-custom:text-6xl
            iphone-promax:text-3xl">
              <a
                href="mailto:binhnguyenbiz96@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <MdOutlineEmail />
              </a>
            </div>
            <div className="hover:text-teal-100 hover:scale-105 text-5xl
            xl-custom:text-6xl
            iphone-promax:text-3xl">
              <a
                href="https://drive.google.com/file/d/17vVzVLmr59X27YuNf8W9vBxh8s7PdQLS/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <TiDocumentText />
              </a>
            </div>
          </div>
        </div>

        {/* 1st DIV */}
        <div className="mb-16">
          <div>
            <h1 className="font-extrabold leading-[200px] 
            xl-custom:text-8xl text-center 
            iphone-promax:text-4xl iphone-promax:mt-24">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-100 to-sky-300
              ">
                MY PROJECTS
              </span>
            </h1>
          </div>
        </div>

        {/* 2nd DIV */}

        {/* PROJECT  */}
       <div className='
       sm-custom:px-48
       iphone-promax:px-0'>
       <ProjectsBig projects={projects} />
       </div>

       <Footer />
      </div>
    </>
  );
};

export default ProjectsPage;
