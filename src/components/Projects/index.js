import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Capstone from '../../assets/images/project-images/Capstone.png';
import Git_Social from '../../assets/images/project-images/Git_Social.png';
import Note_Taker from '../../assets/images/project-images/Notes-page.png';
import README_Pro from '../../assets/images/project-images/README_Pro.png';
import Team_Builder from '../../assets/images/project-images/Team_Builder.png';
import Staff_Tracker from '../../assets/images/project-images/Staff_Tracker.png';

function Projects() {
  return (
    <section id='projects' className='mt-6 border-t border-slate-200'>
      <div className='pt-4'>
        <h3 className='text-3xl py-1 dark:text-white'>Projects</h3>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          Check out some projects I've worked on!
        </p>
      </div>
      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        {/* Capstone */}
        <div className='basis-1/3 flex-1 relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
          <img
            className='rounded-t-lg'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            src={Capstone}
            alt='Capstone langing page'
          />
          <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Capstone
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              This daily workout tracker will help you maintain your physical
              health by adding workouts to your dashboard and tracking your
              progress over the months.
            </p>
            <div className='w-full inline-flex justify-between'>
              <a
                href='https://whispering-hamlet-84520.herokuapp.com/'
                className='inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700'>
                Live Link
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
                href='https://github.com/leunggerry/personal-health-tracker'
                className='text-gray-500 text-2xl hover:text-gray-900 dark:hover:text-white'>
                <AiFillGithub />
                <span className='sr-only'>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
        {/* Git Social */}
        <div className='basis-1/3 flex-1 relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
          <img
            className='rounded-t-lg'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            src={Git_Social}
            alt='Git Social Landing Page'
          />
          <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Git Social
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Git Social is a social app for new developers to post about their
              projects and solicit help from other developers looking to build
              their portfolios.
            </p>
            <div className='w-full inline-flex justify-between'>
              <a
                href='https://pacific-taiga-17313.herokuapp.com/'
                className='inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700'>
                Live Link
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
                href='https://github.com/leunggerry/git-social'
                className='text-gray-500 text-2xl hover:text-gray-900 dark:hover:text-white'>
                <AiFillGithub />
                <span className='sr-only'>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
        {/* Team Builder */}
        <div className='basis-1/3 flex-1 relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
          <img
            className='rounded-t-lg'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            src={Team_Builder}
            alt='Team Builder Page'
          />
          <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Team Builder
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              Team builder is a terminal-based application designed for managers
              that takes user input and generates a basic web page with their
              team.
            </p>
            <div className='w-full inline-flex justify-between'>
              <a
                href='https://github.com/joesen-dev/team-builder'
                className='inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700'>
                Source code
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
                href='https://github.com/joesen-dev/team-builder'
                className='text-gray-500 text-2xl hover:text-gray-900 dark:hover:text-white'>
                <AiFillGithub />
                <span className='sr-only'>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
        {/* README Pro*/}
        <div className='basis-1/3 flex-1 relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
          <img
            className='rounded-t-lg'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            src={README_Pro}
            alt='Team Builder Page'
          />
          <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              README Pro
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              The README generator is designed to streamline creating
              Professional README files for developers
            </p>
            <div className='w-full inline-flex justify-between'>
              <a
                href='https://github.com/joesen-dev/readme-pro'
                className='inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700'>
                Source code
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
                href='https://github.com/joesen-dev/readme-pro'
                className='text-gray-500 text-2xl hover:text-gray-900 dark:hover:text-white'>
                <AiFillGithub />
                <span className='sr-only'>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
        {/* Staff Tracker*/}
        <div className='basis-1/3 flex-1 relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
          <img
            className='rounded-t-lg'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            src={Staff_Tracker}
            alt='Team Builder Page'
          />
          <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Staff Tracker
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              View and manage the the departments, roles, and employees in your
              company in the command line with Staff Tracker.
            </p>
            <div className='w-full inline-flex justify-between'>
              <a
                href='https://github.com/joesen-dev/staff-tracker'
                className='inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700'>
                Source code
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
                href='https://github.com/joesen-dev/staff-tracker'
                className='text-gray-500 text-2xl hover:text-gray-900 dark:hover:text-white'>
                <AiFillGithub />
                <span className='sr-only'>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
        {/* Staff Tracker*/}
        <div className='basis-1/3 flex-1 relative bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700'>
          <img
            className='rounded-t-lg'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            src={Note_Taker}
            alt='Team Builder Page'
          />
          <div className='p-5'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              Staff Tracker
            </h5>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
              View and manage the the departments, roles, and employees in your
              company in the command line with Staff Tracker.
            </p>
            <div className='w-full inline-flex justify-between'>
              <a
                href='https://github.com/joesen-dev/staff-tracker'
                className='inline-flex items-center font-medium text-blue-600 hover:text-blue-800 dark:text-blue-500 dark:hover:text-blue-700'>
                Source code
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
                href='https://github.com/joesen-dev/staff-tracker'
                className='text-gray-500 text-2xl hover:text-gray-900 dark:hover:text-white'>
                <AiFillGithub />
                <span className='sr-only'>GitHub Repository</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
