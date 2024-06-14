import React from 'react';
import GroupIcons from './GroupIcons';


const Footer = () => {
  return (
    <footer
      className="flex justify-between items-center w-screen
      border-t border-teal-500 p-6 3xl:pl-28
      dark:border-teal-200"
    >
      {/* ICONS  */}
      <GroupIcons />

    </footer>
  );
};

export default Footer;
