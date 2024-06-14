import React from 'react';
import { FiLink } from 'react-icons/fi';
import { PiReadCvLogoThin } from "react-icons/pi";

const Experience = ({ expList }) => {
  return (
    <div className="mt-24 md:mt-12 3xl:mt-20">
      {expList &&
        expList.map((expItem, idx) => (
          <div
            key={idx}
            className="md:grid grid-cols-5 px-12 py-6 rounded-xl shadow-xl
      hover:bg-teal-900 hover:bg-opacity-50 transition-all duration-300 delay-75 group 
      md:bg-teal-900 md:mx-12 3xl:px-20
      dark:bg-teal-700 dark:text-white"
          >
            <div className="col-span-2 opacity-70 flex flex-col gap-2 text-base
            3xl:text-xl">
              <p>{expItem.period}</p>
              <p>{expItem.location}</p>

              <div className="hover:text-teal-100 hover:translate-x-1  text-sm">
              <a
                href={expItem.social_media}
                target="_blank"
                rel="noreferrer"
                className='flex gap-2'
              >
                MEDIA
              <PiReadCvLogoThin className='mt-[3px]'/>
              </a>
            </div>

            </div>

            <div
              className="col-span-3 ml-0
              md:mt-0"
            >
              <p className="text-xl font-bold 3xl:text-2xl">{expItem.jobTitle}</p>

              <p
                className="relative mt-4 text-teal-400
              group-hover:text-cyan-200 duration-300
              md:text-xl"
              >
                <a href={expItem.link} target='_blank' rel='noreferrer' > {expItem.company}</a>
                <a
                  className="absolute ml-2 mt-1
                duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:font-bold"
                  href={expItem.link} target='_blank' rel='noreferrer'
                >
                  <FiLink className="icon text-base mt-1" />
                </a>
              </p>

              <p className="mt-4 font-thin text-sm 3xl:text-md ">{expItem.description}</p>

              <div className="overflow-hidden flex flex-wrap mt-4 ">
                {expItem.skills.map((s, i) => (
                  <span
                    key={i}
                    className="bg-cyan-100 text-cyan-950 text-xs
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
