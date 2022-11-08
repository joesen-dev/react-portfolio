import React from 'react';
import Capstone from '../../assets/images/project-images/Capstone.png';
import Git_Social from '../../assets/images/project-images/Git_social.png';
import FOODr from '../../assets/images/project-images/FOODr.png';
import README_Pro from '../../assets/images/project-images/README_Pro.png';
import Team_Builder from '../../assets/images/project-images/Team_Builder.png';
import Staff_Tracker from '../../assets/images/project-images/Staff_Tracker.png';
import noteTaker from '../../assets/images/project-images/note-taker.png';

function Portfolio() {
  return (
    <section>
      <div>
        <h3 className='text-3xl py-1 dark:text-white'>Projects</h3>
        <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200'>
          Check out some projects I've worked on in the portfolio section during
          the past six months!
        </p>
      </div>
      <div className='flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap'>
        <div className=' basis-1/3 flex-1'>
          <img
            className='rounded-lg object-cover'
            width={'100%'}
            height={'100%'}
            layout='responsive'
            alt=''
            src={Capstone}
          />
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

export default Portfolio;
