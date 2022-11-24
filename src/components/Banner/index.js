import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
// import Image from 'next/legacy/image';
import headshot from '../../assets/images/headshot.png';

function Banner() {
  return (
    <>
      <div className='text-center p-10'>
        <h2 className='text-5xl py-2 text-red-400 font-medium md:text-6xl'>
          Joseph Senyonga
        </h2>
        <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>
          Full Stack Developer
        </h3>
        <p className='text-md py-5 leading-8 text-gray-800 md:text-xl dark:text-gray-200'>
          I design and build web applications that are both easy to use and
          aesthetically pleasing. I aim to create a positive user experience
          that engages and inspires users.
        </p>
      </div>
      <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400'>
        <a href='https://www.linkedin.com/in/josephsenyonga38/'>
          <AiFillLinkedin />
        </a>
        <a href='https://github.com/joesen-dev'>
          <AiFillGithub />
        </a>
      </div>
      <div className='relative mx-auto bg-gradient-to-b from-red-400 rounded-full w-80 h-80 mt-16 overflow-hidden md:h-96 md:w-96'>
        <img src={headshot} className='headshot' alt='An avatar of Joseph' />
      </div>
    </>
  );
}

export default Banner;
