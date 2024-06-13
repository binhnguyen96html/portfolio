import React from 'react';
import { FiLink } from 'react-icons/fi';

const ProjectsBig = ({ projects }) => {
  return (
    <div>
      {projects.map((pro, idx) => (
        <div
          key={idx}
          className="xl-custom:grid grid-cols-4 
          mx-12 mb-16 p-12 rounded-xl  shadow-xl
      hover:bg-teal-900 hover:bg-opacity-50
      transition-all duration-300 group"
        >
          <div
            className="col-span-2
          sm-custom:pr-4 
          iphone-promax:px-3"
          >
            <img
              src={pro.img}
              className="group-hover:scale-105 iphone-promax:group-hover:scale-100 rounded-lg"
              alt={pro.img}
            />
          </div>

          <div
            className="col-span-2 mt-4 py-8 px-16
          md-custom:ml-4 md-custom:mt-0
          iphone-promax:mt-0 iphone-promax:p-3"
          >
            <p
              className="relative text-xl text-teal-400
              group-hover:text-cyan-200 duration-300
              iphone-promax:mt-0
              lg-custom:text-3xl"
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
                  className="bg-cyan-100 text-cyan-950 text-xl
                    mr-2 rounded-xl py-1 px-6 mt-4 
                    xl-custom:text-2xl
                    iphone-promax:text-sm"
                >
                  {s}
                </span>
              ))}
            </div>

            <p
              className="mt-5 opacity-70 text-sm
              xl-custom:text-2xl
              iphone-promax:ml-1"
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
