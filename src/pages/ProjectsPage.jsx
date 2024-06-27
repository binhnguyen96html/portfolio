import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import projects from '../data/projects.json';
import ProjectsBig from '../components/ProjectsBig';
import { Link } from 'react-router-dom';
import { IoChevronBackCircleOutline } from 'react-icons/io5';
import Footer from '../components/Footer';
import { IoDocumentOutline } from 'react-icons/io5';

const ProjectsPage = () => {
  return (
    <>
      <div
        className="bg-gray-300 transition-colors duration-500 
        overflow-y-auto max-h-screen scrollbar-thin
    bg-gradient-to-b from-teal-950  via-teal-900  to-teal-600 
    text-white relative"
      >
        <div
          className=" sticky top-10 text-teal-200 text-opacity-50 px-12 
           flex justify-between items-center
          transition ease-in-out
          md:text-2xl md:my-6"
        >
          {/* BACK  */}
          <div className="hover:text-teal-100 hover:scale-105">
            <Link to="/">
              <IoChevronBackCircleOutline className="text-3xl" />
            </Link>
          </div>

          {/* ICONS  */}
          <div className="flex items-center gap-4 mobile:text-xl">
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
            <div className="hover:text-teal-100 hover:scale-105">
              <a
                href="mailto:binhnguyenbiz96@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <FiMail />
              </a>
            </div>
            <div className="hover:text-teal-100 hover:scale-105">
              <a
                href="https://drive.google.com/file/d/1idQWZFB2EK1gkuj5vAsOEeutvEZ2ygNt/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <IoDocumentOutline />
              </a>
            </div>
          </div>
        </div>

        {/* 1st DIV */}
        <div>
          <div>
            <h1
              className="font-extrabold text-4xl mt-16 mb-6 text-center
            lg:text-6xl"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-100 to-sky-300">
                MY PROJECTS
              </span>
            </h1>
          </div>
        </div>

        {/* 2nd DIV */}

        {/* PROJECT  */}
        <div className="md:px-0 lg:mt-16">
          <ProjectsBig projects={projects} />
        </div>

        <Footer />
      </div>
    </>
  );
};

export default ProjectsPage;
