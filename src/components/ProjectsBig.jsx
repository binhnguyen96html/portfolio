import React from 'react';
import { FiLink } from 'react-icons/fi';

const ProjectsBig = ({ projects }) => {
  return (
    <div>
      {projects.map((pro, idx) => (
        <div
          key={idx}
          className="md-custom:grid grid-cols-4 mb-8 px-6 py-8 rounded-xl
      hover:bg-teal-900 hover:bg-opacity-50
      transition-all duration-300 group "
        >
          <div className="col-span-2 p-8 sm-custom:pr-4">
            <img src={pro.img} className='group-hover:scale-110 rounded-lg' alt={pro.img}/>
          </div>

          <div className="col-span-2 mt-4 py-8 px-16
          md-custom:ml-4 md-custom:mt-0">
              <p
                className="relative text-3xl  
              group-hover:text-cyan-200 duration-300">
                {pro.description}
                <a
                  className="absolute ml-2 mt-1
                duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:font-bold"
                  href={pro.link}
                  target='_blank'
                  rel='noreferrer'
                >
                  <FiLink className="icon text-xl mt-2" />
                </a>
              </p>


              <div className="overflow-hidden flex flex-wrap mt-4">
                {pro.skills.map((s, i) => (
                  <span
                    key={i}
                    className="bg-cyan-100 text-cyan-950 text-xl
                    mr-2 rounded-xl py-2 px-4 mt-4"
                  >
                    {s}
                  </span>
                ))}
              </div>
              
              <p className='mt-4 opacity-70 text-xl'>{pro.period}</p>
            </div>
          </div>
      ))}
    </div>
  );
};


export default ProjectsBig