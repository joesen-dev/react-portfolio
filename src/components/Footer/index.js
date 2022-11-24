import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <footer className='p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800'>
      <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
        Email: josephsenyonga38@gmail.com{' '}
      </span>
      <div className='flex mt-4 space-x-6 sm:justify-center sm:mt-0'>
        <a
          href='https://www.linkedin.com/in/josephsenyonga38/'
          className='text-gray-600 hover:text-gray-900 dark:hover:text-white'>
          <AiFillLinkedin />
          <span className='sr-only'>LinkedIn page</span>
        </a>
        <a
          href='https://github.com/joesen-dev'
          className='text-gray-600 hover:text-gray-900 dark:hover:text-white'>
          <AiFillGithub />
          <span className='sr-only'>GitHub account</span>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
