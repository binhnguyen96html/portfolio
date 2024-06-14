import React from 'react';
import { FiLink } from 'react-icons/fi';

const Resume = () => {
  return (
    <div
      className="
     hover:translate-x-4 hover:font-bold hover:text-sky-200
     transition ease-in-out duration-150 delay-75 group"
    >
      <a
        className="mt-1 ml-2 flex items-center gap-4"
        target="_blank"
        rel="noreferrer"
        href="https://drive.google.com/file/d/17vVzVLmr59X27YuNf8W9vBxh8s7PdQLS/view?usp=sharing"
      >
        <span className="xl-custom:text-2xl md:text-sm ">
          View Full Resume
        </span>
        <FiLink className="text-base mt-1 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:font-bold" />
      </a>
    </div>
  );
};

export default Resume;
