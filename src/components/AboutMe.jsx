import React from 'react';

const AboutMe = () => {
  return (
    <div
      className=" font-extralight indent-0 text-sm leading-6
      mobile:mt-6
      md:px-12 md:text-md md:leading-8
      lg:text-[16px] lg:leading-10 lg:text-justify lg:indent-9 lg:mt-0
      3xl:text-xl 3xl:leading-[60px] "
    >
      <p>
        California Seismic's Frontend Developer team benefits from my expertise
        in JavaScript and React.js, where we deliver premium web experiences. My
        academic foundation in <span className='font-semibold'>Project Management</span> from Northeastern University
        and <span className='font-semibold'>Computer Science</span> from Mission College strongly complements my
        technical role, ensuring that every project is approached with a
        strategic lens for maximum efficiency and impact.
      </p>
    </div>
  );
};

export default AboutMe;
