import React from 'react';
import { FiLink } from 'react-icons/fi';
import { ResumeCircle } from './ResumeCircle';

const ProjectsBig = ({ projects }) => {
  return (
    <div className='lg:grid lg:grid-cols-2'>
      {projects.map((pro, idx) => (
        <div
          key={idx}
          className="md:grid md:grid-cols-4 mx-12 mb-16 py-10 rounded-xl px-6 shadow-xl
      hover:bg-teal-900 hover:bg-opacity-50 transition-all duration-300 group
      3xl:mx-32 3xl:mt-32 lg:col-span-1 "
        >
          {/* Resume Circle  */}
          <ResumeCircle />

          <div
            className="col-span-2 px-6
          md:px-3 lg:px-6 3xl:px-12"
          >
            <img
              src={pro.img}
              className="group-hover:scale-105 md:group-hover:scale-100 rounded-lg"
              alt={pro.img}
            />
          </div>

          <div
            className="col-span-2 mt-4 py-8 px-16
          md:mt-0 md:p-3
          lg:px-18 lg:py-0"
          >
            <p
              className="relative text-base text-teal-400
              group-hover:text-cyan-200 duration-300
              lg:text-2xl 3xl:text-4xl 3xl:font-bold"
            >
              <a href={pro.link} target="_blank" rel="noreferrer">
                {pro.description}
              </a>
              <a
                className="absolute ml-2 mt-1
                duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:font-bold"
                href={pro.link}
                target="_blank"
                rel="noreferrer"
              >
                <FiLink className="icon text-xl mt-2" />
              </a>
            </p>

            <div className="overflow-hidden flex flex-wrap mt-4">
              {pro.skills.map((s, i) => (
                <span
                  key={i}
                  className="bg-cyan-100 text-cyan-950 rounded-xl py-1 px-3 mr-1 mt-1
                    md:text-xs
                    lg:text-md lg:py-2 lg:px-4 lg:rounded-3xl lg:mr-2
                    3xl:text-xl 3xl:px-6 3xl:py-3 3xl:mt-2"
                >
                  {s}
                </span>
              ))}
            </div>

            <p
              className="mt-5 opacity-70 text-xs
              md:ml-1 lg:text-xl 3xl:text-2xl"
            >
              {pro.period}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsBig;
