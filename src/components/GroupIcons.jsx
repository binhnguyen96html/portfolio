import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';


const GroupIcons = () => {
  return (
    <div
      className="text-xl text-teal-200 flex justify-start gap-4 items-center
      transition ease-in-out 
      md:text-3xl 
      3xl:text-4xl 
      dark:text-teal-700">
      <div className="hover:text-teal-100 dark:hover:text-teal-500 hover:scale-105 ">
        <a
          href="https://github.com/binhnguyen96html"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      </div>

      <div className="hover:text-teal-100 dark:hover:text-teal-500 hover:scale-105">
        <a
          href="https://www.linkedin.com/in/binh-nguyen-a07731101/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>

      <div className="hover:text-teal-100 dark:hover:text-teal-500 hover:scale-105">
        <a
          href="mailto:binhnguyenbiz96@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <FiMail />
        </a>
      </div>
    </div>
  );
};

export default GroupIcons;
