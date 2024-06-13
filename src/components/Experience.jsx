import React from 'react';
import { FiLink } from 'react-icons/fi';

const Experience = ({ expList }) => {
  return (
    <div className="mt-24 iphone-promax:mt-12">
      {expList.map((expItem, idx) => (
        <div
          key={idx}
          className="md-custom:grid grid-cols-5 mb-8 px-6 py-8 rounded-xl
      hover:bg-teal-900 hover:bg-opacity-50
      transition-all duration-300 delay-75 group 
      lg-custom:text-xl
      iphone-promax:bg-teal-900"
        >
          <div className="col-span-2 opacity-70">
            <p>{expItem.period}</p>
            <p className='mt-2'>{expItem.location}</p>
          </div>

          <div className="col-span-3 ml-0 
          md-custom:ml-4 md-custom:mt-0
          sm-custom:mt-2
          iphone-promax:mt-4">
              <p className='text-xl font-bold'>{expItem.jobTitle}</p>

              <p
                className="relative mt-4
              group-hover:text-cyan-200 duration-300"
              >
                {expItem.company}
                <a
                  className="absolute ml-2 mt-1
                duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:font-bold
                "
                  href={expItem.link}
                >
                  <FiLink className="icon text-base mt-1" />
                </a>
              </p>

              <p className='mt-4 font-thin text-base'>{expItem.description}</p>

              <div className="overflow-hidden flex flex-wrap mt-4">
                {expItem.skills.map((s, i) => (
                  <span
                    key={i}
                    className="bg-cyan-100 text-cyan-950 text-sm
                    mr-2 rounded-xl py-1 px-2 mt-1"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>
      ))}
    </div>
  );
};

export default Experience;
