import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Experience from '../components/Experience';
import expList from '../data/experience.json';
import Projects from '../components/Projects';
import projects from '../data/projects.json';
import { Element, Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import GroupIcons from '../components/GroupIcons';
import { ResumeCircle } from '../components/ResumeCircle';
import AboutMe from '../components/AboutMe';

const Homepage = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollX, setScrollX] = useState(0);
  const [bolded, setBolded] = useState({
    about: true,
    experience: false,
    projects: false,
  });
  console.log('scrollX', scrollX)

  //SCROLL
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
      setScrollX(window.scrollX);

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
      setMousePosition({ x: 0, y: 0 });

      if (window.scrollY < 200) {
        setMousePosition({ x: event.clientX - 300, y: event.clientY - 200 });
      } else if (window.scrollY < 400) {
        setMousePosition({ x: event.clientX - 300, y: event.clientY + 100 });
      } else if (window.scrollY < 800) {
        setMousePosition({ x: event.clientX - 300, y: event.clientY + 300 });
      } else if (window.scrollY < 1000) {
        setMousePosition({ x: event.clientX - 300, y: event.clientY + 500 });
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
    <div
      className="bg-gradient-to-b from-teal-950 via-teal-900 to-teal-600 
    text-sm text-white relative z-10 leading-10 "
    >
      {/* Resume circle */}
      <ResumeCircle />

      {/* div for mousemove  */}
      <div className="relative z-10 overflow-x-clip">
        <div
          className={`absolute transition-colors delay-100 duration-300 
          ${window.innerWidth < 500 ? 'w-0 h-0' : 'w-[500px] h-[500px]'}`}
          style={{
            left: mousePosition.x,
            top: mousePosition.y,
            opacity: 0.05,
            transition: 'background-color 0.3s, opacity 0.3s',
            borderRadius: '100%',
            background: `${
              scrollTop < 200
                ? 'radial-gradient(circle,rgba(197,247,242,1) 1%,rgba(6,50,49,1) 50%)'
                : scrollTop < 400
                ? 'radial-gradient(circle,rgba(197,247,242,1) 5%,rgba(6,50,49, 0.5) 50%)'
                : 'radial-gradient(circle,rgba(197,247,242,1) 5%,rgba(6,50,49, 0.3) 50%)'
            } `,
          }}
        />
      </div>

      {/* check scroll Y  */}
      {/* <h2 className="sticky top-0">
        Scroll Top: {scrollTop} - {scrollX} - {window.innerWidth}
      </h2> */}

      <div
        className="bg-gray-300 transition-colors duration-500 pt-6 px-12 
        bg-gradient-to-b from-teal-950  via-teal-900  to-teal-600 text-white
        lg:grid grid-cols-5 lg:relative"
      >
        {/* LEFT DIV */}
        <div
          className="top-0 z-10
          lg:h-screen
          lg:col-span-2 lg:sticky "
        >
          <div
            className="
          lg-custom:mr-6 lg-custom:ml-24 lg-custom:mt-12 
          sm-custom:m-24
          md:mx-12"
          >
            <div>
              <h1
                className="font-extrabold text-xl
                mobile:text-4xl
                md:text-7xl
                lg:text-8xl lg:leading-[120px]
                3xl:text-9xl 3xl:leading-[140px]"
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-100 to-sky-300">
                  Binh Nguyen
                </span>
              </h1>
              <h6
                className="text-md font-thin text-cyan-200 mt-3
                md:text-4xl md:mt-6
                lg:mt-12
                3xl:mt-14 3xl:text-5xl"
              >
                Frontend Developer
              </h6>
              <p
                className="font-extralight mt-3 text-zinc-200
                md:text-xl md:mt-6
                lg:mt-12 lg:leading-10
                3xl:mt-14 3xl:text-2xl 3xl:leading-[50px]"
              >
                I am proficient in JavaScript, and leading frontend frameworks,
                allowing me to deliver robust, full-stack solutions.
              </p>
            </div>

            {/* ABOUT // EXPERIENCE // PROJECTS  */}
            <div className="uppercase transition-all ease-in-out cursor-pointer font-extralight group
            md:text-xl md:leading-10 md:mt-6
            lg:leading-[50px] lg:mt-12
            3xl:text-2xl 3xl:leading-[60px]"
            >
              <p className="hover:font-bold duration-150">
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
              <p className="hover:font-bold duration-150">
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
              <p className="hover:font-bold duration-150">
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
          <div className="mt-6 md:ml-12 md:mt-12 lg:mt-16 3xl:mt-20">
            <GroupIcons />
          </div>
        </div>

        {/* RIGHT DIV */}
        <div
          className="z-10 mt-6
          md
          lg:col-span-3 
          sm-custom:px-28"
        >
          {/* ABOUT  */}
          <Element name="about">
            <AboutMe />
          </Element>

          {/* EXPERIENCE */}
          <Element name="experience">
            <Experience expList={expList} />
          </Element>

          {/* PROJECT  */}
          <Element name="projects" >
            <Projects projects={projects} />
          </Element>

          {/* link to project  */}
          <Link to="/projects">
            <div
              className="flex items-center gap-4 text-teal-200
               hover:text-teal-400 hover:translate-x-4 group
              duration-150 delay-75 transition-colos
              md:ml-12"
            >
              <p>Projects</p>
              <FaArrowRight className="group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>

      {window.innerWidth < 1200 && <Footer />}
    </div>
  );
};

export default Homepage;
