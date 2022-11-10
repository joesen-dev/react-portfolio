import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import Capstone from '../../assets/images/project-images/Capstone.png';
import Git_Social from '../../assets/images/project-images/Git_social.png';
import FOODr from '../../assets/images/project-images/FOODr.png';
import README_Pro from '../../assets/images/project-images/README_Pro.png';
import Team_Builder from '../../assets/images/project-images/Team_Builder.png';
import Staff_Tracker from '../../assets/images/project-images/Staff_Tracker.png';

function Projects() {
  return (
    <section>
      <div>
        <h3 className='text-3xl py-1 dark:text-white'>Projects</h3>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          Check out some projects I've worked on!
        </p>
      </div>
      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        <div className=' basis-1/3 flex-1 relative'>
          <img
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt=''
            src={Capstone}
          />
          <div className='grid grid-cols-1 bg-gradient-to-b from-red-400 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center md:text-2xl text-sm pt-8 pb-2 px-8 text-white font-semibold'>
            <p>
              This daily workout tracker will help you maintain your physical
              health by adding workouts to your calendar and tracking your
              progress over the months. So start your journey today!
            </p>
            <div className='text-5xl flex justify-center gap-16 py-3 text-white dark:text-gray-400'>
              <a href='https://github.com/leunggerry/personal-health-tracker'>
                <AiFillGithub />
              </a>
            </div>
          </div>
        </div>
        <div className='basis-1/3 flex-1'>
          <img
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt=''
            src={Git_Social}
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <img
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt=''
            src={FOODr}
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <img
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt=''
            src={README_Pro}
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <img
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt=''
            src={Staff_Tracker}
          />
        </div>
        <div className='basis-1/3 flex-1'>
          <img
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt=''
            src={Team_Builder}
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
