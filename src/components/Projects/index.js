import React from 'react';
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
        {/* <div className='w-64 h-64 bg-red-100 relative'>
          <div className='absolute inset-0 bg-cover bg-center z-0'></div>
          <div className='opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-6xl text-white font-semibold'>
            Dwayne
          </div>
        </div> */}

        <div className=' basis-1/3 flex-1 relative'>
          <img
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt=''
            src={Capstone}
          />
          <div className='bg-gradient-to-b from-red-400 opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center md:text-2xl text-sm pt-8 pb-2 px-8 text-white font-semibold'>
            This daily workout tracker will help you maintain your physical
            health by adding workouts to your calendar and tracking your
            progress over the months. So start your journey today!
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
