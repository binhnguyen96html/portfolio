import React from 'react';

const AboutMe = () => {
  return (
    <div
      className=" font-extralight indent-0 text-sm leading-6 
      md:px-12
      md:text-md md:leading-8
      lg:text-[16px] lg:leading-10 lg:text-justify
      3xl:text-xl 3xl:leading-[60px] 3xl:indent-9"
    >
      <p>
        At SvelteScope, our team is harnessing
        <span className="font-bold"> JavaScript </span>
        to redefine Chrome extension debugging for Svelte applications. With a
        <span className="font-bold">
          Master's degree in Project Management
        </span>
        from Northeastern and an
        <span className="font-bold"> Associate's in Computer Science </span>, my
        focus on creating readable, maintainable code has improved developer
        productivity and the end-user experience.
      </p>
      <p className="mt-6">
        Bringing technical acumen with strategic project management, we've
        optimized web app performance and facilitated a seamless development
        workflow. My role centers on empowering developers with expressive tools
        while contributing to impactful open-source software, driven by a
        commitment to technological excellence and innovation.
      </p>
    </div>
  );
};

export default AboutMe;
