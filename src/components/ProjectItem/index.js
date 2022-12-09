import React from 'react';
import { AiFillGithub } from 'react-icons/ai';

function ProjectItem(item) {
  const { image, name, description, technologies, liveLink, gitHub } = item;

  return (
    <div className='basis-1/3 flex-1 relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
      <img
        className='rounded-t-lg'
        width={'100%'}
        height={'100%'}
        layout='responsive'
        src={image}
        alt='project screenshot'
      />
      <div className='p-5'>
        <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {name}
        </h5>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          {description}
        </p>
        <div className='container mx-auto py-4'>
          <details className='shadow-inner bg-gray-50 dark:bg-gray-600 rounded group mb-4'>
            <summary className='list-none flex flex-wrap items-center cursor-pointer focus-visible:outline-none focus-visible:ring focus-visible:ring-red-400 rounded group-open:rounded-b-none group-open:z-[1]'>
              <h3 className='flex flex-1 p-4 font-semibold dark:text-white'>
                Technologies
              </h3>
              <div className='flex w-10 items-center justify-center'>
                <div className='border-8 border-transparent border-l-gray-600 dark:border-l-gray-900 ml-2 group-open:rotate-90 transition-transform origin-left'></div>
              </div>
            </summary>
            <div
              className='p-4 bg-gradient-to-br from-purple-400 via-blue-400 to-blue-500 text-gray-700 dark:text-gray-900'
              id='scroll-container'>
              <div id='scroll-text' className='font-medium'>
                {technologies}
              </div>
            </div>
          </details>
        </div>
        <div className='w-full inline-flex justify-between'>
          <a
            href={liveLink}
            className='inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700'>
            See more
            <svg
              className='w-6 h-6 ml-1'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clipRule='evenodd'></path>
            </svg>
          </a>
          <a
            href={gitHub}
            className='text-gray-500 text-2xl hover:text-gray-900 dark:hover:text-white'>
            <AiFillGithub />
            <span className='sr-only'>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectItem;
