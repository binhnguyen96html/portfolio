import React from 'react'

export const ResumeCircle = () => {
  return (
    <div className="fixed z-20 bottom-20 right-20 text-xs font-bold cursor-pointer">
    <div className="flex relative h-8 w-8
    md:h-16 md:w-16">
      <span className="absolute z-10 h-full w-full animate-ping bg-rose-500 rounded-full opacity-20"></span>
      <p
        className="relative z-20 rounded-full bg-gradient-to-r from-rose-300 to-rose-600 
      items-center flex w-full h-full justify-center overflow-hidden"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/17vVzVLmr59X27YuNf8W9vBxh8s7PdQLS/view?usp=sharing"
        >
          {window.innerWidth < 640 ? 'CV' : 'Resume'}
        </a>
      </p>
    </div>
  </div>
  )
}
