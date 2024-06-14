import React from 'react';
import { FiLink } from 'react-icons/fi';

const Projects = ({ projects }) => {
  return (
    <div className="mt-24 md:mt-12">
      {projects.map((pro, idx) => (
        <div
          key={idx}
          className="md:grid grid-cols-5 gap-4 p-12 mb-6 rounded-xl shadow-md
        hover:bg-teal-900 hover:bg-opacity-50 transition-all duration-300 group 
        md:bg-teal-900 
        md:mx-12 3xl:px-20">
          <div className="col-span-2">
            <img
              src={pro.img}
              className="group-hover:scale-105 rounded-lg"
              alt={pro.img}
            />
          </div>

          <div className="col-span-3 mt-4
          md:mt-0 3xl:ml-6" >
            <div
              className="relative text-base text-teal-400
              group-hover:text-cyan-200 duration-300
              md:text-xl 3xl:font-bold text-wrap"
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
                <FiLink className="icon text-base mt-1" />
              </a>
            </div>

            <div className="overflow-hidden flex flex-wrap mt-4">
              {pro.skills.map((s, i) => (
                <span
                  key={i}
                  className="bg-cyan-100 text-cyan-950 text-xs
                    mr-2 rounded-xl py-1 px-2 mt-1"
                >
                  {s}
                </span>
              ))}
            </div>

            <p className="mt-4 opacity-70">{pro.period}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
