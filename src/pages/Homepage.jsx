import React from 'react';
import { FaLinkedin, FaGithub, FaArrowRight } from 'react-icons/fa';
import { FiLink } from 'react-icons/fi';
import { MdOutlineEmail } from 'react-icons/md';
import { useState, useEffect } from 'react';
import Experience from '../components/Experience';
import expList from '../data/experience.json';
import Projects from '../components/Projects';
import projects from '../data/projects.json';
// import { Element, Link } from 'react-scroll';
// import {  Link } from 'react-router-dom';
import { Element, Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink} from 'react-router-dom';


const Homepage = () => {
  // const [scrollTop, setScrollTop] = useState(0);
  const [bolded, setBolded] = useState({
    about: true,
    experience: false,
    projects: false,
  });

  //SCROLL
  useEffect(() => {
    const handleScroll = () => {
      // setScrollTop(window.scrollY);

      if (window.scrollY < 300) {
        setBolded({ about: true, experience: false, projects: false });
      } else if (window.scrollY < 600) {
        setBolded({ about: false, experience: true, projects: false });
      } else {
        setBolded({ about: false, experience: false, projects: true });
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //MOUSE MOVED
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });

      if (window.scrollY < 200) {
        setMousePosition({ x: event.clientX - 300, y: event.clientY - 300 });
      } else {
        setMousePosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div>
      <div className="relative">
        <div
          className="absolute
    transition-colors delay-100 duration-300
    w-[900px] h-[900px] rounded-full"
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            opacity: 0.05,
            background:
              'radial-gradient(circle,rgba(197,247,242,1) 5%,rgba(6,50,49,1)  50%)',
          }}
        />
      </div>

      <div
        className="bg-gray-300 transition-colors duration-500
        xl-custom:grid xl-custom:grid-cols-5
      bg-gradient-to-b from-teal-950  via-teal-900  to-teal-600 
      text-white "
      >
        {/* LEFT DIV */}
        <div
          className="xl-custom:col-span-2 
          xl-custom:sticky top-0 h-screen overflow-y-auto
          grid grid-rows-4"
        >
          <div className="row-span-3 m-12 sm-custom:m-24">
            <div>
              {/* <h2>Scroll Top: {scrollTop}</h2> */}
              <h1
                className="font-extrabold leading-[200px]
              text-xl
              2xl-custom:text-9xl 
              xl-custom:text-8xl
              lg-custom:text-9xl
              md-custom:text-7xl
              sm-custom:text-5xl
              "
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-100 to-sky-300">
                  Binh Nguyen
                </span>
              </h1>
              <h6
                className="sm-custom:mt-14 text-xl font-thin text-cyan-200
              sm-custom:text-4xl"
              >
                Frontend Developer
              </h6>
              <p
                className="sm-custom:mt-14 font-extralight
              text-base leading-[50px]
              lg-custom:text-2xl
              xl-custom:text-xl xl-custom:leading-10"
              >
                I am proficient in JavaScript, and leading frontend frameworks,
                allowing me to deliver robust, full-stack solutions.
              </p>
            </div>

            {/* ABOUT EXPERIENCE PROJECTS  */}
            <div
              className="uppercase mt-16 transition ease-in-out delay-75 duration-300
            font-extralight group
            text-base
            lg-custom:text-2xl"
            >
              <p className="mt-6 hover:font-bold">
                <span
                  className={`${
                    bolded.about &&
                    'font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-100 to-sky-300'
                  }`}
                >
                  <ScrollLink to="about" smooth={true} offset={-70}>
                    About
                  </ScrollLink>
                </span>
              </p>
              <p className="mt-6 hover:font-bold">
                <span
                  className={`${
                    bolded.experience &&
                    'font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-100 to-sky-300'
                  }`}
                >
                  <ScrollLink to="experience" smooth={true} offset={-70}>
                    Experience
                  </ScrollLink>
                </span>
              </p>
              <p className="mt-6 hover:font-bold">
                <span
                  className={`${
                    bolded.projects &&
                    'font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-100 to-sky-300'
                  }`}
                >
                  <ScrollLink to="projects" smooth={true} offset={-70}>
                    Projects
                  </ScrollLink>
                </span>
              </p>
            </div>
          </div>

          {/* ICONS  */}
          <div
            className="row-span-1 m-12
            sm-custom:m-24 text-4xl text-teal-200
          flex justify-start gap-4 items-center
          transition ease-in-out"
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
            <div className="hover:text-teal-100 hover:scale-105 text-5xl">
              <a
                href="mailto:binhnguyenbiz96@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <MdOutlineEmail />
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT DIV */}
        <div
          className="xl-custom:col-span-3 overflow-auto 
        p-12
        xl-custom:p-28
        lg-custom:pt-0
          sm-custom:px-28"
        >
          {/* ABOUT  */}
          <Element name="about">
            <div
              className=" font-extralight indent-8 
          sm-custom:text-justify
          text-base leading-[60px]
          xl-custom:text-xl xl-custom:leading-[60px]
          lg-custom:text-2xl lg-custom:leading-[60px]"
            >
              <p>
                At SvelteScope, our team is harnessing{' '}
                <span className="font-bold"> JavaScript </span>
                to redefine Chrome extension debugging for Svelte applications.
                With a{' '}
                <span className="font-bold">
                  {' '}
                  Master's degree in Project Management{' '}
                </span>{' '}
                from Northeastern and an{' '}
                <span className="font-bold">
                  {' '}
                  Associate's in Computer Science{' '}
                </span>
                , my focus on creating readable, maintainable code has improved
                developer productivity and the end-user experience.
              </p>
              <p className="mt-6">
                Bringing technical acumen with strategic project management,
                we've optimized web app performance and facilitated a seamless
                development workflow. My role centers on empowering developers
                with expressive tools while contributing to impactful
                open-source software, driven by a commitment to technological
                excellence and innovation.
              </p>
            </div>
          </Element>

          {/* EXPERIENCE */}
          <Element name="experience">
            <Experience expList={expList} />
          </Element>

          {/* Resume attached */}
          <div className="mt-8">
            <p
              className="relative pl-6
            hover:translate-x-4  hover:font-bold hover:text-sky-200
            transition ease-in-out duration-150 delay-75 group"
            >
              View Full Resume
              <a
                className="absolute mt-1 ml-2"
                target="_blank"
                rel="noreferrer"
                href="https://drive.google.com/file/d/17vVzVLmr59X27YuNf8W9vBxh8s7PdQLS/view?usp=sharing"
              >
                <FiLink className="text-base mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:font-bold" />
              </a>
            </p>
          </div>

          {/* PROJECT  */}
          <Element name="projects">
            <Projects projects={projects} />
          </Element>
    
            <RouterLink to="/projects" className='flex justify-end'>
              <div className='flex items-center gap-4 text-teal-200 hover:text-teal-400
              duration-150 transition-colos'>
                <p>Projects</p>
                <FaArrowRight />
              </div>
            </RouterLink>
     
        </div>
      </div>
    </div>
  );
};

export default Homepage;
